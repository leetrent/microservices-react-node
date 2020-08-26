
### Kubernetes Version:
$ kubectl version

### Notes:
- A Kubernetes node is a virtual machine
- Each container that is created will be a hosted in a Pod
- By default, ff no version is specifed for our Docker image,
    Kubernetes will use 'latest' and try to find it on DockerHub.
    This can result in an error if the Docker image is not on DockerHub.

### Commands:
$ kubectl apply -f posts.yaml
pod/posts created

$ kubectl get pods
NAME    READY   STATUS    RESTARTS   AGE
posts   1/1     Running   0          99s

$ kubectl exec -it posts sh

$ kubectl logs posts

$ kubectl delete pod posts

## Deployments
$ kubectl apply -f posts-depl.yaml
deployment.apps/posts-depl created

$ kubectl get deployments
NAME         READY   UP-TO-DATE   AVAILABLE   AGE
posts-depl   1/1     1            1           111s

$ kubectl get pods
NAME                          READY   STATUS    RESTARTS   AGE
posts                         1/1     Running   0          23h
posts-depl-6cfc48c967-6t772   1/1     Running   0          4m12s

$ kubectl delete pod posts-depl-6cfc48c967-6t772
pod "posts-depl-6cfc48c967-6t772" deleted

$ kubectl get pods
NAME                          READY   STATUS    RESTARTS   AGE
posts                         1/1     Running   0          23h
posts-depl-6cfc48c967-b4szk   1/1     Running   0          30s

$ kubectl describe deployments posts-depl
(a lot of information regarding the deployment will be written to the console)

$ kubectl delete deployment posts-depl
deployment.apps "posts-depl" deleted

$ kubectl apply -f posts-depl.yaml
deployment.apps/posts-depl created

$ kubectl get deployments
NAME         READY   UP-TO-DATE   AVAILABLE   AGE
posts-depl   1/1     1            1           35s

$ kubectl get pods
NAME                          READY   STATUS    RESTARTS   AGE
posts                         1/1     Running   0          23h
posts-depl-6cfc48c967-7sr7v   1/1     Running   0          69s

$ kubectl delete pods posts
pod "posts" deleted

$ kubectl get deployments
NAME         READY   UP-TO-DATE   AVAILABLE   AGE
posts-depl   1/1     1            1           2m6s

$ kubectl get pods
NAME                          READY   STATUS    RESTARTS   AGE
posts-depl-6cfc48c967-7sr7v   1/1     Running   0          2m19s