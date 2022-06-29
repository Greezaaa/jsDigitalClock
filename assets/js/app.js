

function hRegistro() {
    var today = new Date(); //today actual
    var h = today.getHours(); // convert 
    var m = today.getMinutes();
    var s = today.getSeconds();
    if (h < 10)
        h = '0' + h;
    if (m < 10)
        m = '0' + m
    if (s < 10)
        s = '0' + s
    document.getElementById('hour').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
}
setInterval('hRegistro()', 1000);