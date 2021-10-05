function p1() {
  document.getElementById("display").innerHTML += "1"
}
function p2() {
  document.getElementById("display").innerHTML += "2"
}
function p3() {
  document.getElementById("display").innerHTML += "3"
}
function p4() {
  document.getElementById("display").innerHTML += "4"
}
function p5() {
  document.getElementById("display").innerHTML += "5"
}
function p6() {
  document.getElementById("display").innerHTML += "6"
}
function p7() {
  document.getElementById("display").innerHTML += "7"
}
function p8() {
  document.getElementById("display").innerHTML += "8"
}
function p9() {
  document.getElementById("display").innerHTML += "9"
}
function pplus() {
  document.getElementById("display").innerHTML += "+"
}
function psub() {
  document.getElementById("display").innerHTML += "-"
}
function pdiv() {
  document.getElementById("display").innerHTML += "\\"
}
function pmul() {
  document.getElementById("display").innerHTML += "*"
}
function pent() {
  document.getElementById("display").innerHTML += "("
}
function pexit() {
  document.getElementById("display").innerHTML += ")"
}
function pex() {
  document.getElementById("display").innerHTML += "^"
}
function proot() {
  document.getElementById("display").innerHTML += "√"
}
function pgo() {
  formula = document.getElementById("display").innerHTML
  solve(formula)
}
function pabs() {
  document.getElementById("display").innerHTML += "|"
}
function pclear() {
  document.getElementById("display").innerHTML = ""
  n = 0
}
function pback() {
  document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.slice(0,-1)
}
function solve(f) {
  //f = "(" + f + ")";
  a = f.replace(/\)/g,"#");
  a = a.replace(/\(/g,"#");
  a = a.split("#");
  //alert(a)
  a.forEach((item, i) => {
    solve2(item);
  });

}
var n
n = 0
function solve2(i) {
  i = i.replace(/\+/g,"#+");
  i = i.replace(/\-/g,"#-");
  i = i.replace(/\*/g,"#*");
  i = i.replace(/\\/g,"#\\");
  i = i.replace(/\√/g,"#√");
  i = i.replace(/\^/g,"#^");
  ia = i.split("#");
  ia.forEach((item, i) => {
    op = item[0];
    switch (op) {
      case "+":
        //alert("+"+item.slice(1));
        n += Number(item.slice(1));
        break;
      case "*":
        //alert("+"+item.slice(1));
        n = n * Number(item.slice(1));
        break;
      case "-":
        //alert("+"+item.slice(1));
        n -= Number(item.slice(1));
        break;
      case "\\":
        //alert("+"+item.slice(1));
        n = n / Number(item.slice(1));
        break;
      case "^":
        alert("^ "+item.slice(1));
        n = Math.pow( n , Number(item.slice(1)) );
        break;
      case "√":
        //alert("+"+item.slice(1));
        n = nthroot( Number(item.slice(1)) , n );
        break;
      default:
        //alert("set "+item.slice(0));
        n += Number(item.slice(0));
    }
  });
  document.getElementById("display").innerHTML = n
  n = 0
}

function nthroot(x, n) {
  try {
    var negate = n % 2 == 1 && x < 0;
    if(negate)
      x = -x;
    var possible = Math.pow(x, 1 / n);
    n = Math.pow(possible, n);
    if(Math.abs(x - n) < 1 && (x > 0 == n > 0))
      return negate ? -possible : possible;
  } catch(e){}
}
