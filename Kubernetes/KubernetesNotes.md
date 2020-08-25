
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

