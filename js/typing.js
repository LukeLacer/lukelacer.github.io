document.addEventListener('DOMContentLoaded',function(event){
  var dataText = ['Web Development.', 'Programming.', 'Lucas L Lima.']
  const b_words = 3000
  const b_letters = 200

  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector('h1').innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>'
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, b_letters)
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, b_words)
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0)
        }, 20000)
    }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1)
     })
    }
  }
  StartTextAnimation(0)
});