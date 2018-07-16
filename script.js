var a = -6,
    b = 20,
    n = 40,
    Px = 500,
    Py = 300,
    Dx = 50,
    Dy = 30,
    x = [],
    y = []
    
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    x0 = 100,
    y0 = canvas.height - 100,
    dx = (b - a) / (n - 1)

for (i=0; i<n; i++) {
	x[i]=a+i*dx;
	y[i] = 3*x[i]*x[i]-8*x[i]+10;
}

sx = (x.max()-x.min())/Px
sy = (y.max()-y.min())/Py

log(x0+(x[3]-x.min())/sx)
log(x0+Px*(x[3]-x.min())/(x.max()-x.min()))
log(y0-(y[3]-y.min())/sy)
log(y0-Py*(y[3]-y.min())/(y.max()-y.min()))

ctx.webkitImageSmoothingEnabled = false
ctx.clearRect(0,0, canvas.width, canvas.height)

x0n=x0+Math.abs(x.min())/sx
ctx.moveTo(x0n, y0)
ctx.lineTo(x0n, y0-Py)
ctx.stroke();
  
y0n=y0-Math.abs(y.min())/sy
ctx.moveTo(x0, y0n)
ctx.lineTo(x0+Px, y0n)
ctx.stroke()

for (i=0; i<40; i++) {
    ctx.beginPath();
    ctx.arc(
        x0+(x[i]-x.min())/sx, 
        y0-(y[i]-y.min())/sy, 
        2, 0, Math.PI*2);
    ctx.fill();
}

for(i=0; i < 39; i++) {
    xa = x0 + (x[i] - x.min())/sx
    xb = x0 + (x[i+1] - x.min())/sx
    ya = y0 - (y[i] - y.min())/sy
    yb = y0 - (y[i+1] - y.min())/sy
    ctx.moveTo(xa, ya)
    ctx.lineTo(xb, yb)
    ctx.stroke()
}

Ip = Px/Dx; Jp = Py/Dy;

for(i = 1; i <= Ip; i++) {
   
    ctx.moveTo(x0+i*Dx, y0n)
    ctx.lineTo(x0+i*Dx, y0n+3)
    ctx.stroke()
    
    ctx.moveTo(x0n, y0-i*Dy)
    ctx.lineTo(x0n-3, y0-i*Dy)
    ctx.stroke()

    text = x.min() + i*Dx*sx
    text = text.toFixed(2)
    ctx.fillText(text, x0 + i*Dx - 10, y0n + 10)
    text = y.min() + i*Dy*sy
    text = text.toFixed(2)
    ctx.fillText(text, x0n - 50, y0 - Dy*i - 10)
}


