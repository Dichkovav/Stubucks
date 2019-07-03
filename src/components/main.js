import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Coffee from './coffee';
import Tea from './tea';
import Jointeam from './jointeam';
import Location from './locations';
import Menu from './menu';
import Rewards from './rewards';
import Specials from './specials';





const Main = ()=>(
   <Switch>
       <Route exact path="/" component={LandingPage}/>
       <Route  path="/coffe" component={Coffee}/>
       <Route  path="/tea" component={Tea}/>
       <Route  path="/jointeam" component={Jointeam}/>
       <Route  path="/location" component={Location}/>
       <Route  path= "/menu" component={Menu}/>
       <Route  path= "/rewards" component ={Rewards}/>
       <Route  path= "/specials" component = {Specials}/>

   </Switch>
)


export default Main;