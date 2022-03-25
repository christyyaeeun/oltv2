import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/style.css'
import App from './App';
import { configureAmplify } from './services/services'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

configureAmplify();

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
