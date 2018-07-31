import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CloudOverviewComponent} from './components/clouds/cloud-overview/cloud-overview.component';
import {NewCloudComponent} from './components/clouds/new-cloud/new-cloud.component';
import {CloudViewComponent} from './components/clouds/cloud-view/cloud-view.component';

const routes: Routes = [

  {path: 'cloud/:id', component: CloudViewComponent},

  {path: 'new-cloud', component: NewCloudComponent},

  {path: 'clouds', component: CloudOverviewComponent},
  {path: '', component: CloudOverviewComponent},

  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
