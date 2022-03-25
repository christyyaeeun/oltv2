import Amplify from '@aws-amplify/core';
import Storage from '@aws-amplify/storage';

export function configureAmplify() {
  Amplify.configure(
  {
   Auth: {
     identityPoolId: process.env.REACT_APP_identityPoolId,
     region: process.env.REACT_APP_region,
     userPoolId: process.env.REACT_APP_userPoolId,
     userPoolWebClientId: process.env.REACT_APP_userPoolWebClientId,
    },
  Storage: { 
     bucket: process.env.REACT_APP_Bucket_name,
     region: process.env.REACT_APP_region,
     identityPoolId: process.env.REACT_APP_identityPoolId
    }
  }
 );
}

//Configure Storage with S3 bucket information
export function SetS3Config(bucket, level){
   Storage.configure({ 
          bucket: bucket,
          level: level,
          region: 'us-east-1',  
          identityPoolId: process.env.REACT_APP_identityPoolId 
       });
}

// Amplify.configure(
//     Auth: {
//         identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab', //REQUIRED - Amazon Cognito Identity Pool ID
//         region: 'XX-XXXX-X', // REQUIRED - Amazon Cognito Region
//         userPoolId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito User Pool ID
//         userPoolWebClientId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito Web Client ID
//     },
//     Storage: {
//         bucket: '', //REQUIRED -  Amazon S3 bucket
//         region: 'XX-XXXX-X', //OPTIONAL -  Amazon service region
//     }
// );