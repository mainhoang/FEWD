var Links = function () {

  var links = this;
  var navItems = document.getElementById('nav').children;
  var sections = document.getElementsByTagName('section');
  var recipes = document.getElementsByClassName('recipe-wrapper');
  var buttons = document.getElementsByClassName('makeit');


  this.hideSection = function () {

    for (var i = 0; i < sections.length; i++) {

      sections[i].style.opacity = 0.0;
      sections[i].style.zIndex = 0;
      sections[i].style.display = 'none';
    }

    for (var i = 0; i < recipes.length; i++){
      recipes[i].style.opacity = 0.0;
      recipes[i].style.zIndex = 0;
      recipes[i].style.display = 'none';
    }
    console.log(recipes[0]);
  };

  this.showSection = function (id) {

    links.hideSection();

    document.getElementById(id).style.opacity = 1.0;
    document.getElementById(id).style.zIndex = 150;
    document.getElementById(id).style.display = "block";

  };

  this.createButtons = function () {

    for (var i = 0; i < navItems.length; i++){

      navItems[i].addEventListener('click', function(ev){

        var id = ev.target.dataset.section;
        links.showSection(id);

      });

    }

    for (var i = 0; i < buttons.length; i++){

      buttons[i].addEventListener('click', function(ev){

        var id = ev.target.dataset.div;
        links.showSection(id);

      })

    }

  };


  this.init = function(){

    this.createButtons();


  };

  this.init();

};
