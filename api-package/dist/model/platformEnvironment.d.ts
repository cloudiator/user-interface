import { Platform } from './platform';
import { PlatformHardware } from './platformHardware';
import { PlatformRuntime } from './platformRuntime';
import { PlatformService } from './platformService';
/**
 * Repesents a PaaS environemnt to run an component
 */
export interface PlatformEnvironment {
    /**
     * Human-readable name
     */
    name: string;
    platform?: Platform;
    platformHardware: PlatformHardware;
    platformRuntime: PlatformRuntime;
    platformService?: Array<PlatformService>;
    /**
     * Unique identifier
     */
    id?: string;
}
