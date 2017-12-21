function k() {
  return (0.0024 * crcl() + 0.01).toFixed(4);
}


function crcl() {
  if (document.getElementById("crclCKDEpi").checked) {
    return ckdEpiBSA();
  } else if (document.getElementById("crclCG").checked){
    return cgCrCl();
  } else {
    return document.getElementById("customCrClEntry").value;
  }
}

function volumeWt() {
  if (wt() < ibw()) {
    return wt();
  } else if (wt()/ibw() >= 1.3 ) {
    return abw();
  } else {
    return ibw();
  }
}

function lowVolume() {
  return ((document.getElementById("lowVdkg").value) * volumeWt()).toFixed(1);
}

function highVolume() {
  return ((document.getElementById("highVdkg").value) * volumeWt()).toFixed(1);
}

function volume() {
  return document.getElementById("vd").value;
}

function tau() {
  return document.getElementById("tau").value;
}

function tauCalc() {
  var res = parseFloat(Math.log(cmaxD()/cminD()) / k()) + parseFloat(tinf());
  return res.toFixed(2);
}

function cpeakD() {
  return document.getElementById("cpeakD").value;
}

function cminD() {
  return document.getElementById("cminD").value;
}

function tinf() {
  return document.getElementById("tinf").value;
}

function timeToSample() {
  return document.getElementById("timeToSample").value;
}

function maintenanceDoseCalc() {
  return (cmaxD() * tinf() * volume() * k() * (1-Math.exp(-1*k()*tau())) / (1-Math.exp(-1*k()*tinf()))).toFixed(0);
}

function md() {
  return document.getElementById("md").value;
}

function cmaxE() {
  return (md() * (1-Math.exp(-1*k()*tinf())) / volume() / tinf() / k() / (1-Math.exp(-1*k()*tau()))).toFixed(1);;
}

function cpkE() {
  return (cmaxE() * Math.exp(-1*k()*timeToSample())).toFixed(1);;
}

function cminE() {
  return (cmaxE() * Math.exp(-1*k()*(tau() - tinf()))).toFixed(1);
}
