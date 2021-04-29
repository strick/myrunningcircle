#
# Runs Terraform to provision a Kubernetes cluster and deploy microservices to it.
#

set -u # or set -o nounset
: "$ARM_CLIENT_ID"
: "$ARM_CLIENT_SECRET"
: "$ARM_TENANT_ID"
: "$ARM_SUBSCRIPTION_ID"

cd ./scripts
export KUBERNETES_SERVICE_HOST="" # Workaround for https://github.com/terraform-providers/terraform-provider-kubernetes/issues/679

echo "APP VERSION: $VERSION"
echo "ARM: $ARM_CLIENT_ID"
echo "terraform apply -auto-approve\"
    -var \"app_version=$VERSION\" 
    -var \"client_id=$ARM_CLIENT_ID\" 
    -var \"client_secret=$ARM_CLIENT_SECRET\" 
    -var \"fb_app_id=$FACEBOOK_APP_ID\" 
    -var \"fb_app_secret=$FACEBOOK_APP_SECRET\"
    -var \"app_ip=$APP_IP"
    
terraform init 
terraform apply -auto-approve \
    -var "app_version=$VERSION" \
    -var "client_id=$ARM_CLIENT_ID" \
    -var "client_secret=$ARM_CLIENT_SECRET" \
    -var "fb_app_id=$FACEBOOK_APP_ID" \
    -var "fb_app_secret=$FACEBOOK_APP_SECRET" \
    -var "app_ip=$APP_IP"