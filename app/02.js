;(function () {
  var box = document.querySelector('a-box')
  box.addEventListener('mouseenter', function () {
    console.log('enter')
    box.setAttribute('scale', {x: 2, y: 2, z: 2})
  })

  box.addEventListener('mouseleave', function () {
    console.log('leave')
    box.setAttribute('scale', {x: 1, y: 1, z: 1})
  })
})()
