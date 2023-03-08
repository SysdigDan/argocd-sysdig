# argocd-sysdig

# Deep Link Installation

```
kubectl -n argocd patch configmaps/argocd-cm --type merge --patch-file argocd-sysdig-patch.json
```

# Sysdig Extension Installation

```
helm upgrade argocd --namespace argocd \
--set server.extensions.enabled=true \
--set server.service.type=LoadBalancer \
--set server.ingress.enabled=true \
argo/argo-cd
```

