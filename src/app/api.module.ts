import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { CloudService } from './api/cloud.service';
import { JobService } from './api/job.service';
import { MatchmakingService } from './api/matchmaking.service';
import { MiscService } from './api/misc.service';
import { MonitoringService } from './api/monitoring.service';
import { NodeService } from './api/node.service';
import { PlatformService } from './api/platform.service';
import { QueueService } from './api/queue.service';
import { UserService } from './api/user.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    CloudService,
    JobService,
    MatchmakingService,
    MiscService,
    MonitoringService,
    NodeService,
    PlatformService,
    QueueService,
    UserService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
