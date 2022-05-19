import React,{useEffect} from 'react'
// import {Helmet} from "react-helmet"
import './style.css'

export default function Story() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "./function.js";
        script.async = true;
        // script.onload = () => this.scriptLoaded();
      

        // For body
        document.body.appendChild(script);

    
      return () => {
        
      }
    }, [])
    

  return (
    <div className='story-container' id="mainContainer">

        <section class="current" data-color="#5CAB98">
        <div class="question">
            <h2>
                What's the environment like now?
            </h2>
        </div>
        <div class="section-1">
            <p>
                Greenhouse gas emission has become more serious than ever...
            </p>
            <div class="pictures">
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
            </div>
        </div>
        <div class="section-2">
            <p>
                Transport contributes 3rd largest emissions among others, and it keeps growing up at the hightest speed...
            </p>
            <div class="pictures">
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
            </div>
        </div>
        <div class="section-3">
            <p>
                More than 92.5% Australians choose private cars for commuting, which contributes the most part of the emissions...
            </p>
            <div class="pictures">
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
            </div>
        </div>
        
        <div class="section-4">
            <p>
                Green gas emission is not the only harm that typical private cars bring...
            </p>
            <div class="diseases">
                <div id="curPic" class="curPic"></div>
                <div class="description">
                    <img src={require("./pic/Group 51.png")}/>
                    <p>Cardiovascular disease</p>
                </div>
                <div class="description">
                    <img src={require("./pic/Group 53.png")}/>
                    <p>Respiratory inflections</p>
                </div>
                <div class="description">
                    <img src={require("./pic/Group 52.png")}/>
                    <p>Chronic obstructive pulmonary disease (COPD)</p>
                </div>
            </div>
        </div>
    </section>
    <section class="future" data-color="#71AB5C">
        <div class="question">
            <h2>
                What's the environment like in the future?
            </h2>
        </div>
        <div class="chart">
            <canvas id="myChart" width="400" height="300"></canvas>
        </div>
        <div class="part-1">
            <p id="part-1-p" class="part-1-p">In 20 years, the population of Australians will be greatly increased.</p>
            <p id="part-1-p" class="part-1-p">As well as the number of private cars.</p>
            <p id="part-1-p" class="part-1-p">The main harm of transport to environment will mainly be greenhouse gases.</p>
            <p id="part-1-p" class="part-1-p">If we stick the status quo, the environment will be worse and worse...</p>
            <p id="part-1-p" class="part-1-p">But if we want to make some changes, the future will be different!</p>
        </div>
    </section>
    <section class="ev" data-color="#5C8FAB">
        <div class="question">
            <h2>
                What can I do?
            </h2>
        </div>
        <div class="sec-1">
            <p>
                We can start to get to know one of the clean source vehicle - Electric Vehicle (EV).
            </p>
            <div class="pictures">
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
            </div>
        </div>
        <div class="sec-2">
            <p>
                EV is the new trend nowadays which has a high growth rate...
            </p>
            <div class="chart">
                <canvas id="myChart2" width="400" height="300"></canvas>
            </div>
        </div>
        <div class="sec-3">
            <p>
                The goal of using an EV is to decreasing the emission effects caused by fossil fueled cars, and also save energy.
            </p>
            <div class="pictures">
                <img class="pl-10" src={require("./pic/pumping-gas-1631634_1920.jpeg")}/>
                <img class="pr-10" src={require("./pic/climate-protection-7143295_1920.jpeg")}/>
                <img class="pl-10" src={require("./pic/chuttersnap-xfaYAsMV1p8-unsplash.jpeg")}/>
            </div>
        </div>
        <div class="sec-4">
            <p>
                But that’s not all benefits that EV can bring...
            </p>
            <div class="pictures">
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
                <div id="curPic" class="curPic"></div>
            </div>
        </div>
        <div class="final">
            <h2>What to know more?</h2>
            <h3>About environment &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Explore EVs</h3>
        </div>
    </section>





    </div>


  )
}
