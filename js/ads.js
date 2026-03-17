// Ad rotation — crossfade between slides, swap background and nav per slide
(function(){
  var slides = document.querySelectorAll('.ad-slide');
  var pips = document.querySelectorAll('.ad-pip');
  var bg = document.querySelector('.ad-bg');
  if(slides.length < 2) return;

  var current = 0;
  var timer;

  function show(i){
    slides.forEach(function(s){ s.classList.remove('active'); });
    pips.forEach(function(p){ p.classList.remove('active'); });
    slides[i].classList.add('active');
    pips[i].classList.add('active');
    current = i;

    var isScenarios = slides[i].classList.contains('scenarios');
    if(bg) bg.classList.toggle('scenarios-bg', isScenarios);
    document.body.classList.toggle('ad-light', isScenarios);
  }

  function next(){
    show((current + 1) % slides.length);
  }

  function startTimer(){
    clearInterval(timer);
    timer = setInterval(next, 8000);
  }

  pips.forEach(function(p, i){
    p.addEventListener('click', function(){
      show(i);
      startTimer();
    });
  });

  show(0);
  startTimer();
})();
