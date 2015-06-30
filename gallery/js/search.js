Element.prototype.Search = function () {

  var search = this;
  var gallery = document.getElementById('gallery');
  var searchBar = document.getElementById('search');

  this.deletePlaceholder = function(){
    var input = document.getElementById('searchfield');
    input.addEventListener('click',function(){
      input.removeAttribute('placeholder');
    });

  };

  

  this.init =function(){

    this.deletePlaceholder();

  };

  this.init();
  //when user focuses on input, clear its contents
  //after the user presses 'enter/return', filter the gallery <li> using tags from the JSON
};
