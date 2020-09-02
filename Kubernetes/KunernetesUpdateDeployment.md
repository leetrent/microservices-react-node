# Update Kubernetes Deployment Example

$ kubectl apply -f posts-depl.yaml
deployment.apps/posts-depl configured

### Update code ...

$ docker build -t leetrent/posts .
Successfully built a758f84ec594
Successfully tagged leetrent/posts:latest

### Push updated Docker image to DockerHub
$ docker push leetrent/posts
latest: digest: sha256:c9b05aadb94b35fca7ccba5e00c6cd8a779db34f6d413d6382be60ec9a0b1455 size: 1992

$ kubectl rollout restart deployment posts-depl
deployment.apps/posts-depl restarted

$ kubectl get pods
NAME                          READY   STATUS    RESTARTS   AGE
posts-depl-57d858bf9c-9cxjz   1/1     Running   0          83s

$ kubectl logs posts-depl-57d858bf9c-9cxjz
Practicing how to update a Kubernetes deployment from DockerHub.
Posts service listening on port 4000 ...

### Update event-bus service docker image to use Cluster IP Service Type:
$ cd event-bus/
$ docker build -t leetrent/event-bus .
Successfully built 178ad43f873b
Successfully tagged leetrent/event-bus:latest

### Push updated Docker event-bus image to Docker Hub:
$ docker push leetrent/event-bus
latest: digest: sha256:2b2a4b089c15b16daab3d389130f5045158f67f6d90a545082ab92f361fe7ecd size: 1992

### Update posts service docker image to use Cluster IP Service Type:
$ cd posts/
$ docker build -t leetrent/posts .
Successfully built 3a4d10b5bdf2
Successfully tagged leetrent/posts:latest

### Push updated Docker posts image to Docker Hub:
$ docker push leetrent/posts
latest: digest: sha256:18c31df3f41bcf05fd53e401a3b80a1127f8c8f95b28f2a5309cf59e46f3ff48 size: 1992


### List Kubernetes Deployments:
$ kubectl get deployments
NAME             READY   UP-TO-DATE   AVAILABLE   AGE
event-bus-depl   1/1     1            1           2d19h
posts-depl       1/1     1            1           6d22h

### Rollout/Restart Kubernetes Deployments:
$ kubectl rollout restart deployment posts-depl
deployment.apps/posts-depl restarted

$ kubectl rollout restart deployment event-bus-depl
deployment.apps/event-bus-depl restarted

### List Pods to make sure everything got updated:
$ kubectl get pods
NAME                             READY   STATUS    RESTARTS   AGE
event-bus-depl-6cf84b6bd-rkqdq   1/1     Running   0          54s
posts-depl-7b8b79865f-zgc2r      1/1     Running   0          104s

### Test deployment using Postman:
$ kubectl get services
NAME                  TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
event-bus-srv         ClusterIP   10.110.169.115   <none>        4005/TCP         2d19h
kubernetes            ClusterIP   10.96.0.1        <none>        443/TCP          9d
posts-clusterip-srv   ClusterIP   10.110.7.232     <none>        4000/TCP         2d17h
posts-srv             NodePort    10.107.72.202    <none>        4000:30474/TCP   2d22h

### Use this URL in Postman to create a new post:
http://localhost:30474

### Get logs to make sure that posts and event-bus are communicating:
$ kubectl get pods
NAME                             READY   STATUS    RESTARTS   AGE
event-bus-depl-6cf84b6bd-rkqdq   1/1     Running   0          37m
posts-depl-7b8b79865f-zgc2r      1/1     Running   0          38m

$ kubectl logs posts-depl-7b8b79865f-zgc2r
Posts service listening on port 4000 ...
Post Service received the following event: 'PostCreated'

$ kubectl logs event-bus-depl-6cf84b6bd-rkqdq
Event bus listening on port 4005 ...



