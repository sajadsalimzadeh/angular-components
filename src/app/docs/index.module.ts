import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {IndexComponent} from "./index.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: IndexComponent, children: [

        {path: 'timeline', loadChildren: () => import('./timeline/index.module').then(x => x.Module)},
        {path: 'data-table', loadChildren: () => import('./data-table/index.module').then(x => x.Module)},
        {path: 'forms', loadChildren: () => import('./forms/index.module').then(x => x.Module)},
      ]
    }])
  ],
  declarations: [
    IndexComponent
  ]
})
export class Module {

}
