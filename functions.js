/* Exercise

Function name configureService

Two parameters, serviceName and tier

Inside the function - console.log + print both parameters

Call function */

function configureService(serviceName,tier) {
    console.log("Deploying " + serviceName + " with " + tier);
}

configureService("EC2",'t2.micro');