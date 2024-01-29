import React, { Component } from 'react';

import UserProfile from './Component/UserProfile';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


export class App extends Component {
  render() {
    return (
      <>
      <UserProfile/>
      </>
    );
  }
}