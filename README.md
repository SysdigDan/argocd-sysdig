# argocd-sysdig

## New Installation
```
helm upgrade argocd --namespace argocd \
--set server.extensions.enabled=true \
--set server.service.type=LoadBalancer \
--set server.ingress.enabled=true \
argo/argo-cd
```

## Example Application
```
argocd app create guestbook --repo https://github.com/argoproj/argocd-example-apps.git --path guestbook --dest-server https://kubernetes.default.svc --dest-namespace default
```

# Deep Link Installation

```
kubectl -n argocd patch configmaps/argocd-cm --type merge --patch-file argocd-sysdig-patch.json
kubectl -n argocd rollout restart deployment argocd-server
```

# Sysdig Extension Installation

## Enable through upgrade
```
helm upgrade argocd --namespace argocd \
--set server.extensions.enabled=true \
--set server.service.type=LoadBalancer \
--set server.ingress.enabled=true \
argo/argo-cd
```

