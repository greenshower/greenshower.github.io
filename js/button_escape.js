var flag = 1;
function escape() {
  if(flag == 1) {
    escape_btn.style.top = "150px";
    escape_btn.style.left = "60%";
  }
  if(flag == 2) {
    escape_btn.style.top = "100px";
    escape_btn.style.left = "10%";
  }
  if(flag == 3) {
    escape_btn.style.top = "100px";
    escape_btn.style.left = "50%";
  }
  if(flag == 4) {
    escape_btn.style.top = "200px";
    escape_btn.style.left = "10%";
  }
  flag = flag + 1;
}
