import {
  Api,
  Cloud,
  CloudConfiguration,
  CloudCredential, Configuration, ConfigurationParameters,
  Hardware,
  Image,
  Job,
  LanceInterface,
  Location,
  Login,
  OclRequirement,
  OperatingSystem, Port, PortProvided,
  PortRequired,
  Queue,
  Schedule, ServiceBehaviour,
  SingleProcess,
  Token
} from 'cloudiator-rest-api';
import {ScheduleView} from '../src/app/model/ScheduleView';
import {AuthMode, RuntimeConfig} from '../src/app/model/RuntimeConfig';

export function testApiFactory(): Configuration {
  const params: ConfigurationParameters = {
    apiKeys: {'X-API-Key': ''},
    basePath: 'testpath',
  };
  return new Configuration(params);
}

/* RUNTIME CONFIG */
export const runtimeConfigOne: RuntimeConfig = {
  apiPath: 'testpath',
  xApiKey: 'testKey',
  authMode: AuthMode.SINGLE,
  sshTunnelPath: ''
};

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
export const jobOne: Job = {
  name: 'simple_db',
  tasks: [
    // {
    //   name: 'database',
    //   ports: [
    //     {
    //       type: 'PortProvided',
    //       name: 'MARIADBPROV',
    //       port: 3306
    //     }
    //   ],
    //   interfaces: [
    //     <DockerInterface>{
    //       type: 'LanceInterface',
    //       containerType: 'DOCKER',
    //       init: null,
    //       preInstall:
    //       'sudo apt-get -y update && sudo apt-get -y install git && git clone https://github.com/dbaur/mediawiki-tutorial.git',
    //       install: './mediawiki-tutorial/scripts/lance/mariaDB.sh install',
    //       postInstall: './mediawiki-tutorial/scripts/lance/mariaDB.sh configure',
    //       preStart: null,
    //       start: './mediawiki-tutorial/scripts/lance/mariaDB.sh startBlocking',
    //       startDetection: null,
    //       stopDetection: null,
    //       postStart: null,
    //       preStop: null,
    //       stop: null,
    //       postStop: null,
    //       shutdown: null,
    //       updateAction: null
    //     }
    //   ],
    //   optimization: null,
    //   requirements: [
    //     <OclRequirement>{
    //       type: 'OclRequirement',
    //       constraint: 'nodes->forAll(hardware.providerId = \'t2.micro\')'
    //     }
    //   ],
    //   behaviour: {
    //     type: 'ServiceBehaviour',
    //     restart: true
    //   }
    // }
  ],
  communications: null,
  requirements: null,
  // optimization: null,
  id: '8726f456-4c19-4cda-9188-b027ad98362e',
  owner: 'admin'
};

export const jobTwo: Job = {
  id: '445bdb66-3c87-44ca-bc51-3670b008643e',
  name: 'mediawiki',
  tasks: [
    {
      name: 'wiki',
      ports: [
        <PortProvided>{
          type: 'PortProvided',
          name: 'WIKIPROV',
          port: 80
        },
        <PortRequired>{
          type: 'PortRequired',
          name: 'WIKIREQMARIADB',
          updateAction: null,
          isMandatory: true
        }
      ],
      interfaces: [
        <LanceInterface>{
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
        <OclRequirement>{
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
      behaviour: <ServiceBehaviour>{
        type: 'ServiceBehaviour',
        restart: true
      }
    },
    {
      name: 'database',
      ports: [
        <PortProvided>{
          type: 'PortProvided',
          name: 'MARIADBPROV',
          port: 3306
        }
      ],
      interfaces: [
        <LanceInterface>{
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
        <OclRequirement>{
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
      behaviour: <ServiceBehaviour>{
        type: 'ServiceBehaviour',
        restart: true
      }
    },
    {
      name: 'loadbalancer',
      ports: [
        <PortRequired>{
          type: 'PortRequired',
          name: 'LOADBALANCERREQWIKI',
          updateAction: './mediawiki-tutorial/scripts/lance/nginx.sh configure',
          isMandatory: false
        },
        <PortProvided>{
          type: 'PortProvided',
          name: 'LBPROV',
          port: 80
        }
      ],
      interfaces: [
        <LanceInterface>{
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
      behaviour: <ServiceBehaviour>{
        type: 'ServiceBehaviour',
        restart: true
      }
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

/* JOB YAML */
export const jobYaml =
  '---\n' +
  'job:\n' +
  '  name: simple_db\n' +
  '  tasks:\n' +
  '  - name: database\n' +
  '    behaviour: \n' +
  '      type: ServiceBehaviour\n' +
  '      restart: true\n' +
  '    ports:\n' +
  '    - type: PortProvided\n' +
  '      name: MARIADBPROV\n' +
  '      port: 3306\n' +
  '    interfaces:\n' +
  '    - type: LanceInterface\n' +
  '      containerType: DOCKER\n' +
  '      preInstall: sudo apt-get -y update && sudo apt-get -y install git && git clone\n' +
  '        https://github.com/dbaur/mediawiki-tutorial.git\n' +
  '      install: "./mediawiki-tutorial/scripts/lance/mariaDB.sh install"\n' +
  '      postInstall: "./mediawiki-tutorial/scripts/lance/mariaDB.sh configure"\n' +
  '      start: "./mediawiki-tutorial/scripts/lance/mariaDB.sh startBlocking"\n' +
  '    requirements:\n' +
  '    - constraint: nodes->forAll(hardware.providerId = \'t2.micro\')\n' +
  '      type: OclRequirement';

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

/* JOB */
export const jobIdOne = '5c5a0389-6a23-48f3-8937-50f50f7bc904';
export const jobIdTwo = '06dc7e52-ca5d-408b-8783-b25f3264d87e';
export const jobIdThree = '62c34636-a1bf-401c-b96f-2fb0eb0de25c';

export const JobOne: Job = <Job>{
  name: 'simple_db',
  tasks: [
    {
      name: 'database',
      ports: [
        <PortProvided>{
          type: 'PortProvided',
          name: 'MARIADBPROV',
          port: 3306
        }
      ],
      interfaces: [
        <LanceInterface>{
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
        <OclRequirement>{
          type: 'OclRequirement',
          constraint: 'nodes->forAll(hardware.providerId = \'t2.micro\')'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(location.providerId = \'eu-central-1\')'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(image.providerId = \'ami-0bb24d586ad9956e7\')'
        }
      ],
      behaviour: <ServiceBehaviour>{
        type: 'ServiceBehaviour',
        restart: true
      }
    }
  ],
  communications: null,
  requirements: null,
  optimization: null,
  id: jobIdOne,
  owner: 'admin'
};
export const JobTwo: Job = <Job>{
  name: 'simple_db_1',
  tasks: [
    {
      name: 'database',
      ports: [
        <PortProvided>{
          type: 'PortProvided',
          name: 'MARIADBPROV',
          port: 3306
        }
      ],
      interfaces: [
        <LanceInterface>{
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
        <OclRequirement>{
          type: 'OclRequirement',
          constraint: 'nodes->forAll(hardware.providerId = \'t2.micro\')'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(location.providerId = \'eu-central-1\')'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(image.providerId = \'ami-0bb24d586ad9956e7\')'
        }
      ],
      behaviour: <ServiceBehaviour>{
        type: 'ServiceBehaviour',
        restart: true
      }
    }
  ],
  communications: null,
  requirements: null,
  optimization: null,
  id: jobIdTwo,
  owner: 'admin'
};
export const JobThree: Job = <Job>{
  name: 'mediawiki',
  tasks: [
    {
      name: 'loadbalancer',
      ports: [
        <PortRequired>{
          type: 'PortRequired',
          name: 'LOADBALANCERREQWIKI',
          updateAction: './mediawiki-tutorial/scripts/lance/nginx.sh configure',
          isMandatory: false
        },
        <PortProvided>{
          type: 'PortProvided',
          name: 'LBPROV',
          port: 80
        }
      ],
      interfaces: [
        <LanceInterface>{
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
        <OclRequirement>{
          type: 'OclRequirement',
          constraint: 'nodes->forAll(hardware.providerId = \'t2.micro\')'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(location.providerId = \'eu-central-1\')'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(image.providerId = \'ami-0bb24d586ad9956e7\')'
        }
      ],
      behaviour: <ServiceBehaviour>{
        type: 'ServiceBehaviour',
        restart: true
      }
    },
    {
      name: 'wiki',
      ports: [
        {
          type: 'PortProvided',
          name: 'WIKIPROV',
          port: 80
        },
        <PortRequired>{
          type: 'PortRequired',
          name: 'WIKIREQMARIADB',
          updateAction: null,
          isMandatory: true
        }
      ],
      interfaces: [
        <LanceInterface>{
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
        <OclRequirement>{
          type: 'OclRequirement',
          constraint: 'nodes->forAll(hardware.providerId = \'t2.micro\')'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(location.providerId = \'eu-central-1\')'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(image.providerId = \'ami-0bb24d586ad9956e7\')'
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
        <LanceInterface>{
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
          constraint: 'nodes->forAll(hardware.providerId = \'t2.micro\')'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(location.providerId = \'eu-central-1\')'
        },
        {
          type: 'OclRequirement',
          constraint: 'nodes->forAll(image.providerId = \'ami-0bb24d586ad9956e7\')'
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
  requirements: null,
  optimization: null,
  id: jobIdThree,
  owner: 'admin'
};

export const allJobs: Job[] = [
  JobOne,
  JobTwo,
  JobThree
];

/* SCHEDULE */
export const scheduleOne: Schedule = {
  job: jobIdOne,
  instantiation: 'AUTOMATIC',
  id: '8731d862-561c-42d5-b019-c1be413612b0',
  owner: 'admin',
  processes: null
};
export const scheduleTwo: Schedule = {
  job: jobIdTwo,
  instantiation: 'AUTOMATIC',
  id: '25d46d12-ed3b-49b7-aae2-bc43dd2db1f8',
  owner: 'admin',
  processes: [
    <SingleProcess>{
      processType: 'SingleProcess',
      id: '8c94223e-febf-47a6-95de-f5c406fde8fe',
      state: 'RUNNING',
      type: 'LANCE',
      schedule: '25d46d12-ed3b-49b7-aae2-bc43dd2db1f8',
      task: 'database',
      diagnostic: null,
      reason: null,
      owner: 'admin',
      node: '9a3d61ca-34b8-47a7-b602-8c7458e7835e'
    }
  ]
};
export const scheduleThree: Schedule = {
  job: jobIdThree,
  instantiation: 'AUTOMATIC',
  id: '4f1cf465-d420-4d63-a456-88f65981c3cd',
  owner: 'admin',
  processes: [
    <SingleProcess>{
      processType: 'SingleProcess',
      id: '807a878a-4fc5-449f-96c1-62d95ea4cf52',
      state: 'RUNNING',
      type: 'LANCE',
      schedule: '4f1cf465-d420-4d63-a456-88f65981c3cd',
      task: 'loadbalancer',
      diagnostic: null,
      reason: null,
      owner: 'admin',
      node: '71e24122-3450-4a3d-a16b-f8d8b71f6157'
    },
    {
      processType: 'SingleProcess',
      id: '7216a097-0247-422d-ae50-3f2876626c98',
      state: 'RUNNING',
      type: 'LANCE',
      schedule: '4f1cf465-d420-4d63-a456-88f65981c3cd',
      task: 'wiki',
      diagnostic: null,
      reason: null,
      owner: 'admin',
      node: 'd70f529b-15ff-41f6-a45c-9c6197b37502'
    },
    {
      processType: 'SingleProcess',
      id: 'e44faa07-84a6-474a-89c5-46de2f8ea2be',
      state: 'RUNNING',
      type: 'LANCE',
      schedule: '4f1cf465-d420-4d63-a456-88f65981c3cd',
      task: 'database',
      diagnostic: null,
      reason: null,
      owner: 'admin',
      node: 'c1822049-58f3-40fe-9597-9050468ed14a'
    }
  ]
};

export const allSchedules: Array<Schedule> = [
  scheduleOne,
  scheduleTwo,
  scheduleThree
];

/* SCHEDULE VIEWS */

export const ScheduleViewOne: ScheduleView = {
  schedule: scheduleOne,
  job: JobOne
};
export const ScheduleViewTwo: ScheduleView = {
  schedule: scheduleTwo,
  job: JobTwo
};
export const ScheduleViewThree: ScheduleView = {
  schedule: scheduleThree,
  job: JobThree
};
export const allScheduleViews: ScheduleView[] = [
  ScheduleViewOne,
  ScheduleViewTwo,
  ScheduleViewThree
];

export const SchedulesGraph: any = {
  processes: [
    {
      data: {
        id: '807a878a-4fc5-449f-96c1-62d95ea4cf52',
        task: 'loadbalancer',
        state: 'RUNNING',
        ip: '35.157.4.7'
      }
    },
    {
      data: {
        id: '7216a097-0247-422d-ae50-3f2876626c98',
        task: 'wiki',
        state: 'RUNNING',
        ip: '35.157.121.235'
      }
    },
    {
      data: {
        id: 'e44faa07-84a6-474a-89c5-46de2f8ea2be',
        task: 'database',
        state: 'RUNNING',
        ip: '18.184.45.152'
      }
    }
  ],
  edges: [
    {
      data: {
        id: '404ba6a5cb2dea64b9c1922c922bd818',
        source: '7216a097-0247-422d-ae50-3f2876626c98',
        target: '807a878a-4fc5-449f-96c1-62d95ea4cf52'
      }
    },
    {
      data: {
        id: '23b927c0481fc28edbcdb9d1c6d73c1b',
        source: 'e44faa07-84a6-474a-89c5-46de2f8ea2be',
        target: '7216a097-0247-422d-ae50-3f2876626c98'
      }
    }
  ]
};

/* LOGIN */

export const loginOne: Login = {
  email: 'testuser@example.com',
  password: 'testpassword',
  tenant: {
    tenant: 'admin'
  }
};

export const tokenOne: Token = {
  token: 'token',
  owner: 'testuser@example.com',
  issuedTime: Number.MIN_VALUE,
  expireTime: Number.MAX_VALUE
};


export const tempTestGraph = {
  processes: [
    {
      data: {
        id: 'b28c30e3-82a8-409d-9979-d8a02ffa1294',
        task: 'database',
        state: 'RUNNING',
        ipAddresses: []
      }
    },
    {
      data: {
        id: '57167670-15d1-4ffd-9c02-39155ac75484',
        task: 'wiki',
        state: 'PENDING',
        ipAddresses: []
      }
    },
    {
      data: {
        id: 'c0565cd7-d87d-4fa8-bf87-b7836ef30f22',
        task: 'loadbalancer',
        state: 'ERROR',
        ipAddresses: []
      }
    }
  ],
  edges: [
    {
      data: {
        id: '609bfed46324322f7faa9c298bccaff1',
        source: 'b28c30e3-82a8-409d-9979-d8a02ffa1294',
        target: '57167670-15d1-4ffd-9c02-39155ac75484'
      }
    },
    {
      data: {
        id: '81240b9fdb5ae1fc37a1402450fe339c',
        source: '57167670-15d1-4ffd-9c02-39155ac75484',
        target: 'c0565cd7-d87d-4fa8-bf87-b7836ef30f22'
      }
    }
  ]
};
