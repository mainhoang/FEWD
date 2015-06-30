Element.prototype.Navigation = function(){

  var navigation = this;
  var container = document.getElementById('container');
  var navIcon = document.createElement('div');


  this.toggleNav = function(){
    if(container.style.left === "0px"){
      container.style.left = width * 0.2);
    } else {
      container.style.left = "0px";
    }

  };


  this.createButton = function(){


    navIcon.classList.add('hamburger');
    navIcon.addEventListener('mousedown',navigation.toogleNav);
    container.insertBefore(navIcon,document.getElementById('slider'));


  });





  this.init = function(){

    this.createButton();


  };


  this.init();


};
