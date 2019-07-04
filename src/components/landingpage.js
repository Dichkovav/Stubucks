import React, { Component } from 'react';

import StubucksHero from '../StubucksHero.jpg';
import IcedCoffe from '../IcedCoffe.png';
import buyCoffee from '../buyCoffee.jpg';
import buyTea from '../buyTea.jpg';
import buyEquipment  from "../buyEquipment.png"
import Facebook from "../icon-facebook.png"
import Instagram from "../icon-instagram.png"
import Linkedin from "../icon-linkedin.png"
import Twitter from "../icon-twitter.png"
import Pinterest from "../icon-pinterest.png"



class LandingPage extends Component {
    render() {
        return (
            <div className="main">
                <div className="top">
                     <span className="free">
                        <h6 className="free-h6">Free shipping on orders of £30+| Use Code STULOVE>offer details></h6>
                        </span>
                    <span className="find">
                        <h6 className="find-h6">Find nearst store</h6>
                    </span>
                </div>
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
                    <div className="help-div">
                        <h3 className="help-h3">Help</h3>
                        <p>My account <br/>Stu Cards <br/> Stu rewards<br/>Shipping and Returns<br/>Current Offers<br/>Contact Us</p>
                    </div>
                    <div className ="company-div">
                        <h3 className="company-h3">Company Info</h3>
                        <p>Code Ethics<br/>Responsible Sourcing<br/>Supply Chain<br/>Limited Partners<br/>Office Coffee</p>
                    </div>
                    <div className="about-div">
                        <h3>About us</h3>
                        <p>Join Stu<br/>Social Responsibility<br/>Our People<br/>Newsroom</p>
                    </div>
                    <div className="share-div">
                        <h3>Share</h3>
                        <div className="social-img"></div>
                        <div>
                        <img className="facebook" src={Facebook}/>
                        </div>
                        <div>
                        <img className="instagram" src={Instagram}/>
                        </div>
                        <div>
                        <img className="linkdin" src={Linkedin}/>
                        </div>
                        <div>
                        <img className="twitter" src={Twitter}/>
                        </div>
                        <div>
                        <img className="pinterest" src={Pinterest}/>
                        </div>

                    </div>
           
                  </div>

                  <div className="section7">
                  <p className="chester-p">Stubucks Chester<br/>Cheshire<br/>Since 2019</p>
                  <p className="stubucks-p">Stubucks Coffee| Privacy Policy | Terms of Service </p>
                   <p className="dan-p"> Stubucks is not a registered trademark, infact it was just something Stuart made Dan make even though he didn't have any spare<br/>time.But he likes desinging stuff so that's OK</p>
                   </div>
                 </div>
   );              
}
}
export default LandingPage;