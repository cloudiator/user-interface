import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CloudOverviewComponent} from './components/clouds/cloud-overview/cloud-overview.component';
import {NewCloudComponent} from './components/clouds/new-cloud/new-cloud.component';
import {CloudViewComponent} from './components/clouds/cloud-view/cloud-view.component';
import {HardwareOverviewComponent} from './components/hardware/hardware-overview/hardware-overview.component';
import {ImagesOverviewComponent} from './components/images/images-overview/images-overview.component';
import {LocationsOverviewComponent} from './components/locations/locations-overview/locations-overview.component';
import {YamlEditorComponent} from './components/editor/yaml-editor/yaml-editor.component';
import {SchedulesOverviewComponent} from './components/schedules/schedules-overview/schedules-overview.component';

const routes: Routes = [

  {path: 'cloud/:id', component: CloudViewComponent},

  {path: 'new-cloud', component: NewCloudComponent},

  {path: 'hardware', component: HardwareOverviewComponent},

  {path: 'images', component: ImagesOverviewComponent},

  {path: 'locations', component: LocationsOverviewComponent},

  {path: 'editor', component: YamlEditorComponent},

  {path: 'schedules', component: SchedulesOverviewComponent},
  {path: 'schedules/:id', component: SchedulesOverviewComponent},

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
