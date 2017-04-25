;(function () {
  var en = document.querySelector('#en')

  en.addEventListener('animationstart', function () {
    console.log('animationstart')
  })

  en.addEventListener('animationend', function () {
    console.log('animationend')
  })
})()
