/**
 * Repesents a PaaS environemnt to run an component
 */
export interface PlatformHardware {
    /**
     * Human-readable name for the hardware
     */
    name: string;
    /**
     * Number of cores
     */
    cores: number;
    /**
     * Amount of RAM
     */
    ram: number;
    /**
     * Amount of disk space
     */
    disk: number;
    /**
     * Unique identifier for the hardware
     */
    id?: string;
}
