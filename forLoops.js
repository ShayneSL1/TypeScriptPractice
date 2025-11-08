let regions = ['us-west-1','us-west-2','us-east-1','us-east-2'];

for (let i = 0; i < regions.length; i++) {
    console.log("Deploying to region: " + regions[i]);
}

let cloudServices = ['S3','IAM','CloudFront','DynamoDB','EC2'];

for (let i = 0; i < cloudServices.length; i++) {
    console.log('Configuring the following service: ' + cloudServices[i]);
}