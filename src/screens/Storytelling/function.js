alert("123")
$(window).scroll(function() {
    $('section').each(function(i) {
      if ($(this).position().top <= $(window).scrollTop()) {
        $('#mainContainer').css('background-color', $(this).attr('data-color'));
      }
    });
  });

function updateBackgroundPicture(path) {
    document.getElementById("mainContainer").style.backgroundImage = path;
}

const curPicPath = [
    `url('./pic2/greenbackground.png')`,
    `url('./pic2/gge_1.jpg')`,
    `url('./pic2/gge_2.jpg')`,
    `url('./pic2/gge_3.jpg')`,
    `url('./pic2/gge_4.jpg')`,
    `url('./pic2/gge_5.jpg')`,
    `url('./pic2/greenbackground.png')`,
    `url('./pic2/car_pollution_1.jpg')`,
    `url('./pic2/car_pollution_2.jpg')`,
    `url('./pic2/car_pollution_3.jpg')`,
    `url('./pic2/greenbackground.png')`,
    `url('./pic2/city_car_1.jpg')`,
    `url('./pic2/city_car_2.jpg')`,
    `url('./pic2/greenbackground.png')`,
    `none`,
    `url('./pic2/bluebackground.png')`,
    `url('./pic2/ev_0.jpg')`,
    `url('./pic2/ev_1.jpg')`,
    `url('./pic2/ev_2.jpg')`,
    `url('./pic2/ev_3.jpg')`,
    `url('./pic2/ev_5.jpg')`,
    `url('./pic2/bluebackground.png')`,
    `url('./pic2/bluebackground.png')`,
    `url('./pic2/tesla_1.jpg')`,
    `url('./pic2/tesla_2.jpg')`,
    `url('./pic2/tesla_3.jpg')`,
    `url('./pic2/tesla_4.jpg')`,
    `url('./pic2/tesla_5.jpg')`,
    `url('./pic2/tesla_6.jpg')`,
    `url('./pic2/tesla_7.jpg')`,
    `url('./pic2/bluebackground.png')`
];

gsap.utils.toArray('.curPic').forEach((pic, i) => {
    ScrollTrigger.create({
        trigger: pic,
        start: 'top 60%',
        end: '+=60% 60%',
        onEnter: () => {
            updateBackgroundPicture(curPicPath[i]);
            // console.log(`url(${curPicPath[i]})`);
        },
        onEnterBack: () => {
            updateBackgroundPicture(curPicPath[i]);
        },
        // markers: true,
        id: 'background-change'
    })
});

let delayed;
gsap.registerPlugin(ScrollTrigger);
const ctx = document.getElementById('myChart').getContext('2d');
const chartCfg = {
    type: 'line',
    legend: {
        display: false,
    },
    data: {
        labels: [],
        datasets: [{
            label: '',
            data: [],
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderColor: 'rgba(255,255,255,0.8)',
            pointBorderColor: "rgba(255,255,255,0.8)",
            pointBackgroundColor: "rgba(255,255,255,0)",
            pointBorderWidth: 2,
            fill: true,
        }]
    },
    options: {
        scales: {
                x: {
                    grid: {
                        display: true,
                        color: 'rgba(255,255,255,0.5)',
                    },
                    ticks: {
                        color: 'rgba(255,255,255,0.5)',
                        font: {
                            size: 16
                        }
                    }
                },
                y: {
                    grid: {
                        display: true,
                        color: 'rgba(255,255,255,0.5)',
                        font: {
                            size: 16
                        }
                    },
                    beginAtZero: true,
                    ticks: {color: 'rgba(255,255,255,0.5)'}
            }
        },
        animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
    }
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
                    ticks: {color: 'rgba(255,255,255,0.5)'}
                },
                y: {
                    grid: {
                        display: true,
                        color: 'rgba(255,255,255,0.5)',
                    },
                    beginAtZero: true,
                    ticks: {color: 'rgba(255,255,255,0.5)'}
            }
        },
        animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
    }
}

const labels = [
    ['2000', '2005', '2010', '2015', '2020', '2025', '2030'],
    ['2000', '2005', '2010', '2015', '2020', '2025', '2030'],
    ['Electricity', 'Electricity II', 'Transport', 'Fugitive Emissions', 'Industrial', 'Algriculture', 'Waste'],
    ['2000', '2005', '2010', '2015', '2020', '2025', '2030'],
    ['2000', '2005', '2010', '2015', '2020', '2025', '2030']
]

const data = [
    [4763615, 4989246, 5461101, 6022322, 6760752, 7130097, 7659611],
    [2682536, 2933746, 3249418, 3581815, 3963818, 4276497, 4612871],
    [0.31, 0.19, 0.17, 0.10, 0.06, 0.15, 0.02],
    [18130, 20203, 21389, 22728, 23596, 27763, 29947],
    [18130, 20203, 21389, 22728, 23596, 22054, 21492]
]

const mode = ['line', 'line', 'bar', 'line', 'line']


const colors = [gradientStroke2, gradientStroke, [
    '#fbf8cc',
    '#ffcfd2',
    '#ff595e',
    '#cfbaf0',
    '#90dbf4',
    '#98f5e1',
    '#b9fbc0'
  ], gradientStroke2, gradientStroke]

const colorsBkgrd = [gradientBkgrd2, gradientBkgrd, [
    '#fbf8cc',
    '#ffcfd2',
    '#ff595e',
    '#cfbaf0',
    '#90dbf4',
    '#98f5e1',
    '#b9fbc0'
  ], gradientBkgrd2, gradientBkgrd]

gsap.utils.toArray('.part-1-p').forEach((el, i) => {
    ScrollTrigger.create({
        trigger: el,
        start: 'top 60%',
        end: '+=60% 60%',
        onEnter: () => {
            updateData(myChart, labels[i], data[i], colors[i], colorsBkgrd[i], mode[i]);

        },
        onEnterBack: () => {
            updateData(myChart, labels[i], data[i], colors[i], colorsBkgrd[i], mode[i]);
        },
        // markers: true,
        id: 'chart-converter'
    })
});



const ctx2 = document.getElementById('myChart2').getContext('2d');
const chartCfg2 = {
    type: 'bar',
    legend: {
        display: false,
    },
    data: {
        labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            label: '',
            data: [49, 253, 293, 1322, 1771, 1369, 2284, 2216, 6718, 3226, 8688],
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderColor: 'rgba(255,255,255,0.8)',
            pointBorderColor: "rgba(255,255,255,0.8)",
            pointBackgroundColor: "rgba(255,255,255,0)",
            pointBorderWidth: 2,
            fill: true,
        }]
    },
    options: {
        scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: 'rgba(255,255,255,0.5)',
                        font: {
                            size: 16
                        }
                    }
                },
                y: {
                    grid: {
                        display: true,
                        color: 'rgba(255,255,255,0.5)',
                        font: {
                            size: 16
                        }
                    },
                    beginAtZero: true,
                    ticks: {color: 'rgba(255,255,255,0.5)'}
            }
        },
        animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
    }
};
const myChart2 = new Chart(ctx2, chartCfg2);