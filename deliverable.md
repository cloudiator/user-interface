
### Implementation

The Cloudiator web user interface is built using the JavaScript framework Angular. for UI design, the CSS library Bulma was combined with Angular CDK, a toolkit to build Angular components. In consideration of the use case it was designed desktop first, but still has full functional support on mobile devices. 
To simplify internal state management, NgRx was employed to realize a redux pattern. As the Cloudiator API is designed with the Swagger framework, Swagger's code generation tool was used to generate interfacing services. Furthermore a Jasmine/Karma stack was used for testing, as it has a good default integration with Angular.

### Functionality
The User Interface aims at making the common workflow of the Cloudiator system more accessible for the general user. Thus it implements the main features necessary to manage Cloud Service accounts and Schedules. 

##### Authentication
In accordance with the Cloudiator backend, the web client can either run in single authentication mode, with a general API token as verification, but also in Multi authentication mode, which requires authentication by means of a standard user login.


##### Cloud Management
The UI allows for addition of new cloud service accounts, as well as inspection of provided hardware, images and locations of the added cloud accounts. Furthermore added Cloud accounts can be removed again.

![Cloudiator UI Cloud Overview](/additional_docs/screenshots/cloudOverview.png?raw=true) 

##### Editor
the web editor supports YAML syntax highlighting. the user can load files from the local drive, as well as save the edited YAML file to the drive. Furthermore the state of the editor is cashed in the browser. a Loaded YAML file can be sent to the server for validation and will be parsed in to a Job on successful validation. The parsed Job can then be submitted to the server for scheduling. 

![Cloudiator UI Cloud Overview](/additional_docs/screenshots/editor.png?raw=true) 

##### Schedule View
The Schedule View allows for inspection of the Schedule and its Nodes. Furthermore a delete request for a Schedule can be sent. Moreover a feature to directly connect to a Node's VM via SSH is planned.

![Cloudiator UI Cloud Overview](/additional_docs/screenshots/schedule.png?raw=true) 
