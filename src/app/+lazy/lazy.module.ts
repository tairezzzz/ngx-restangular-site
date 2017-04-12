import {NgModule, Component} from '@angular/core'
import {RouterModule} from '@angular/router'


@Component({
	selector: 'lazy-view',
	templateUrl: './lazy.component.html',
	styleUrls: ['./lazy.component.css']
})
export class LazyView {}

@NgModule({
	declarations: [LazyView],
	imports: [
		RouterModule.forChild([
			{ path: '', component: LazyView, pathMatch: 'full'}
		])
	]
})
export class LazyModule {

}
