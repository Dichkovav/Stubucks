import React, { Component } from 'react';

import StubucksHero from '../StubucksHero.jpg';
import IcedCoffe from '../IcedCoffe.png';
import buyCoffee from '../buyCoffee.jpg';
import buyTea from '../buyTea.jpg';
import buyEquipment  from "../buyEquipment.png"



class LandingPage extends Component {
    render() {
        return (
            <div className="main">
              <div className="section1">
              <img className="Coffe" src={StubucksHero} alt="main"/> 
              <h3 className ="love-stu">Love <span>your Stu</span> </h3>
              <h5 className = "look">Look at our range and choose the Stu that suit you.</h5>
              <div className="btn">
                  <button className="coffe-btn">Choose your coffee</button>
              </div>
              </div>
              <div className="section2">
                  <h3>Try something <span>new</span>?</h3>
             </div>
             <div className="section3">
                 <img className="ice-coffe" src={IcedCoffe} alt="iced-coffe"></img>
                 <h3 className="Stu-brew"> The new <span>StuBrew</span></h3>
                 <div className="nitro">
                    <h3 className="nitro-brew">
                  A delicious new <span>nitro brew</span> developed
                 carefully on the darkside of the moon,
                 instilled with the freshness of Stu himself.
                 </h3>
                   </div>
                  </div>
                  <div className="section4">
                      <h3><span>The Stu</span> Shop</h3>
                  </div>
                  <div className="container5">
                      <div className="img-section5">
                          <div className="img-div1">
                      <img  className="shop-coffe" src={buyCoffee} alt="coffe"/>
                      </div>
                      <div className="img-div2">
                      <img className="shop-tea" src={buyTea} alt="tea"/>
                      </div>
                      <div className="img-div3">
                      <img className="shop-equipment" src={buyEquipment}/>
                      </div>
                      </div>
                      <div className ="text">
                          <div className="coffee-div">
                      <h3 className="coffee-h3">Shop Coffe
                      <hr/></h3>
                      <p className="coffe-p">Hand-roasted coffee,<br/> delivered fresh for<br/>ultimated flavour.</p>
                      </div>
                      <div className="tea-div">
                      <h3 className ="tea-h3">Shop Tea
                      <hr className="hr-tea"/></h3>
                      <p className="tea-p">Our finest slection of<br/>premium whole leaf<br/>tea.</p>
                      </div>
                      <div className="equipment-div">
                      <h3 className ="equipment-h3">Shop Equipment
                      <hr className="hr-equipment"/></h3>
                      <p className="equipment-p">brewers and presses<br/>for making the perfect<br/>Stu at home.</p>
                      </div>
                      </div>
                  </div>
                  <div className="section6">
                    
           
                  </div>

                  <div className="section7"></div>
                 </div>
   );              
}
}
export default LandingPage;