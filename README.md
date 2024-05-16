# Node Hello World

Simple node.js app that servers "hello world"

Great for testing simple deployments to the cloud

## Run It

`npm start`

=============================================================================================================================
Tast Task

The task begins with creating a new repository on their GitHub account, appropriately naming it. Afterward, clone this newly created repository to local machine and push the Node.js code to it. Then execute the following Git commands:

git add .
git commit -m "message"
git push

Once the code is pushed, create a Dockerfile for application. Subsequently, navigate to the repository's work area, click on the "Actions" button, and proceed to create a workflow. Then choose the appropriate workflow, such as the Node.js workflow.

After selecting the workflow, obtain the YAML configuration and customize it as needed. In our case, opt for Docker build and push, as well as Git checkout actions. Upon committing these changes, the build process is automatically triggered. Then  then review the build logs, ensuring whether  written scripts is right or not.

Before committing, must add secrets for Docker login. Next, create a Helm chart for Kubernetes deployment. This involves creating the necessary resources such as deployment, services, and configmaps.

For deployment purposes, install ArgoCD on Kubernetes cluster. Then generate a deployment YAML for ArgoCD, utilizing the ArgoCD YAML. This enables them to deploy the Node.js

application on the Kubernetes cluster by running the following commands: 

kubectl apply -f application_argocd.yaml

Alternatively, they can deploy their pipeline on the ArgoCD UI or through the ArgoCD CLI.
