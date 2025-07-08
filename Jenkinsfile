@Library('2mc@1.0') _

pipeline {
  agent any
  options {
    disableConcurrentBuilds()
    buildDiscarder(logRotator(numToKeepStr: '30'))
    timeout(time: 1, unit: 'HOURS')
    timestamps()
    ansiColor('xterm')
  }
  parameters {
    choice(name: 'ENVIRONMENT', choices: [
      '',
      'DEV',
      'STAGING',
      'PROD',
    ], description: 'Select Environment')
  }
  environment {
    APP_ENV = getEnv([
      DEV: ['dev'],
      STAGING: ['staging'],
      PROD: ['master'],
    ], ENVIRONMENT)
    STACK_NAME="ngx-restangular-${APP_ENV.toLowerCase()}"
    DOCKER_REGISTRY = "2muchcoffee/ngx-restangular-landing"
    DOCKER_REGISTRY_CREDENTIAL = '2MUCHCOFFEE_DOCKER_HUB'
    IMAGE_TAG = "${GIT_BRANCH}-${BUILD_NUMBER}"
    REMOTE = ''
  }
  stages {
    stage('Add Cred Files') {
      environment {
        SECRET_ENV_FILE = credentials("ENV_${APP_ENV}")
      }
      steps {
        sh "cp ${SECRET_ENV_FILE} .env"
      }
    }
    stage('Build And Deploy') {
      steps {
        buildAndDeploy([
          dockerRegistry: DOCKER_REGISTRY,
          buildArgs: "-f .docker/Dockerfile .",
          registryCredentials: DOCKER_REGISTRY_CREDENTIAL,
          tags: [IMAGE_TAG],
        ])
      }
    }
    stage('Create Connection Config To Remote Server') {
      steps {
        script {
          REMOTE = createRemoteConnection(
            APP_ENV,
            [
              [
                  condition: ['DEV', 'STAGING', 'PROD'],
                  credentialsId: 'REMOTE_2MC_PROD_INTERNAL_NODE_1',
                  host: '144.76.176.67',
              ]
            ]
          )
        }
      }
    }
    stage('Pull Docker Image On Remote Server') {
      steps {
        pullDockerImage([
          remote: REMOTE,
          credentialsId: DOCKER_REGISTRY_CREDENTIAL,
          image: "$DOCKER_REGISTRY:$IMAGE_TAG"
        ])
      }
    }
    stage('Execute Commands On Remote Server') {
      environment {
        PATH = mapping([
          '/home/internal/www/ngx-restangular/ngx-restangular-landing-dev': ['DEV', 'STAGING'],
          '/home/internal/www/ngx-restangular/ngx-restangular-landing': ['PROD'],
        ], APP_ENV)
        COMPOSE_FILE = mapping([
          'docker-stack.yml': ['DEV', 'STAGING', 'PROD'],
        ], APP_ENV)
      }
      steps {
        sshPutFiles(REMOTE, PATH, ['.env*', 'docker-*.yml']);
        sshExec remote: REMOTE, path: PATH, env: [TAG: IMAGE_TAG], command: """
          export \$(cat .env | grep -v '^#' | xargs)
        
          docker stack config --compose-file docker-stack.yml > docker-stack-resolved.yml
          docker stack deploy -c docker-stack-resolved.yml $STACK_NAME
        """
      }
    }
  }
  post {
    always {
      script {
        slackNotifier('2mc-projects')
        cleanWs()
      }
    }
  }
}
