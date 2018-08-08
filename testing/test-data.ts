import {Api, Cloud, CloudConfiguration, CloudCredential, Property} from '../src/app';

export const allClouds: Cloud[] = [
  <Cloud> {
    id: '1234',
    endpoint: 'endpoint.com',
    cloudType: 'PRIVATE',
    cloudConfiguration: <CloudConfiguration> {
      nodeGroup: 'nodes',
      properties: <Property>[
        <Property>{
          key: 'propertyOne',
          value: 'One'
        },
        <Property>{
          key: 'propertyTwo',
          value: 'Two'
        },
      ]
    },
    credential: <CloudCredential> {
      user: 'user',
      secret: 'secret'
    }
  },
  {
    id: '1a79a4d60de6718e8e5b326e338ae533',
    endpoint: 'https://endpoint.example.com',
    cloudType: 'PRIVATE',
    api: <Api>{
      providerName: 'openstack-nova'
    },
    credential: <CloudCredential>{
      user: 'tenant:username',
      secret: 'MeltdownVictim'
    },
    cloudConfiguration: <Cloud>{
      nodeGroup: 'cloudiator',
      properties: <Property>[
        <Property>{
          key: 'sword.regions',
          value: 'RegionOne, RegionTwo'
        }
      ]
    }
  }
];

export const cloudOne: Cloud = <Cloud> {
  id: '1234',
  endpoint: 'endpoint.com',
  cloudType: 'PRIVATE',
  cloudConfiguration: <CloudConfiguration> {
    nodeGroup: 'nodes',
    properties: <Property>[
      <Property>{
        key: 'propertyOne',
        value: 'One'
      },
      <Property>{
        key: 'propertyTwo',
        value: 'Two'
      },
    ]
  },
  credential: <CloudCredential> {
    user: 'user',
    secret: 'secret'
  }
};
