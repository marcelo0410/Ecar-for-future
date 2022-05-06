import React,{useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import Current from './components/Current'
import styles from './components/style.css'
import cur_sec1_dryland from '../../assets/storyboard/cur-sec1-dryland.png'
import cur_sec1_forest from '../../assets/storyboard/cur-sec1-forest.png'
import cur_sec1_glacier from '../../assets/storyboard/cur-sec1-glacier.png'
import cur_sec1_iceberg from '../../assets/storyboard/cur-sec1-iceberg.png'
import cur_sec1_theo from '../../assets/storyboard/cur-sec1-theo.png'
import cur_sec2_exhaustpipe from '../../assets/storyboard/cur-sec2-exhaustpipe.png'
import cur_sec2_tire from '../../assets/storyboard/cur-sec2-tire.png'
import cur_sec3_car from '../../assets/storyboard/cur-sec3-car.jpg'
import cur_sec3_traffic from '../../assets/storyboard/cur-sec3-traffic.png'
import cur_sec4_headache from '../../assets/storyboard/cur-sec4-headache.png'
import cur_sec4_heartattack from '../../assets/storyboard/cur-sec4-heartattack.png'
import cur_sec4_sneeze from '../../assets/storyboard/cur-sec4-sneeze.png'
import cur_sec4_heart from '../../assets/storyboard/cur-sec4-heart.png'
import cur_sec4_head from '../../assets/storyboard/cur-sec4-head.png'
import cur_sec4_lung from '../../assets/storyboard/cur-sec4-lung.png'
import que_sec1_1 from '../../assets/storyboard/que-sec1-1.jpg'
import que_sec1_2 from '../../assets/storyboard/que-sec1-2.jpg'
import que_sec1_3 from '../../assets/storyboard/que-sec1-3.jpg'
import que_sec1_4 from '../../assets/storyboard/que-sec1-4.jpg'
import que_sec1_5 from '../../assets/storyboard/que-sec1-5.jpg'
import ev_sec1_charging from '../../assets/storyboard/ev-sec1-charging.jpeg'
import ev_sec1_drive from '../../assets/storyboard/ev-sec1-drive.jpeg'
import ev_sec1_jenny from '../../assets/storyboard/ev-sec1-jenny.jpeg'
import ev_sec1_tesla from '../../assets/storyboard/ev-sec1-tesla.jpeg'
import ev_sec1_dashboard from '../../assets/storyboard/ev-sec1-dashboard.jpeg'
import ev_sec2_barchart from '../../assets/storyboard/ev-sec2-barchart.png'
import ev_sec3_pump from '../../assets/storyboard/ev-sec3-pump.jpeg'
import ev_sec3_hearttree from '../../assets/storyboard/ev-sec3-hearttree.jpeg'
import ev_sec3_chuttersnap from '../../assets/storyboard/ev-sec3-chuttersnap.jpeg'
import ev_sec4_cardoor from '../../assets/storyboard/ev-sec4-cardoor.JPG'
import ev_sec4_carfront from '../../assets/storyboard/ev-sec4-carfront.JPG'
import ev_sec4_carside from '../../assets/storyboard/ev-sec4-carside.JPG'
import ev_sec4_carside2 from '../../assets/storyboard/ev-sec4-carside2.JPG'
import ev_sec4_panel from '../../assets/storyboard/ev-sec4-panel.JPG'
import ev_sec4_rearmirror from '../../assets/storyboard/ev-sec4-rearmirror.JPG'
import ev_sec4_seat from '../../assets/storyboard/ev-sec4-seat.JPG'

import $ from 'jquery'

export default function Index() {

    const location = useLocation()
    const navigate = useNavigate()

    const resetDirectToCur = () =>{

        navigate('/curenv')
        window.scrollTo(0, 0);
      }
      const resetDirectToEV= () =>{

        navigate('/calculator')
        window.scrollTo(0, 0);
      }

  useEffect(() => {
    $(window).scroll(function() {
      $('section').each(function(i) {
        if ($(this).position().top <= $(window).scrollTop()) {
          $('#mainContainer').css('background-color', $(this).attr('data-color'));
        }
      });
    });
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className="story-container" id="mainContainer">
          <section class="current" data-color="#5CAB98">
        <div className="question">
            <h2>
                What's the environment like now?
            </h2>
        </div>
        <div className="section-1">
            <p>
                Greenhouse gas emission has become more serious than ever...
            </p>
            <div className="pictures">
                <img className="pl-10" src={cur_sec1_theo}/>
                <img className="pr-10" src={cur_sec1_glacier}/>
                <img className="pl-10" src={cur_sec1_dryland}/>
                <img className="pr-10" src={cur_sec1_forest}/>
                <img className="pl-10" src={cur_sec1_iceberg}/>
            </div>
        </div>
        <div class="section-2">
            <p>
                Transport contributes 3rd largest emissions among others, and it keeps growing up at the hightest speed...
            </p>
            <div class="pictures">
                <img src={cur_sec2_tire}/>
                <img src={cur_sec2_exhaustpipe}/>
            </div>
        </div>
        <div class="section-3">
            <p>
                More than 92.5% Australians choose private cars for commuting, which contributes the most part of the emissions...
            </p>
            <div class="pictures">
                <img src={cur_sec3_car}/>
                <img src={cur_sec3_traffic}/>
            </div>
        </div>
        
        <div class="section-4">
            <p>
                Green gas emission is not the only harm that typical private cars bring...
            </p>
            <div class="diseases">
                <div class="description">
                    <img src={cur_sec4_headache}/>
                    {/* <p>Cardiovascular disease</p> */}
                </div>
                <div class="description">
                    <img src={cur_sec4_sneeze}/>
                    {/* <p>Respiratory inflections</p> */}
                </div>
                <div class="description">
                    <img src={cur_sec4_heartattack}/>
                    {/* <p>Chronic obstructive pulmonary disease (COPD)</p> */}
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
        <div class="part-1">
            <p>In 20 years, the population of Australians will be greatly increased.</p>
            <img class="pic1" src={que_sec1_1} alt="" />
            <p>As well as the number of private cars.</p>
            <img class="pic2" src={que_sec1_2} alt="" />
            <p>The main harm of transport to environment will mainly be greenhouse gases.</p>
            <img class="pic3" src={que_sec1_3} alt="" />
            <p>If we stick the status quo, the environment will be worse and worse...</p>
            <img class="pic4" src={que_sec1_4} alt="" />
            <p>But if we want to make some changes, the future will be different!</p>
            <img class="pic5" src={que_sec1_5} alt="" />
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
                <img class="pl-10" src={ev_sec1_tesla}/>
                <img class="pr-10" src={ev_sec1_charging}/>
                <img class="pl-10" src={ev_sec1_dashboard}/>
                <img class="pr-10" src={ev_sec1_jenny}/>
                <img class="pl-10" src={ev_sec1_drive}/>
            </div>
        </div>
        <div class="sec-2">
            <p>
                EV is the new trend nowadays which has a high growth rate...
            </p>
            <div class="pictures">
                <img src={ev_sec2_barchart}/>
            </div>
        </div>
        <div class="sec-3">
            <p>
                The goal of using an EV is to decreasing the emission effects caused by fossil fueled cars, and also save energy.
            </p>
            <div class="pictures">
                <img class="pl-10" src={ev_sec3_pump}/>
                <img class="pr-10" src={ev_sec3_hearttree}/>
                <img class="pl-10" src={ev_sec3_chuttersnap}/>
            </div>
        </div>
        <div class="sec-4">
            <p>
                But that's not all benefits that EV can bring...
            </p>
            <div class="pictures">
                <img class="pl-10" src={ev_sec4_seat}/>
                <img class="pr-10" src={ev_sec4_carside}/>
                <img class="pl-10" src={ev_sec4_carside2}/>
                <img class="pr-10" src={ev_sec4_carfront}/>
                <img class="pl-10" src={ev_sec4_panel}/>
                <img class="pr-10" src={ev_sec4_rearmirror}/>
                <img class="pl-10" src={ev_sec4_cardoor}/>
            </div>
        </div>
        <div class="final">
            <h2 >What to know more?</h2>
            <div style={{display:"flex", justifyContent:"center", gap:"260px"}}>
                <a className="final__link" onClick={resetDirectToCur}>About environment</a>
                <a className="final__link" onClick={resetDirectToEV}>Explore EVs</a>
            </div>
        </div>
        </section>
    </div>
  )
}
