import {Api, Cloud, CloudConfiguration, CloudCredential, Hardware, Image, Location, OperatingSystem} from 'cloudiator-rest-api';

/* CLOUDS */
export const allClouds: Cloud[] = [
  <Cloud>{
    id: '1234',
    endpoint: 'endpoint.com',
    cloudType: 'PRIVATE',
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
}

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

/* HARDWARE */
export const allHardware: Hardware[] = [
  hardwareOne,
  hardwareTwo,
  hardwareTree
];

export const imageOne = <Image>{
  id: '02f7f6ab33e4a94d0f441947972668ef~RegionOne/faa7fa7b-ddb3-4af5-aae3-f5d2d568c1c9',
  name: 'molpro-image-v2.8',
  providerId: 'faa7fa7b-ddb3-4af5-aae3-f5d2d568c1c9',
  operatingSystem: <OperatingSystem>{
    operatingSystemType: 'UNKOWN',
    operatingSystemFamily: 'UNKOWN_OS_FAMILY',
    operatingSystemArchitecture: 'UNKOWN',
    operatingSystemVersion: '-1'
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
    operatingSystemType: 'UNKOWN',
    operatingSystemFamily: 'UNKOWN_OS_FAMILY',
    operatingSystemArchitecture: 'UNKOWN',
    operatingSystemVersion: '-1'
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
    operatingSystemType: 'UNKOWN',
    operatingSystemFamily: 'UBUNTU',
    operatingSystemArchitecture: 'AMD64',
    operatingSystemVersion: '-1'
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


/* IMAGES */
export const allImages: Image[] = [
  imageOne,
  imageTwo,
  imageThree
];
