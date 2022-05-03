import React,{useEffect} from 'react'
import Current from './components/Current'
import './components/style.css'
import bannerone_theo from '../../assets/storyboard/bannerone-theo.png'
import bannerone_glacier from '../../assets/storyboard/bannerone-glacier.png'
import bannerone_dryland from '../../assets/storyboard/bannerone-dryland.png'
import banner2_tire from '../../assets/storyboard/banner2-tire.png'
import banner3_car from '../../assets/storyboard/banner3-car.jpg'
import healthHeart from '../../assets/currentenv/health-human-heart.png'
import healthBreath from '../../assets/currentenv/health-breath.png'
import healthPharynx from '../../assets/currentenv/health-pharynx.png'
import $ from 'jquery'

export default function Index() {

  useEffect(() => {
    $(window).scroll(function() {
      $('section').each(function(i) {
        if ($(this).position().top <= $(window).scrollTop()) {
          $('body').css('background-color', $(this).attr('data-color'));
        }
      });
    });
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className='container'>
          <section className="current" data-color="#5CAB98">
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
                  <img className="pl-10" src={bannerone_theo}/>
                  <img className="pr-10" src={bannerone_glacier}/>
                  <img className="pl-10" src={bannerone_dryland} width="250px"/>
              </div>
          </div>
          <div className="section-2">
              <p>
                  Transport contributes 3rd largest emissions among others, and it keeps growing up at the hightest speed...
              </p>
              <div className="pictures">
                  <img src={banner2_tire}/>
              </div>
          </div>
          <div className="section-3">
              <p>
                  More than 92.5% Australians choose private cars for commuting, which contributes the most part of the emissions...
              </p>
              <div className="pictures">
                  <img src={banner3_car}/>
              </div>
          </div>
          
          <div className="section-4">
              <p>
                  Green gas emission is not the only harm that typical private cars bring...
              </p>
              <div className="diseases">
                  <div className="description">
                      <img src={healthHeart} style={{width:"200px"}}/>
                      <p>Cardiovascular disease</p>
                  </div>
                  <div className="description">
                      <img src={healthBreath}/>
                      <p>Respiratory inflections</p>
                  </div>
                  <div className="description">
                      <img src={healthPharynx}/>
                      <p>Chronic obstructive pulmonary disease (COPD)</p>
                  </div>
              </div>
          </div>
      </section>
      <section className="future" data-color="#71AB5C">
          <div className="question">
              <h2>
                  {/* What's the environment like in the future? */}
              </h2>
          </div>
          <div className="section-1">
              {/* <p1>Let's have a look at the future.</p1> */}
              {/* <p2>In 20 years, the population of Australians will be greatly increased.</p2> */}
              <div className="pictures">
                  <img className="pic1" src="" alt=""/>
              </div>
              {/* <p3>As well as the number of private cars.</p3> */}
              <div className="pictures">
                  <img className="pic2" src="" alt=""/>
              </div>
          </div>
      </section>
      <section className="ev" data-color="#5C8FAB">
          <div className="question">
              <h2>
                  {/* What can I do? */}
              </h2>
          </div>
      </section>
    </div>
  )
}
