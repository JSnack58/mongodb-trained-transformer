Prerequistes:
    Kubernetes installed with minikube
    Create Kubernetes cluster via 'minikube start'
Steps
    Clone repository.

    Enable Ingress on the cluster via 'minikube addons enable ingress'.

    run 'kubectl apply -f' on the yaml files in this order:
        1. mongo-secret.yaml
        2. mongo-configmap.yaml
        3. mongo.yaml
        4. mongo-express.yaml
        5. mongo-external.yaml
        6. mongo-ingress.yaml
    
    Start the services minikube mongo-express-service & mongo-external-service.
    
    Copy the mongo-external-service url provided by minikube.
    
    Go to the "Multilayer perceptron.ipynb" and paste the url in mongo_external_service_url. 
    
    Go to the Mongo Express service.
    
    Create a database called 'Names_database'.
    
    Create a collection called 'names'.
    
    Click on new Document.
    
    Add all text from names_dataset.txt into the document under the key: "names".
    it should look like this:
    {
        "_id": ObjectID,
        "names": ["emma", "olivia", ..., "zzyzx"]
    }.
    
    Run the the first three codeblocks.
    
    The third block will send a GET request to the mongo-external-service and the response will be the data.



