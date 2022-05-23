import React, { useEffect, useRef, useState } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import $ from "jquery";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./style.css";
import Chart from "chart.js/auto";
// import p1 from './pic2/greenbackground.png'

export default function Index() {

  const location = useLocation()
  const navigate = useNavigate()

  const resetDirectToCur = () =>{

      navigate('/curenv')
      window.scrollTo(0, 0);
    }
    const resetDirectToEV= () =>{

      navigate('/carselection')
      window.scrollTo(0, 0);
    }

  const containerRef = useRef(null);
  const myChartRef = useRef(null);
  const myChart2Ref = useRef(null);
  const partRef = useRef(null);
  const curPicRef = useRef(null);

  const curPicPath = [
    // `url('./pic2/greenbackground.png')`,
    `url(/pic2/greenbackground.png)`,
    `url('/pic2/gge_1.jpg')`,
    `url('/pic2/gge_2.jpg')`,
    `url('/pic2/gge_3.jpg')`,
    `url('/pic2/gge_4.jpg')`,
    `url('/pic2/gge_5.jpg')`,
    `url('/pic2/greenbackground.png')`,
    `url('/pic2/car_pollution_1.jpg')`,
    `url('/pic2/car_pollution_2.jpg')`,
    `url('/pic2/car_pollution_3.jpg')`,
    `url('/pic2/greenbackground.png')`,
    `url('/pic2/city_car_1.jpg')`,
    `url('/pic2/city_car_2.jpg')`,
    `url('/pic2/greenbackground.png')`,
    `none`,
    `url('/pic2/bluebackground.png')`,
    `url('/pic2/ev_0.jpg')`,
    `url('/pic2/ev_1.jpg')`,
    `url('/pic2/ev_2.jpg')`,
    `url('/pic2/ev_3.jpg')`,
    `url('/pic2/ev_5.jpg')`,
    `url('/pic2/bluebackground.png')`,
    `url('/pic2/bluebackground.png')`,
    `url('/pic2/tesla_1.jpg')`,
    `url('/pic2/tesla_2.jpg')`,
    `url('/pic2/tesla_3.jpg')`,
    `url('/pic2/tesla_4.jpg')`,
    `url('/pic2/tesla_5.jpg')`,
    `url('/pic2/tesla_6.jpg')`,
    `url('/pic2/tesla_7.jpg')`,
    `url('/pic2/bluebackground.png')`,
  ];

  function updateBackgroundPicture(path) {
    // let divStyle = {
    //     backgroundImage: path
    // }
    // setContainerStyle(divStyle)
    // console.log(divStyle)
    document.getElementById("mainContainer").style.backgroundImage = path;
  }

  useEffect(() => {
    $(window).scroll(function () {
      $("section").each(function (i) {
        if ($(this).position().top <= $(window).scrollTop()) {
          $("#mainContainer").css(
            "background-color",
            $(this).attr("data-color")
          );
        }
      });
    });
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".curPic").forEach((pic, i) => {
      ScrollTrigger.create({
        trigger: pic,
        start: "top 60%",
        end: "+=60% 60%",
        onEnter: () => {
          updateBackgroundPicture(curPicPath[i]);
        },
        onEnterBack: () => {
          updateBackgroundPicture(curPicPath[i]);
        },
        // markers: true,
        id: "background-change",
      });
    });
  }, []);

  useEffect(() => {
    let delayed;
    const ctx = myChartRef.current.getContext("2d");
    const chartCfg = {
      type: "line",
      legend: {
        display: false,
      },
      data: {
        labels: [],
        datasets: [
          {
            label: "",
            data: [],
            backgroundColor: "rgba(255,255,255,0.8)",
            borderColor: "rgba(255,255,255,0.8)",
            pointBorderColor: "rgba(255,255,255,0.8)",
            pointBackgroundColor: "rgba(255,255,255,0)",
            pointBorderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: true,
              color: "rgba(255,255,255,0.5)",
            },
            ticks: {
              color: "rgba(255,255,255,0.5)",
              font: {
                size: 16,
              },
            },
          },
          y: {
            grid: {
              display: true,
              color: "rgba(255,255,255,0.5)",
              font: {
                size: 16,
              },
            },
            beginAtZero: true,
            ticks: { color: "rgba(255,255,255,0.5)" },
          },
        },
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (
              context.type === "data" &&
              context.mode === "default" &&
              !delayed
            ) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
      },
    };

    const myChart = new Chart(ctx, chartCfg);

    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#E2D1C3");
    gradientStroke.addColorStop(1, "#fdfcfb");

    var gradientBkgrd = ctx.createLinearGradient(0, 100, 0, 400);
    gradientBkgrd.addColorStop(0, "rgba(226,209,195,0.4)");
    gradientBkgrd.addColorStop(1, "rgba(253,252,251,0)");

    var gradientStroke2 = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke2.addColorStop(0, "#fff1eb");
    gradientStroke2.addColorStop(1, "#ace0f9");

    var gradientBkgrd2 = ctx.createLinearGradient(0, 100, 0, 400);
    gradientBkgrd2.addColorStop(0, "rgba(226,209,195,0.4)");
    gradientBkgrd2.addColorStop(1, "rgba(172,224,249,0)");

    function updateData(myChart, labels, data, color, colorsBkgrd, mode) {
      chartCfg.type = mode;
      myChart.data.labels = labels;
      myChart.data.datasets[0].data = data;
      myChart.data.datasets[0].backgroundColor = colorsBkgrd;
      myChart.data.datasets[0].borderColor = color;
      myChart.update();
    }

    function updateConfigAsNewObject(myChart) {
      myChart.options = {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: { color: "rgba(255,255,255,0.5)" },
          },
          y: {
            grid: {
              display: true,
              color: "rgba(255,255,255,0.5)",
            },
            beginAtZero: true,
            ticks: { color: "rgba(255,255,255,0.5)" },
          },
        },
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (
              context.type === "data" &&
              context.mode === "default" &&
              !delayed
            ) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
      };
    }

    // const updateConfigAsNewObject = (myChart) => {(
    //     myChart.options = {
    //         responsive: true,
    //         scales: {
    //                 x: {
    //                     grid: {
    //                         display: false,
    //                     },
    //                     ticks: {color: 'rgba(255,255,255,0.5)'}
    //                 },
    //                 y: {
    //                     grid: {
    //                         display: true,
    //                         color: 'rgba(255,255,255,0.5)',
    //                     },
    //                     beginAtZero: true,
    //                     ticks: {color: 'rgba(255,255,255,0.5)'}
    //             }
    //         },
    //         animation: {
    //             onComplete: () => {
    //               delayed = true;
    //             },
    //             delay: (context) => {
    //               let delay = 0;
    //               if (context.type === 'data' && context.mode === 'default' && !delayed) {
    //                 delay = context.dataIndex * 300 + context.datasetIndex * 100;
    //               }
    //               return delay;
    //             },
    //           },
    //     }
    // )}

    const labels = [
      ["2000", "2005", "2010", "2015", "2020", "2025", "2030"],
      ["2000", "2005", "2010", "2015", "2020", "2025", "2030"],
      [
        "Electricity",
        "Electricity II",
        "Transport",
        "Fugitive Emissions",
        "Industrial",
        "Algriculture",
        "Waste",
      ],
      ["2000", "2005", "2010", "2015", "2020", "2025", "2030"],
      ["2000", "2005", "2010", "2015", "2020", "2025", "2030"],
    ];

    const data = [
      [4763615, 4989246, 5461101, 6022322, 6760752, 7130097, 7659611],
      [2682536, 2933746, 3249418, 3581815, 3963818, 4276497, 4612871],
      [0.31, 0.19, 0.17, 0.1, 0.06, 0.15, 0.02],
      [18130, 20203, 21389, 22728, 23596, 27763, 29947],
      [18130, 20203, 21389, 22728, 23596, 22054, 21492],
    ];

    const mode = ["line", "line", "bar", "line", "line"];

    const colors = [
      gradientStroke2,
      gradientStroke,
      [
        "#fbf8cc",
        "#ffcfd2",
        "#ff595e",
        "#cfbaf0",
        "#90dbf4",
        "#98f5e1",
        "#b9fbc0",
      ],
      gradientStroke2,
      gradientStroke,
    ];

    const colorsBkgrd = [
      gradientBkgrd2,
      gradientBkgrd,
      [
        "#fbf8cc",
        "#ffcfd2",
        "#ff595e",
        "#cfbaf0",
        "#90dbf4",
        "#98f5e1",
        "#b9fbc0",
      ],
      gradientBkgrd2,
      gradientBkgrd,
    ];

    gsap.utils.toArray('.part-1-p').forEach((el, i) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 60%",
        end: "+=60% 60%",
        onEnter: () => {
          updateData(
            myChart,
            labels[i],
            data[i],
            colors[i],
            colorsBkgrd[i],
            mode[i]
          );
        },
        onEnterBack: () => {
          updateData(
            myChart,
            labels[i],
            data[i],
            colors[i],
            colorsBkgrd[i],
            mode[i]
          );
        },
        // markers: true,
        id: "chart-converter",
      });
    });

    const ctx2 = myChart2Ref.current.getContext("2d");
    const chartCfg2 = {
      type: "bar",
      legend: {
        display: false,
      },
      data: {
        labels: [
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
        ],
        datasets: [
          {
            label: "",
            data: [
              49, 253, 293, 1322, 1771, 1369, 2284, 2216, 6718, 3226, 8688,
            ],
            backgroundColor: "rgba(255,255,255,0.8)",
            borderColor: "rgba(255,255,255,0.8)",
            pointBorderColor: "rgba(255,255,255,0.8)",
            pointBackgroundColor: "rgba(255,255,255,0)",
            pointBorderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "rgba(255,255,255,0.5)",
              font: {
                size: 16,
              },
            },
          },
          y: {
            grid: {
              display: true,
              color: "rgba(255,255,255,0.5)",
              font: {
                size: 16,
              },
            },
            beginAtZero: true,
            ticks: { color: "rgba(255,255,255,0.5)" },
          },
        },
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (
              context.type === "data" &&
              context.mode === "default" &&
              !delayed
            ) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
      },
    };

    const myChart2 = new Chart(ctx2, chartCfg2);
  }, []);

  return (
    <div className="story-container" id="mainContainer" ref={containerRef}>
      <section className="current" data-color="#5CAB98">
        <div className="question">
          <h2>What's the environment like now?</h2>
        </div>
        <div className="section-1">
          <p>Greenhouse gas emission has become more serious than ever...</p>
          <div className="pictures">
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
          </div>
        </div>
        <div className="section-2">
          <p>
            Transport contributes 3rd largest emissions among others, and it
            keeps growing up at the hightest speed...
          </p>
          <div className="pictures">
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
          </div>
        </div>
        <div className="section-3">
          <p>
            More than 92.5% Australians choose private cars for commuting, which
            contributes the most part of the emissions...
          </p>
          <div className="pictures">
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
          </div>
        </div>

        <div className="section-4">
          <p>
            Green gas emission is not the only harm that typical private cars
            bring...
          </p>
          <div className="diseases">
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div className="description">
              <img src={require("./pic/Group 51.png")} />
              <p>Cardiovascular disease</p>
            </div>
            <div className="description">
              <img src={require("./pic/Group 53.png")} />
              <p>Respiratory inflections</p>
            </div>
            <div className="description">
              <img src={require("./pic/Group 52.png")} />
              <p>Chronic obstructive pulmonary disease (COPD)</p>
            </div>
          </div>
        </div>
      </section>
      <section className="future" data-color="#71AB5C">
        <div className="question">
          <h2>What's the environment like in the future?</h2>
        </div>
        <div className="chart">
          <canvas
            id="myChart"
            width="400"
            height="300"
            ref={myChartRef}
          ></canvas>
        </div>
        <div className="part-1">
          <p ref={partRef} id="part-1-p" className="part-1-p">
            In 20 years, the population of Australians will be greatly
            increased.
          </p>
          <p ref={partRef} id="part-1-p" className="part-1-p">
            As well as the number of private cars.
          </p>
          <p ref={partRef} id="part-1-p" className="part-1-p">
            The main harm of transport to environment will mainly be greenhouse
            gases.
          </p>
          <p ref={partRef} id="part-1-p" className="part-1-p">
            If we stick the status quo, the environment will be worse and
            worse...
          </p>
          <p ref={partRef} id="part-1-p" className="part-1-p">
            But if we want to make some changes, the future will be different!
          </p>
        </div>
      </section>
      <section className="ev" data-color="#5C8FAB">
        <div className="question">
          <h2>What can I do?</h2>
        </div>
        <div className="sec-1">
          <p>
            We can start to get to know one of the clean source vehicle -
            Electric Vehicle (EV).
          </p>
          <div className="pictures">
            <div id="curPic" className="curPic"></div>
            <div id="curPic" className="curPic"></div>
            <div id="curPic" className="curPic"></div>
            <div id="curPic" className="curPic"></div>
            <div id="curPic" className="curPic"></div>
            <div id="curPic" className="curPic"></div>
            <div id="curPic" className="curPic"></div>
          </div>
        </div>
        <div className="sec-2">
          <p>EV is the new trend nowadays which has a high growth rate...</p>
          <div className="chart">
            <canvas
              id="myChart2"
              width="400"
              height="300"
              ref={myChart2Ref}
            ></canvas>
          </div>
        </div>
        <div className="sec-3">
          <p>
            The goal of using an EV is to decreasing the emission effects caused
            by fossil fueled cars, and also save energy.
          </p>
          <div className="pictures">
            <img
              className="pl-10"
              src={require("./pic/pumping-gas-1631634_1920.jpeg")}
            />
            <img
              className="pr-10"
              src={require("./pic/climate-protection-7143295_1920.jpeg")}
            />
            <img
              className="pl-10"
              src={require("./pic/chuttersnap-xfaYAsMV1p8-unsplash.jpeg")}
            />
          </div>
        </div>
        <div className="sec-4">
          <p>But that's not all benefits that EV can bring...</p>
          <div className="pictures">
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
            <div ref={curPicRef} id="curPic" className="curPic"></div>
          </div>
        </div>
        <div className="final">
          <h2>Want to know more?</h2>
          <div style={{display:"flex", justifyContent:"center", gap:"260px"}}>
                <a href="/curenv" className="final__link" >About environment</a>
                <a href="/carselection" className="final__link" >Explore EVs</a>
          </div>
        </div>
      </section>
    </div>
  );
}
