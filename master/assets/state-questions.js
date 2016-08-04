  // elements
  var page        = document.getElementById('step')
  var headline    = document.getElementById('headline')
  var context     = document.getElementById('context')
  var questions   = document.getElementById('questions')
  var boxes       = document.getElementsByClassName('check')
  var labels      = document.getElementsByClassName('check-label')
  var containers  = document.getElementsByClassName('button-container')
  var groups      = document.getElementsByClassName('check-group')
  var group       = document.getElementById('group')
  var planForm    = document.getElementById('form')
  var formWrapper = document.getElementById('form-wrapper')
  var questions   = document.getElementById('questions')
  var qWrapper    = document.getElementById('questions-wrapper')
  var next        = document.getElementById('next')
  var back        = document.getElementById('back')

  // hide the buttons at the beginning
  back.style.visibility = 'hidden'
  next.style.visibility = 'hidden'
  next.style.opacity    = '0'
  back.style.opacity    = '0'
  // show the next button
  function showNext(){
    if(page.id != 'step-7' && boxCheckedCount != 0){
      next.style.opacity    = '1'
      next.style.visibility = 'visible'
    }
  }
  // show the back button
  function showBack(){
    if(page.id != 'step-1'){
      back.style.opacity    = '1'
      back.style.visibility = 'visible'
    }
  }
  // render each step's text elements
  function renderText(num){
    questions.innerHTML   = ''
    headline.innerHTML    = step[num].headline
    context.innerHTML     = step[num].context
    for(var q = 0; q < step[num].question.length; q++) {
      questions.innerHTML += '<li>' + step[num].question[q] + '</li>'
    }
  }
  function renderSolution(){
    headline.innerHTML  = step[7].headline
    context.innerHTML   = ''
    questions.innerHTML = ''
  }
  // init quesitons/text -> step one
  renderText(0)
  // set the page id -> step one
  page.id = 'step-1'
  // init stateboxes
  for(var i = 0; i < States.length; i++) { group.innerHTML += '<div class="button-container">' + '<label id="label-' + States[i].state + '" data-ck-lb="false" class="check-label">'+ States[i].state +'</label>' + '<input id="'+ States[i].state +'" type="checkbox" data-ck="false" class="check"/>' + '</div>' }

    // set up the scroll hide on the quesitons/headlines/context text elements
    var windowInitialScroll = window.scrollY || 0
    // array objects to accept the checked states
    var pageOneSelections   = []
    var pageTwoSelections   = []
    var pageThreeSelections = []
    var pageFourSelections  = []
    var pageFiveSelections  = []
    var pageSixSelections   = []
    var pageSevenSelections = []
    var boxCheckedCount     = 0

    // check data for values
    function checkDataFirst(num){
      for(var i = 0; i < boxes.length; i++) {

        if(boxes[i].checked) {
          boxCheckedCount++
        }
        if(!boxes[i].checked || States[i].step[num].includes(false)) {
          boxes[i].style.display      = 'none'
          labels[i].style.display     = 'none'
          containers[i].style.display = 'none'
        }
        if(boxes[i].checked && States[i].step[num].includes(true)) {
          pageOneSelections.push(boxes[i])
        }
      }
    }
    function checkData(num){
      for(var i = 0; i < pageOneSelections.length; i++) {
        console.log(pageOneSelections[i])
      }
    //   if(boxes[i].checked) {
    //     boxCheckedCount++
    //   }
    //   if(boxes[i].checked || States[i].step[num].includes(true)) {
    //     // boxes[i].style.display      = 'none'
    //     // labels[i].style.display     = 'none'
    //     // containers[i].style.display = 'none'
    //   }
    //   if(!boxes[i].checked || States[i].step[num].includes(false)) {
    //     pageOneSelections.push(boxes[i])
    //     boxes[i].style.display      = 'inline-block'
    //     labels[i].style.display     = 'inline-block'
    //     containers[i].style.display = 'inline-block'
    //   }
    }
    // nextbutton listener
    next.addEventListener('click', function(e){
      showBack()

      if      (page.id == 'step-1'){checkDataFirst('one')}
      else if (page.id == 'step-2'){checkData('two')}
      else if (page.id == 'step-3'){checkData('three')}
      else if (page.id == 'step-4'){checkData('four')}
      else if (page.id == 'step-5'){checkData('five')}
      else if (page.id == 'step-6'){checkData('six')}

      for(var i = 0; i < boxes.length; i++) {
          boxes[i].checked    = false
          boxes[i].dataset.ck = false
      }
      // render questions forward
      if      (page.id == 'step-1'){
        page.id = 'step-2'
        renderText(1)
      }
      else if (page.id == 'step-2'){
        page.id = 'step-3'
        renderText(2)
      }
      else if (page.id == 'step-3'){
        page.id = 'step-4'
        renderText(3)
      }
      else if (page.id == 'step-4'){
        page.id = 'step-5'
        renderText(4)
      }
      else if (page.id == 'step-5'){
        page.id = 'step-6'
        renderText(5)
      }
      else if (page.id == 'step-6'){
        page.id = 'step-7'
        renderText(6)
      }
      else if (page.id == 'step-7') {
        renderSolution()
      }

    })

    // backbutton listener
    back.addEventListener('click', function(e){
      window.scrollY = 0
      for(var i = 0; i < boxes.length; i++) {
        boxes[i].checked    = false
        boxes[i].dataset.ck = false
        // display the boxes
        boxes[i].style.display      = 'inline-block'
        labels[i].style.display     = 'inline-block'
        containers[i].style.display = 'inline-block'
      }
      // render the first page (back button goes all the way back to the beginning)
      if (page.id != 'step-1'){
        page.id = 'step-1'
        renderText(1)
      }
      // render questions in reverse
      // if      (page.id == 'step-7'){
      //   page.id = 'step-6'
      //   renderText(6)
      // }
      // else if (page.id == 'step-6'){
      //   page.id = 'step-5'
      //   renderText(5)
      // }
      // else if (page.id == 'step-5'){
      //   page.id = 'step-4'
      //   renderText(4)
      // }
      // else if (page.id == 'step-4'){
      //   page.id = 'step-3'
      //   renderText(3)
      // }
      // else if (page.id == 'step-3'){
      //   page.id = 'step-2'
      //   renderText(2)
      // }
      // else if (page.id == 'step-2') {
      //   pageOneSelections = []
      //   page.id = 'step-1'
      //   renderText(1)
      // }
    })

// the checkbox -> appear as a button funciton
var arr = []
for(var i = 0; i < boxes.length; i++) {
  arr.push(boxes[i].id)
}
arr.forEach(function(val){
  var val = document.getElementById(val)
  val.addEventListener('click', function(){
    val.dataset.ck = val.attributes[1].ownerElement.checked
  })
})

// hide on scroll
document.addEventListener('scroll', function(){
  windowInitialScroll = window.scrollY
  if(windowInitialScroll > 80) {
    headline.style.opacity      = '0'
    context.style.opacity       = '0'
    questions.style.opacity     = '0'
    qWrapper.style.height       = '80px'
    headline.style.visibility   = 'hidden'
    context.style.visibility    = 'hidden'
    questions.style.visibility  = 'hidden'
  }
    else if(windowInitialScroll < 80) {
    headline.style.visibility   = 'visible'
    context.style.visibility    = 'visible'
    questions.style.visibility  = 'visible'
    headline.style.opacity      = '1'
    context.style.opacity       = '1'
    questions.style.opacity     = '1'
    qWrapper.style.height       = '325px'
  }
})

// listener to trigger the showing of the button
for(var i = 0; i < boxes.length; i++){
  boxes[i].addEventListener('click', function(event){
    boxCheckedCount = 1
    showNext()
  }, false)
  boxes[i].removeEventListener('click', function(){
    showNext()
  }, false)
}
