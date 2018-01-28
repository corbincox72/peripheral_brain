/* Non-Pharmacy Functions */
function printResult(id,func) {
  document.getElementById(id).innerHTML = func;
}

/* Basic Pharmacokinetics */
function halfLife() {
  return (Math.log(2)/k()).toFixed(2);
}

function cmaxD() {
  return cpeakD() / Math.exp(-1*k()*timeToSample())
}

/* Weights */
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
