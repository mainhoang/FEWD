var Nav = function () {

  var nav = this;
  var navItems = nav.children[1].children;
  var sections = document.getElementsByTagName('section');
  var recipes = document.getElementsByClassName('recipe-wrapper');


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

    nav.hideSection();

    document.getElementById(id).style.opacity = 1.0;
    document.getElementById(id).style.zIndex = 150;
    document.getElementById(id).style.display = "block";

  };

  this.createButtons = function () {

    for (var i = 0; i < navItems.length; i++){

      navItems[i].addEventListener('click', function(ev){

        var id = ev.target.dataset.section;
        nav.showSection(id);

      });

    }

  };


  this.init = function(){

    nav.createButtons();


  };

  this.init();

};
