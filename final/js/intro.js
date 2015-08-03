var Create = function(){

  var create = this;
  var introPage = document.getElementById('intro-wrapper');
  var home = document.getElementById('home');

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

  this.createAbout = function(){


    var about = document.createElement('div');

    about.classList.add('about');
    about.innerHTML = '<h2>'+"About Us"+'</h2><p>'+"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"+'</p>';

    home.appendChild(about);


  }


  this.init = function(){

    this.createIntro();
    this.createAbout();

  };

  this.init();

};
