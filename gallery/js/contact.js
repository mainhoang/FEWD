Element.prototype.Contact = function(){

  var contact = this,
      form = document.getElementById('c_form'),
      submit = document.getElementById('contact-submit'),
      wrapper = document.getElementById('form-wrapper');


  this.send = function(){
      var link = 'mailto:mnhoang.80@gmail.com?subject=Message from '+
                  form.children[0].value+
                  '&body='+
                  form.children[3].value;
      console.log(link);
      window.location.href = link;
      wrapper.innerHTML = '<div class="center"><h1>Thanks!</h1></div>';
    //collect all form info
    //send via email
    //leave feedback that form has been sent
  };

  this.init = function(){
    //addEventListener to button which sends the form
      submit.addEventListener('click',function(ev){
        ev.preventDefault();
        contact.send();
      });

  };

  this.init();

};
