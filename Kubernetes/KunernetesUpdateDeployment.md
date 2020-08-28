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

