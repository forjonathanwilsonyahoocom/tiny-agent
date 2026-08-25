module.exports = {
  hello: function() {
    console.log('Hello World');
  },
  renderMovingCircles: function() {
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', '400');
    svg.setAttribute('height', '400');
    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('cx', '200');
    circle.setAttribute('cy', '200');
    circle.setAttribute('r', '20');
    circle.setAttribute('fill', 'red');
    svg.appendChild(circle);
    document.body.appendChild(svg);
    let x = 200, y = 200, dx = 2, dy = 2;
    setInterval(() => {
      x += dx; y += dy;
      if (x > 380 || x < 20) dx = -dx;
      if (y > 380 || y < 20) dy = -dy;
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
    }, 20);
  }
};
