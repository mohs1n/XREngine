set -e
set -x

sudo snap install kubectl --classic

sudo snap install helm --classic

helm repo add xr3ngine https://school.xrengine.io

helm repo update

set +x
