# argocd-sysdig

## New Installation
```
helm upgrade argocd --namespace argocd \
--set server.service.type=LoadBalancer \
--set server.ingress.enabled=true \
argo/argo-cd
```

## Example Application
```
argocd app create guestbook --repo https://github.com/sysdigdan/argocd-example-apps.git --path guestbook --dest-server https://kubernetes.default.svc --dest-namespace guestbook
argocd app create sockshop --repo https://github.com/sysdigdan/argocd-example-apps.git --path sock-shop --dest-server https://kubernetes.default.svc --dest-namespace sock-shop
argocd app create fluentd --repo https://github.com/sysdigdan/argocd-example-apps.git --path fluentd --dest-server https://kubernetes.default.svc --dest-namespace fluentd
```

# Deep Link Installation

```
kubectl -n argocd patch configmaps/argocd-cm --type merge --patch-file argocd-sysdig-patch.json
kubectl -n argocd rollout restart deployment argocd-server
```

# Sysdig Extension Installation (WIP_)

## Enable through upgrade
```
helm upgrade argocd --namespace argocd \
--set server.extensions.enabled=true \
--set server.service.type=LoadBalancer \
--set server.ingress.enabled=true \
argo/argo-cd
```

