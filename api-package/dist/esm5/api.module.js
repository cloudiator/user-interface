import * as tslib_1 from "tslib";
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';
import { CloudService } from './api/cloud.service';
import { JobService } from './api/job.service';
import { MatchmakingService } from './api/matchmaking.service';
import { MiscService } from './api/misc.service';
import { MonitoringService } from './api/monitoring.service';
import { NodeService } from './api/node.service';
import { PlatformService } from './api/platform.service';
import { ProcessService } from './api/process.service';
import { QueueService } from './api/queue.service';
import { ScaleService } from './api/scale.service';
import { SecurityService } from './api/security.service';
import { UserService } from './api/user.service';
import { YamlService } from './api/yaml.service';
var ApiModule = /** @class */ (function () {
    function ApiModule(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    ApiModule_1 = ApiModule;
    ApiModule.forRoot = function (configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: Configuration, useFactory: configurationFactory }]
        };
    };
    var ApiModule_1;
    ApiModule = ApiModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [],
            declarations: [],
            exports: [],
            providers: [
                CloudService,
                JobService,
                MatchmakingService,
                MiscService,
                MonitoringService,
                NodeService,
                PlatformService,
                ProcessService,
                QueueService,
                ScaleService,
                SecurityService,
                UserService,
                YamlService
            ]
        }),
        tslib_1.__param(0, Optional()), tslib_1.__param(0, SkipSelf()),
        tslib_1.__param(1, Optional()),
        tslib_1.__metadata("design:paramtypes", [ApiModule,
            HttpClient])
    ], ApiModule);
    return ApiModule;
}());
export { ApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Nsb3VkaWF0b3ItcmVzdC1hcGkvIiwic291cmNlcyI6WyJhcGkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQXFCakQ7SUFRSSxtQkFBcUMsWUFBdUIsRUFDbkMsSUFBZ0I7UUFDckMsSUFBSSxZQUFZLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7U0FDdkY7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQywrREFBK0Q7Z0JBQy9FLDBEQUEwRCxDQUFDLENBQUM7U0FDL0Q7SUFDTCxDQUFDO2tCQWpCUSxTQUFTO0lBQ0osaUJBQU8sR0FBckIsVUFBc0Isb0JBQXlDO1FBQzNELE9BQU87WUFDSCxRQUFRLEVBQUUsV0FBUztZQUNuQixTQUFTLEVBQUUsQ0FBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLENBQUU7U0FDOUUsQ0FBQztJQUNOLENBQUM7O0lBTlEsU0FBUztRQW5CckIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFPLEVBQUU7WUFDaEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsT0FBTyxFQUFPLEVBQUU7WUFDaEIsU0FBUyxFQUFFO2dCQUNULFlBQVk7Z0JBQ1osVUFBVTtnQkFDVixrQkFBa0I7Z0JBQ2xCLFdBQVc7Z0JBQ1gsaUJBQWlCO2dCQUNqQixXQUFXO2dCQUNYLGVBQWU7Z0JBQ2YsY0FBYztnQkFDZCxZQUFZO2dCQUNaLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZixXQUFXO2dCQUNYLFdBQVc7YUFBRTtTQUNoQixDQUFDO1FBU2dCLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7UUFDdEIsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRDJCLFNBQVM7WUFDN0IsVUFBVTtPQVRoQyxTQUFTLENBa0JyQjtJQUFELGdCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBTa2lwU2VsZiwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5cclxuaW1wb3J0IHsgQ2xvdWRTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvY2xvdWQuc2VydmljZSc7XHJcbmltcG9ydCB7IEpvYlNlcnZpY2UgfSBmcm9tICcuL2FwaS9qb2Iuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdGNobWFraW5nU2VydmljZSB9IGZyb20gJy4vYXBpL21hdGNobWFraW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNaXNjU2VydmljZSB9IGZyb20gJy4vYXBpL21pc2Muc2VydmljZSc7XHJcbmltcG9ydCB7IE1vbml0b3JpbmdTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvbW9uaXRvcmluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTm9kZVNlcnZpY2UgfSBmcm9tICcuL2FwaS9ub2RlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybVNlcnZpY2UgfSBmcm9tICcuL2FwaS9wbGF0Zm9ybS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvY2Vzc1NlcnZpY2UgfSBmcm9tICcuL2FwaS9wcm9jZXNzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBRdWV1ZVNlcnZpY2UgfSBmcm9tICcuL2FwaS9xdWV1ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvc2NhbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFNlY3VyaXR5U2VydmljZSB9IGZyb20gJy4vYXBpL3NlY3VyaXR5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vYXBpL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFlhbWxTZXJ2aWNlIH0gZnJvbSAnLi9hcGkveWFtbC5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogICAgICBbXSxcclxuICBkZWNsYXJhdGlvbnM6IFtdLFxyXG4gIGV4cG9ydHM6ICAgICAgW10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDbG91ZFNlcnZpY2UsXHJcbiAgICBKb2JTZXJ2aWNlLFxyXG4gICAgTWF0Y2htYWtpbmdTZXJ2aWNlLFxyXG4gICAgTWlzY1NlcnZpY2UsXHJcbiAgICBNb25pdG9yaW5nU2VydmljZSxcclxuICAgIE5vZGVTZXJ2aWNlLFxyXG4gICAgUGxhdGZvcm1TZXJ2aWNlLFxyXG4gICAgUHJvY2Vzc1NlcnZpY2UsXHJcbiAgICBRdWV1ZVNlcnZpY2UsXHJcbiAgICBTY2FsZVNlcnZpY2UsXHJcbiAgICBTZWN1cml0eVNlcnZpY2UsXHJcbiAgICBVc2VyU2VydmljZSxcclxuICAgIFlhbWxTZXJ2aWNlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwaU1vZHVsZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlndXJhdGlvbkZhY3Rvcnk6ICgpID0+IENvbmZpZ3VyYXRpb24pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogQXBpTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBDb25maWd1cmF0aW9uLCB1c2VGYWN0b3J5OiBjb25maWd1cmF0aW9uRmFjdG9yeSB9IF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEFwaU1vZHVsZSxcclxuICAgICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICAgICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FwaU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGluIHlvdXIgYmFzZSBBcHBNb2R1bGUgb25seS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFodHRwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gaW1wb3J0IHRoZSBIdHRwQ2xpZW50TW9kdWxlIGluIHlvdXIgQXBwTW9kdWxlISBcXG4nICtcclxuICAgICAgICAgICAgJ1NlZSBhbHNvIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwNTc1Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==