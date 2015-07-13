Element.prototype.Search = function () {

  var gallery = document.getElementById('gallery');
  var search = this;
  var input = this.children[0];

  this.init = function(){

    input.addEventListener('focus', function(){
      this.value = '';
    });

    input.addEventListener('keyup',function(ev){
      if(ev.keyCode===13){
        var query = input.value;
        gallery.filterPhotos(query);
      };

    });

  };

  this.init();
  //when user focuses on input, clear its contents
  //after the user presses 'enter/return', filter the gallery <li> using tags from the JSON
};
