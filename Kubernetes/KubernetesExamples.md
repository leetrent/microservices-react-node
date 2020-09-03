## Comments Microservice
cd comments/

### In index.js, change URL to the following: 
'http://event-bus-srv:4005/events'

### Build Docker Image:
$ docker build -t leetrent/comments .
Successfully tagged leetrent/comments:latest

### Push newly created Docker image to DockerHub so Kubernetes can pull it down:
$ docker push leetrent/comments
latest: digest: sha256:bc2c23f7d50bd5fa9462624bf285b533aba7cefb10123a80d8c2eb0ebde2fb91 size: 1992


## Moderation Microservice
cd moderation/

### In index.js, change URL to the following: 
'http://event-bus-srv:4005/events'

### Build Docker Image:
cd comments/
$ docker build -t leetrent/moderation .
Successfully tagged leetrent/moderation:latest

### Push newly created Docker image to DockerHub so Kubernetes can pull it down:
$ docker push leetrent/moderation
latest: digest: sha256:7efdcf7a2521ae708e102901908c448fa722b7221bbb1ed8c600bd14d96fb318 size: 1992

## Query Microservice
cd query/

### In index.js, change URL to the following: 
'http://event-bus-srv:4005/events'

### Build Docker Image:
cd comments/
$ docker build -t leetrent/query .
Successfully tagged leetrent/query:latest

### Push newly created Docker image to DockerHub so Kubernetes can pull it down:
$ docker push leetrent/query
latest: digest: sha256:f9e2e6c0a55a27e532d2f8e13b848e04103cb1a7e04ccd06fa2d25ef46c69010 size: 1992

