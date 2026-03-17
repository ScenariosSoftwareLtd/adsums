// Ad rotation — swipe transition between slides
(function(){
  var slides = document.querySelectorAll('.ad-slide');
  var pips = document.querySelectorAll('.ad-pip');
  var bg = document.querySelector('.ad-bg');
  if(slides.length < 2) return;

  // Both ad slides have dark backgrounds, so logo should be light
  document.body.classList.add('ad-light-logo');

  var current = 0;
  var timer;

  function show(i){
    slides[current].classList.remove('active');
    slides[current].classList.add('exit-left');

    var prev = current;
    setTimeout(function(){
      slides[prev].classList.remove('exit-left');
    }, 620);

    slides[i].classList.add('active');
    pips.forEach(function(p){ p.classList.remove('active'); });
    pips[i].classList.add('active');
    current = i;

    var isScenarios = slides[i].classList.contains('scenarios');
    if(bg) bg.classList.toggle('scenarios-bg', isScenarios);
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
      if(i === current) return;
      show(i);
      startTimer();
    });
  });

  slides.forEach(function(s, i){
    if(i !== 0) s.classList.remove('active');
  });
  if(bg) bg.classList.add('scenarios-bg');
  current = 0;
  startTimer();
})();
