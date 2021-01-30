import React from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
import Home from './components/home/home';
import ClientLogin from './components/clientAccount/login';
import Employers from './components/Employers/employers';
import ClientRegistration from './components/clientAccount/registration';
import job from './components/Jobs/job';
import company from './components/companyprofiles/company';
import jobforms from './components/jobform/jobforms';
import companyabouts from './components/companyabout/companyabouts';
import viewjob from './components/viewjob/viewjob';


const App = ()=>{
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={ClientLogin}/>
      <Route exact path="/registration" component={ClientRegistration}/>
      <Route exact path="/employers" component={Employers}/>
      <Route exact path="/job" component={job}/>
      <Route exact path="/company" component={company}/>
      <Route exact path="/jobforms" component={jobforms}/>
      <Route exact path="/companyabouts" component={companyabouts}/>
      <Route exact path="/viewjob" component={viewjob}/>
    </Switch>
  );
}

export default withRouter(App);
