# Deployment to S3

## Preparation

1. Create a new user to which we can access via AWS CLI
2. Add new IAM strategy for the user (https://aws.amazon.com/fr/premiumsupport/knowledge-center/s3-console-access-certain-bucket/)
3. Follow the guide here: https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-s3-cloudfront/
Exemple strategy:
        {
            "Version": "2012-10-17",
            "Statement": [
                    {
                    "Effect": "Allow",
                    "Action": "s3:*",
                    "Resource": [
                            "arn:aws:s3:::call-learning-io-site",
                            "arn:aws:s3:::call-learning-io-site/*"
                        ]
                    }
                ]
        }
    

# Deployment

Once AWS CLI has the right config:

    npm run build && npm run deploy

