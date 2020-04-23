import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
Amplify.configure(awsExports);



const App = () => (
  <AmplifyAuthenticator>
    <div>
      My App
      <AmplifySignOut />
    </div>
  </AmplifyAuthenticator>
);

export default App;
