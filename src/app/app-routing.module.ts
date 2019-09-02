import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CloudOverviewComponent} from './components/clouds/cloud-overview/cloud-overview.component';
import {NewCloudComponent} from './components/clouds/new-cloud/new-cloud.component';
import {CloudViewComponent} from './components/clouds/cloud-view/cloud-view.component';
import {HardwareOverviewComponent} from './components/overview-tables/hardware-overview/hardware-overview.component';
import {ImagesOverviewComponent} from './components/overview-tables/images-overview/images-overview.component';
import {LocationsOverviewComponent} from './components/overview-tables/locations-overview/locations-overview.component';
import {YamlEditorComponent} from './components/editor/yaml-editor/yaml-editor.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {LoginGuard} from './guards/login.guard';
import {SchedulesOverviewComponent} from './components/schedules/schedules-overview/schedules-overview.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},

  {path: 'cloud/:id', component: CloudViewComponent, canActivate: [AuthGuard]},

  {path: 'new-cloud', component: NewCloudComponent, canActivate: [AuthGuard]},

  {path: 'hardware', component: HardwareOverviewComponent, canActivate: [AuthGuard]},

  {path: 'images', component: ImagesOverviewComponent, canActivate: [AuthGuard]},

  {path: 'locations', component: LocationsOverviewComponent, canActivate: [AuthGuard]},

  {path: 'editor', component: YamlEditorComponent, data: {graphs: false}, canActivate: [AuthGuard]},
  {path: 'editor/graphs', component: YamlEditorComponent, data: {graphs: true}, canActivate: [AuthGuard]},

  {path: 'schedules', component: SchedulesOverviewComponent},

  {path: 'clouds', component: CloudOverviewComponent, canActivate: [AuthGuard]},
  {path: '', component: CloudOverviewComponent, canActivate: [AuthGuard]},

  {path: 'clouds', component: CloudOverviewComponent, canActivate: [AuthGuard]},
  {path: '', component: CloudOverviewComponent, canActivate: [AuthGuard]},

  {path: '**', redirectTo: '/', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
