cd event-bus/

$ docker build -t leetrent/event-bus .
(don't forget the dot at the end of the command)
Successfully built 09221c61a011
Successfully tagged leetrent/event-bus:latest

### Push newly created image to Docker Hub
docker push leetrent/event-bus
latest: digest: sha256:d743d769d3a1cd3dc7776bbe4f9748dca0d6243e5d1a8f6bbdeec7400c7ce809 size: 1992

cd cd k8s/

k8s $ kubectl apply -f event-bus-depl.yaml
deployment.apps/event-bus-depl created

$ kubectl get pods
NAME                              READY   STATUS    RESTARTS   AGE
event-bus-depl-76bc8dbd45-8p8px   1/1     Running   0          32s
posts-depl-57d858bf9c-9cxjz       1/1     Running   0          2d4h

$ kubectl get deployments
NAME             READY   UP-TO-DATE   AVAILABLE   AGE
event-bus-depl   1/1     1            1           94s
posts-depl       1/1     1            1           4d3h
