// let isPinned = false;
// const p = document.querySelector('p');

// const observer = new IntersectionObserver(([e]) => {
//     isPinned = (e.intersectionRatio < 1);
//     e.target.classList.toggle('pinned', isPinned);
// }, { threshold: [1] });

// observer.observe(p)

// document.addEventListener('scroll', (e) => {
//     if (isPinned) {
//         let html = document.documentElement
//         let height = parseInt(getComputedStyle(p).getPropertyValue('height')) + parseInt(getComputedStyle(p).getPropertyValue('margin-bottom'))
//     }
// })


// Code By Webdevtrick ( https://webdevtrick.com )
$(window).scroll(function() {
    $('section').each(function(i) {
      if ($(this).position().top <= $(window).scrollTop()) {
        $('body').css('background-color', $(this).attr('data-color'));
      }
    });
  });