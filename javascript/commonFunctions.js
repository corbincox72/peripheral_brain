/* Non-Pharmacy Functions */
function printResult(id,func) {
  document.getElementById(id).innerHTML = func;
}

/* Common Variables */

function wt() {
  return document.getElementById("wt").value;
}

function ht() {
  return document.getElementById("ht").value;
}

function age() {
  return document.getElementById("age").value;
}

function scr() {
  return document.getElementById("scr").value;
}

function sex() {
  if (document.getElementById("sexF").checked === true) {
    return "F";
  } else {
    return "M";
  }
}

function race() {
  if (document.getElementById("raceAA").checked == true) {
    return "AA";
  } else {
    return "W";
  }
}


/* Body Weights */

function ibw() {
  if (sex() == "F") {
    return Math.max(0,(45.5 + 2.3 * (ht()-60)).toFixed(1));
  } else {
    return Math.max(0,(50 + 2.3 * (ht()-60)).toFixed(1));
  }
}

function lbw() {
  if (sex() == "M") {
    return (9270 * wt() / (216 * bmi() + 6680)).toFixed(1);
  } else {
    return (9270 * wt() / (244 * bmi() + 8780)).toFixed(1);
  }
}

function bmi() {
  return (wt() * 2.205 / ht() / ht() * 703).toFixed(1);
}

function abw() {
  return (ibw() + 0.4*(wt()-ibw())).toFixed(1);
}

function renalWeight() {
  if (wt() / ibw() >= 1.3) {
    return lbw();
  } else if (wt() > ibw()){
    return ibw();
  } else {
    return wt();
  }
}

function renalWeightUsed() {
  if (wt() / ibw() >= 1.3) {
    return "LBW";
  } else if (wt() > ibw()){
    return "IBW";
  } else {
    return "Wt";
  }
}

function bsa() {
  return Math.sqrt((ht() * wt() * 2.205) / 3131).toFixed(2);
}

/* Renal Function */

function cgCrCl() {
  if (sex() == "F") {
    return ((140-age())*renalWeight()/72/scr()*0.85).toFixed(0);
  } else {
    return ((140-age())*renalWeight()/72/scr()).toFixed(0);
  }
}

function ckdEpi() {
  if (sex() == "M") {
    var k = 0.9;
    var a = -0.411;
    var sexMultiplier = 1;
  } else {
    var k = 0.7;
    var a = -0.329;
    var sexMultiplier = 1.018;
  }

  if (race() == "AA") {
    var raceMultiplier = 1.159;
  } else {
    var raceMultiplier = 1;
  }

  return (141 * Math.pow(Math.min(1,scr()/k),a) * Math.pow(Math.max(1,scr()/k),-1.209) * Math.pow(0.993,age()) * sexMultiplier * raceMultiplier).toFixed(0) ;

}

function ckdEpiBSA() {
  return (ckdEpi() * bsa() / 1.73).toFixed(0);
}
