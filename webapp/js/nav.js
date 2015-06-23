Element.prototype.Navigation = function(){

  var navigation = this;
  var container = document.getElementById('container');
  var position = 0;
  var width = window.innerWidth;
  var navIcon = document.createElement('div');


  this.createButtons = function(){


    navIcon.classList.add('hamburger');
    container.insertBefore(navIcon,document.getElementById('slider'));

    navIcon.addEventListener('mousedown', function(){
      if(position === 0){
        position = (width * 0.2);
        container.style.marginLeft = position + 'px';
      }else{
        position = 0;
        container.style.marginLeft = position;
        }


    });



  };

  this.init = function(){

    navigation.createButtons();


  };


  this.init();


};
