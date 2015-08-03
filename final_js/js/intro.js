var Intro = function(){

  var intro = this;
  var introPage = document.getElementById('intro-wrapper');

  this.hideIntro = function (){

    introPage.style.opacity = 0.0;
    introPage.style.zIndex = 0;
    introPage.style.display = 'none';

  };

  this.createIntro = function(){

    var introHeading = document.createElement('h2');
    var sibling = document.getElementById('intro-img')
    var intro = document.getElementById('intro');
    var button = document.createElement('div');

    introHeading.innerHTML = "Far East Eats";
    button.innerHTML = '<h5>'+"Enter"+'</h5>';
    button.classList.add('button');
    button.addEventListener ('click', this.hideIntro);
    intro.insertBefore(introHeading, sibling);
    intro.insertBefore(button, sibling);

  };

  this.init = function(){

    this.createIntro();

  };

  this.init();

};
