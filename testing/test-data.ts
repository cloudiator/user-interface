import {
  Api,
  Cloud,
  CloudConfiguration,
  CloudCredential, CloudiatorProcess,
  Hardware,
  Image,
  Job,
  LanceInterface,
  Location, OclRequirement,
  OperatingSystem, PortRequired,
  Queue, Schedule
} from 'cloudiator-rest-api';

/* CLOUDS */
export const allClouds: Cloud[] = [
  <Cloud>{
    id: '1234',
    endpoint: 'endpoint.com',
    cloudType: 'PRIVATE',
    api: <Api>{},
    cloudConfiguration: <CloudConfiguration>{
      nodeGroup: 'nodes',
      properties: {
        'propertyOne': 'One',
        'propertyTwo': 'Two'
      }
    },
    credential: <CloudCredential>{
      user: 'user',
      secret: 'secret'
    }
  },
  {
    id: '02f7f6ab33e4a94d0f441947972668ef',
    endpoint: 'https://endpoint.example.com',
    cloudType: 'PRIVATE',
    api: <Api>{
      providerName: 'openstack-nova'
    },
    credential: <CloudCredential>{
      user: 'tenant:username',
      secret: 'MeltdownVictim'
    },
    cloudConfiguration: {
      nodeGroup: 'cloudiator',
      properties: {
        'sword.regions': 'RegionOne, RegionTwo'
      }
    }
  }
];

export const cloudOne: Cloud = <Cloud>{
  id: '1234',
  endpoint: 'endpoint.com',
  cloudType: 'PRIVATE',
  api: <Api>{},
  cloudConfiguration: {
    nodeGroup: 'nodes',
    properties: [
      {
        key: 'propertyOne',
        value: 'One'
      },
      {
        key: 'propertyTwo',
        value: 'Two'
      },
    ]
  },
  credential: <CloudCredential>{
    user: 'user',
    secret: 'secret'
  }
};

export const cloudTwo: Cloud = <Cloud>{
  id: '02f7f6ab33e4a94d0f441947972668ef',
  endpoint: 'https://endpoint.example.com',
  cloudType: 'PRIVATE',
  api: <Api>{
    providerName: 'openstack-nova'
  },
  credential: <CloudCredential>{
    user: 'tenant:username',
    secret: 'MeltdownVictim'
  },
  cloudConfiguration: {
    nodeGroup: 'cloudiator',
    properties: {
      'sword.regions': 'RegionOne, RegionTwo'
    }
  }
};

/* HARDWARE */
export const hardwareOne: Hardware = <Hardware>{
  id: '02f7f6ab33e4a94d0f441947972668ef~RegionOne/931b887e-e747-4a66-b643-0cc5c0caa1cd',
  name: 'small',
  providerId: '931b887e-e747-4a66-b643-0cc5c0caa1cd',
  cores: 2,
  ram: 1024,
  disk: 10,
  location: <Location>{
    id: '02f7f6ab33e4a94d0f441947972668ef~RegionOne',
    name: 'RegionOne',
    providerId: 'RegionOne',
    locationScope: 'REGION',
    isAssignable: false,
    geoLocation: null,
    parent: null
  }
};

export const hardwareTwo: Hardware = <Hardware>{
  id: '02f7f6ab33e4a94d0f441947972668ef~RegionOne/e2ab8703-815b-44b3-ac27-655890718d15',
  name: 'large',
  providerId: 'e2ab8703-815b-44b3-ac27-655890718d15',
  cores: 8,
  ram: 8192,
  disk: 10,
  location: <Location>{
    id: '02f7f6ab33e4a94d0f441947972668ef~RegionOne',
    name: 'RegionOne',
    providerId: 'RegionOne',
    locationScope: 'REGION',
    isAssignable: false,
    geoLocation: null,
    parent: null
  }
};

export const hardwareTree: Hardware = <Hardware>{
  id: '02f7f6ab33e4a94d0f441947972668ef~RegionOne/df09fccf-1a81-42ab-b16b-6932f371a1c8',
  name: 'medium',
  providerId: 'df09fccf-1a81-42ab-b16b-6932f371a1c8',
  cores: 4,
  ram: 4096,
  disk: 10,
  location: <Location>{
    id: '02f7f6ab33e4a94d0f441947972668ef~RegionOne',
    name: 'RegionOne',
    providerId: 'RegionOne',
    locationScope: 'REGION',
    isAssignable: false,
    geoLocation: null,
    parent: null
  }
};

export const allHardware: Hardware[] = [
  hardwareOne,
  hardwareTwo,
  hardwareTree
];

/* IMAGES */
export const imageOne = <Image>{
  id: '02f7f6ab33e4a94d0f441947972668ef~RegionOne/faa7fa7b-ddb3-4af5-aae3-f5d2d568c1c9',
  name: 'molpro-image-v2.8',
  providerId: 'faa7fa7b-ddb3-4af5-aae3-f5d2d568c1c9',
  operatingSystem: <OperatingSystem>{
    operatingSystemFamily: 'UNKOWN_OS_FAMILY',
    operatingSystemArchitecture: 'UNKOWN',
    operatingSystemVersion: -1
  },
  location: <Location>{
    id: '02f7f6ab33e4a94d0f441947972668ef~RegionOne',
    name: 'RegionOne',
    providerId: 'RegionOne',
    locationScope: 'REGION',
    isAssignable: false,
    geoLocation: null,
    parent: null
  }
};
export const imageTwo = <Image>{
  id: '02f7f6ab33e4a94d0f441947972668ef~RegionOne/4805c873-a637-42cb-a58d-027958a10235',
  name: 'cirros',
  providerId: '4805c873-a637-42cb-a58d-027958a10235',
  operatingSystem: <OperatingSystem>{
    operatingSystemFamily: 'UNKOWN_OS_FAMILY',
    operatingSystemArchitecture: 'UNKOWN',
    operatingSystemVersion: -1
  },
  location: <Location>{
    id: '02f7f6ab33e4a94d0f441947972668ef~RegionOne',
    name: 'RegionOne',
    providerId: 'RegionOne',
    locationScope: 'REGION',
    isAssignable: false,
    geoLocation: null,
    parent: null
  }
};

export const imageThree = <Image>{
  id: '02f7f6ab33e4a94d0f441947972668ef~RegionOne/baaca739-89b9-4d86-826f-c281e03a8c19',
  name: 'Ubuntu Server 14.04.2 AMD64 LTS',
  providerId: 'baaca739-89b9-4d86-826f-c281e03a8c19',
  operatingSystem: <OperatingSystem>{
    operatingSystemFamily: 'UBUNTU',
    operatingSystemArchitecture: 'AMD64',
    operatingSystemVersion: -1
  },
  location: <Location>{
    id: '02f7f6ab33e4a94d0f441947972668ef~RegionOne',
    name: 'RegionOne',
    providerId: 'RegionOne',
    locationScope: 'REGION',
    isAssignable: false,
    geoLocation: null,
    parent: null
  }
};

export const allImages: Image[] = [
  imageOne,
  imageTwo,
  imageThree
];

/* JOBS */
export const job = {
  id: '445bdb66-3c87-44ca-bc51-3670b008643e',
  name: 'mediawiki',
  tasks: [
    {
      name: 'wiki',
      ports: [
        {
          type: 'PortProvided',
          name: 'WIKIPROV',
          port: 80
        },
        {
          type: 'PortRequired',
          name: 'WIKIREQMARIADB',
          updateAction: null,
          isMandatory: true
        }
      ],
      interfaces: [
        {
          type: 'LanceInterface',
          containerType: 'DOCKER',
          init: null,
          preInstall:
            'sudo apt-get -y update && sudo apt-get -y install git && git clone https://github.com/dbaur/mediawiki-tutorial.git',
          install: './mediawiki-tutorial/scripts/lance/mediawiki.sh install',
          postInstall: './mediawiki-tutorial/scripts/lance/mediawiki.sh configure',
          preStart: null,
          start: './mediawiki-tutorial/scripts/lance/mediawiki.sh startBlocking',
          startDetection: null,
          stopDetection: null,
          postStart: null,
          preStop: null,
          stop: null,
          postStop: null,
          shutdown: null
        }
      ],
      optimization: null,
      requirements: [
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(location.providerId = \'nova\')'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(hardware.cores >= 2)'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(hardware.ram >= 2048)'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(image.providerId = \'f688f98d-7e62-4404-a672-1fc054fcfa6c\')'
        }
      ],
      taskType: 'BATCH'
    },
    {
      name: 'database',
      ports: [
        {
          type: 'PortProvided',
          name: 'MARIADBPROV',
          port: 3306
        }
      ],
      interfaces: [
        {
          type: 'LanceInterface',
          containerType: 'DOCKER',
          init: null,
          preInstall:
            'sudo apt-get -y update && sudo apt-get -y install git && git clone https://github.com/dbaur/mediawiki-tutorial.git',
          install: './mediawiki-tutorial/scripts/lance/mariaDB.sh install',
          postInstall: './mediawiki-tutorial/scripts/lance/mariaDB.sh configure',
          preStart: null,
          start: './mediawiki-tutorial/scripts/lance/mariaDB.sh startBlocking',
          startDetection: null,
          stopDetection: null,
          postStart: null,
          preStop: null,
          stop: null,
          postStop: null,
          shutdown: null
        }
      ],
      optimization: null,
      requirements: [
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(location.providerId = \'nova\')'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(hardware.cores >= 2)'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(hardware.ram >= 2048)'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(image.providerId = \'f688f98d-7e62-4404-a672-1fc054fcfa6c\')'
        }
      ],
      taskType: 'BATCH'
    },
    {
      name: 'loadbalancer',
      ports: [
        {
          type: 'PortRequired',
          name: 'LOADBALANCERREQWIKI',
          updateAction: './mediawiki-tutorial/scripts/lance/nginx.sh configure',
          isMandatory: false
        },
        {
          type: 'PortProvided',
          name: 'LBPROV',
          port: 80
        }
      ],
      interfaces: [
        {
          type: 'LanceInterface',
          containerType: 'DOCKER',
          init: null,
          preInstall:
            'sudo apt-get -y update && sudo apt-get -y install git && git clone https://github.com/dbaur/mediawiki-tutorial.git',
          install: './mediawiki-tutorial/scripts/lance/nginx.sh install',
          postInstall: null,
          preStart: null,
          start: './mediawiki-tutorial/scripts/lance/nginx.sh startBlocking',
          startDetection: null,
          stopDetection: null,
          postStart: null,
          preStop: null,
          stop: null,
          postStop: null,
          shutdown: null
        }
      ],
      optimization: null,
      requirements: [
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(location.providerId = \'nova\')'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(hardware.cores >= 2)'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(hardware.ram >= 2048)'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(image.providerId = \'f688f98d-7e62-4404-a672-1fc054fcfa6c\')'
        }
      ],
      taskType: 'BATCH'
    }
  ],
  communications: [
    {
      portRequired: 'LOADBALANCERREQWIKI',
      portProvided: 'WIKIPROV'
    },
    {
      portRequired: 'WIKIREQMARIADB',
      portProvided: 'MARIADBPROV'
    }
  ],
  requirements: null
};

/* GRAPH */
export const graphData: any = {
  nodes: [
    {
      data: {
        id: 'wiki',
        name: 'wiki'
      }
    },
    {
      data: {
        id: 'loadbalancer',
        name: 'loadbalancer'
      }
    },
    {
      data: {
        id: 'database',
        name: 'database'
      }
    }
  ],
  edges: [
    {
      data: {
        id: -222996446,
        source: 'wiki',
        target: 'loadbalancer'
      }
    },
    {
      data: {
        id: -1368644092,
        source: 'database',
        target: 'wiki'
      },
      classes: 'mandatory'
    }
  ]
};


/* QUEUE */
export const queueScheduled: Queue = {
  id: '445bdb66-3c87-44ca-bc51-3670b008643e',
  status: 'SCHEDULED'
};
export const queueRunning: Queue = {
  id: '445bdb66-3c87-44ca-bc51-3670b008643e',
  status: 'RUNNING'
};
export const queueCompleted: Queue = {
  id: '445bdb66-3c87-44ca-bc51-3670b008643e',
  status: 'COMPLETED'
};
export const queueFailed: Queue = {
  id: '445bdb66-3c87-44ca-bc51-3670b008643e',
  status: 'FAILED'
};

/* Schedule */
export const schedules: Array<Schedule> = [
  {
    job: 'string',
    instantiation: 'AUTOMATIC',
    id: 'string',
    processes: [
      <CloudiatorProcess>{
        id: 'string',
        processType: 'string',
        type: 'LANCE',
        schedule: 'string',
        task: 'string'
      }
    ]
  }
];
