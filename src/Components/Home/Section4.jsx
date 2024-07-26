import React from "react";
import "./Section4.css";
import {Link} from "react-router-dom";

function Billing() {
    const img ={
        spot:"record.png",
        spot1:"record (1).png",
        spot2:"record (2).png",
        spot3:"check-mark.png"
    }
    return(
        <div className="section4">
            <h1>How Can You Get Started?</h1>
            <div className="bill">
                <div id='free'>
                    <h3 className="spo">
                        <div id="spot"><img src={img.spot} alt=""/></div>
                        <h3 id="blue">Explorer Plan</h3>
                    </h3>
                    <p id="price">Free<span>/14 Days </span></p>
                    <ul className="pack">
                        <li id="pri"><p>Explorer plan includes:</p></li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>Access to all AI-powered features</li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>5 GB storage</li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>Limited to 5 analysis projects per day</li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>Clarity & Accuracy For Pre-Processing</li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>Clarity & Accuracy For Post-Processing</li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>FEA/CFD Analysis Error Solutions</li>
                        </ul>
                        <Link className="go" to="/Authentication" state={{ plan: "Explorer Plan" }}>Try For Free</Link>
                    </div>

                    <div id="unique">
                        <p id="popu">Most Popular</p>
                        <h3 className="spo">
                        <div id="spot"><img src={img.spot2} alt=""/></div>
                        <h3 id="orange">Standard Plan</h3>
                        </h3>
                        <p id="price">$9.99<span>/month, billed annually</span></p>
                        <ul className="pack">
                        <li id="pri"><p>Standard plan includes:</p></li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>Access to all AI-powered features</li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>50 GB storage</li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>Limited to 50 analysis projects per month</li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>Clarity & Accuracy For Pre-Processing</li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>Clarity & Accuracy For Post-Processing</li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>FEA/CFD Analysis Error Solutions</li>
                        </ul>
                        <Link className="go1" to="/Authentication" state={{ plan: "Standard Plan" }}>Get Started</Link>
                    </div>

                    <div id='pro'>
                        <h3 className="spo">
                        <div id="spot"><img src={img.spot1} alt=""/></div>
                        <h3 id="green">Unlimited Plan</h3>
                        </h3>
                        <p id="price">$24.99<span>/month, billed annually</span></p>
                        <ul className="pack">
                        <li id="pri"><p>Unlimited plan includes:</p></li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>Access to all AI-powered features</li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>Unlimited storage</li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>Unlimited analysis projects per month</li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>Clarity & Accuracy For Pre-Processing</li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>Clarity & Accuracy For Post-Processing</li>
                        <li id="pri"><div><img src={img.spot3} alt=""/></div>FEA/CFD Analysis Error Solutions</li>
                        </ul>
                        <Link className="go" to="/Authentication" state={{ plan: "Unlimited Plan" }}>Go Unlimited</Link>
                    </div>
            </div>
        </div>
    )

}

export default Billing;