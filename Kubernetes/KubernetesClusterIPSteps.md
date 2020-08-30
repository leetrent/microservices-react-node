### Create Event Bus Cluster IP Service

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

$ kubectl apply -f event-bus-srv.yaml
service/event-bus-srv created

$ kubectl get services
NAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
event-bus-srv   ClusterIP   10.110.169.115   <none>        4005/TCP         48s
kubernetes      ClusterIP   10.96.0.1        <none>        443/TCP          7d3h
posts-srv       NodePort    10.107.72.202    <none>        4000:30474/TCP   3h51m

### Create Posts Cluster IP Service

cd posts/

$ kubectl apply -f posts-srv-clusterip.yaml
service/posts-clusterip-srv created

$ kubectl get services
NAME                  TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
event-bus-srv         ClusterIP   10.110.169.115   <none>        4005/TCP         106m
kubernetes            ClusterIP   10.96.0.1        <none>        443/TCP          7d5h
posts-clusterip-srv   ClusterIP   10.110.7.232     <none>        4000/TCP         98s
posts-srv             NodePort    10.107.72.202    <none>        4000:30474/TCP   5h37m


