const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
  for (let n = 0; n < balls.length; n++) {
    balls[n].style.left = x;
    balls[n].style.top = y;
    balls[n].transform = 'translate(-' + x + ',-' + y + ')';
  }
};