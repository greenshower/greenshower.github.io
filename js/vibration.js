// This is a JavaScript file
var vflag = 1;
function vibrate() {
    if(vflag == 1) {
        navigator.vibrate(1000);
    }
    if(vflag == 2) {
        navigator.vibrate(3000);
    }
    if(vflag == 3) {
        navigator.vibrate(5000);
    }
    vflag = vflag + 1;
    
    
}
