import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Content}from 'react-mdl';
import logo from './logo.png';
import Main from './components/main';
//import StubucksHero from './components/StubucksHero.jpg';
import {Link} from 'react-router-dom';


class App extends Component {
  render(){
    return(
<div className="main-container">
    <div className="Container"style={{height: '50vw', position: 'relative'}}>
        <Layout>
              <Header className="Header">
                <Navigation className="Nav">
                    <Link className="nav-bar"to="/coffe">Coffee</Link>
                    <Link className="nav-bar"to="/menu">Menu</Link>
                    <Link className="nav-bar"to="/tea">Tea</Link>                    
                    <Link className="nav-bar"to="/menu">Menu</Link>
                    <Link className="nav-bar"to="/rewards">Rewards</Link>
                    <Link className="nav-bar"to="/want">Want to join our team?</Link>
                    <Link className="nav-bar"to="/location">Locations</Link>
                    <Link className="nav-bar"to="/special">Specials</Link>
                </Navigation>
            </Header>
            <Content>
         <Main/>
            </Content>
            <div className='div-logo'>
                <img className="logo" src={logo} alt="stu"/>
            </div>
        </Layout>
        </div>
        
    </div>
  )
}
}
export default App;
