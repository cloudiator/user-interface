import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CloudOverviewComponent} from './components/clouds/cloud-overview/cloud-overview.component';
import {NewCloudComponent} from './components/clouds/new-cloud/new-cloud.component';
import {CloudViewComponent} from './components/clouds/cloud-view/cloud-view.component';
import {HardwareOverviewComponent} from './components/hardware/hardware-overview/hardware-overview.component';
import {ImagesOverviewComponent} from './components/images/images-overview/images-overview.component';

const routes: Routes = [

  {path: 'cloud/:id', component: CloudViewComponent},

  {path: 'new-cloud', component: NewCloudComponent},

  {path: 'hardware', component: HardwareOverviewComponent},

  {path: 'images', component: ImagesOverviewComponent},

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
