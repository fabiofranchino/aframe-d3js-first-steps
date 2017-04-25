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
      var a = 360 / data.length
      return '0 ' + a * i + ' 0'
    })

    .append('a-plane')
    .attr('material', 'color:red;side:double;transparent:true;opacity:1;')
    .attr('width', 1.5)
    .attr('height', function (d, i) {
      return d.v
    })
    .attr('position', function (d, i) {
      return '0 ' + d.v / 2 + ' -5'
    })
    .attr('animation', function (d, i) {
      var a = 360 / data.length
      var f = 360 + a * i
      return 'property:rotation;to:' + f + ' 0 0;dur:10000;easing:linear'
    })
})(window.d3)
