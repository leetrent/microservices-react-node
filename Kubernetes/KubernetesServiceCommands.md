$ kubectl apply -f posts-srv.yaml 
service/posts-srv created

$ kubectl get services
NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP          6d23h
posts-srv    NodePort    10.107.72.202   <none>        4000:30474/TCP   58s

$ kubectl describe service posts-srv
Name:                     posts-srv
Namespace:                default
Labels:                   <none>
Annotations:              Selector:  app=posts
Type:                     NodePort
IP:                       10.107.72.202
LoadBalancer Ingress:     localhost
Port:                     posts  4000/TCP
TargetPort:               4000/TCP
NodePort:                 posts  30474/TCP
Endpoints:                10.1.0.59:4000
Session Affinity:         None
External Traffic Policy:  Cluster
Events:                   <none>

