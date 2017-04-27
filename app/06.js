;(function (d3) {
  var data = d3.range(20).map(function (d, i) {
    return {v: Math.random()}
  })

  d3.select('a-scene')
    .selectAll('a-entity')
    .data(data)
    .enter()
    .append('a-entity')
    .attr('rotation', function (d, i) {
      var a = 90 / data.length
      return '0 ' + (a * i - 45) + ' 0'
    })

    .append('a-plane')
    .attr('material', 'color:red;side:double;transparent:true;opacity:1;')
    .attr('width', 0.4)
    .attr('height', function (d, i) {
      return d.v
    })
    .attr('position', function (d, i) {
      return '0 ' + d.v / 2 + ' -5'
    })
    .attr('animation', function (d, i) {
      var a = 180 / data.length
      var f = 180 + a * i
      var t = 5000 + Math.random() * 5000
      return 'property:rotation;to:360 0 0;dur:' + t + ';easing:easeInOutElastic;loop:true'
    })
})(window.d3)
