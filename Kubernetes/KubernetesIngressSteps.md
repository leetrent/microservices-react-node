$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.35.0/deploy/static/provider/cloud/deploy.yaml

cd k8s/

$ kubectl apply -f ingress-srv.yaml
ingress.networking.k8s.io/ingress-srv created

### Add the following to /etc/hosts file:
127.0.0.1 posts.com