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

Assuming you have the AWS CLI installed and configured with the necessary permissions, you can deploy your Astro site to S3 using the following commands:

    aws sts get-caller-identity --profile calllearning-io

    aws s3 sync ./dist s3://call-learning-io-site --profile calllearning-io --acl public-read --delete
