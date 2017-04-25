;(function (d3) {
  function update () {
    var data = d3.range(10).map(function (d, i) {
      return {v: Math.random()}
    })

    console.log('update')

    // adding an entity as holder for each box
    var entities = d3.select('a-scene')
      .selectAll('a-entity')
      .data(data)

    var newobj = entities.enter()
      .append('a-entity')
      .attr('rotation', function (d, i) {
        var a = 360 / data.length
        return '0 ' + a * i + ' 0'
      })

      // appending a box within each entity
    newobj.append('a-box')
      .attr('color', 'red')
      .attr('width', 1)
      .attr('height', function (d, i) {
        return d.v
      })
      .attr('depth', 0.5)
      .attr('position', function (d, i) {
        return '0 ' + d.v / 2 + ' -5'
      })

    // update height of each box
    entities.select('a-box')
      .attr('height', function (d, i) {
        return d.v
      })

    newobj.append('a-text')
      .attr('value', function (d) {
        return parseInt(d.v * 10)
      })
      .attr('color', 'black')
      .attr('position', function (d) {
        return '-0.1 1.5 -2'
      })
      .attr('visible', false)

    entities.on('mouseenter', function () {
      d3.select(this)
        .select('a-text')
        .attr('visible', true)
    })

    entities.on('mouseleave', function () {
      d3.select(this)
        .select('a-text')
        .attr('visible', false)
    })
  }

  setInterval(update, 5000)

  update()
})(window.d3)
