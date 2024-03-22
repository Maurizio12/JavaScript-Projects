function call_Loop () {
    var loops = "" ;
    var X = 1;
    while (X < 10) {
        loops += +X; X++;
    }       
    document.getElementById ("loop").innerHTML = loops;
}