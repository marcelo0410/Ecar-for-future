import React,{useEffect} from 'react'
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
import $ from 'jquery'

export default function Index() {

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
        <div class="section-1">
            <p>Let's have a look at the future.</p>
        </div>
    </section>
    <section class="ev" data-color="#5C8FAB">
        <div class="question">
            <h2>
                What can I do?
            </h2>
        </div>
    </section>
    </div>
  )
}
