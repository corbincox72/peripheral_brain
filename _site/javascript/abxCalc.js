function updateAll() {
  hideExtra();
  updateOutputs();
}

function changeCrCL() {
  document.getElementById("enteredCrCl").selected = true;
}

//Box I/O
function push(num,id,l){
  document.getElementById(id).innerHTML = parseFloat(num).toFixed(l);
}

function pushText(text,id){
  document.getElementById(id).innerHTML = text;
}

function pullText(id){
  return parseFloat(document.getElementById(id).value);
}

function pullDropdown(id){
  var x = document.getElementById(id).selectedIndex;
  return (document.getElementById(id).options[x].value);
}

// Page Functions and Housekeeping
function hideExtra() {
  var input = pullDropdown("dosingI")
  if (input == "aminoI" || input == "vancI"){
    $('.peakTrough').hide();
    $('.initialOnly').show();
  } else {
    $('.peakTrough').show();
    $('.initialOnly').hide();
  }
  if (input == "vancI" || input == "vancPT") {
    $('.vancOnly').show();
  } else {
    $('.vancOnly').hide();
  }
  if (input == "aminoI") {
    $('.aminoInitialOnly').show();
  } else {
    $('.aminoInitialOnly').hide();
  }
  if (input == "vancI") {
    $('.vancInitialOnly').show();
  } else {
    $('.vancInitialOnly').hide();
  }

}

function updateOutputs() {
  push(ibw(),"ibwO",1);
  push(adjbw(),"adjbwO",1);
  push(bmi(),"bmiO",1);
  push(bsa(),"bsaO",2);
  push(cgcrcl(),"crclCO",0);
  push(crcl(),"crclUO",0);
  push(k(),"kO",4);
  pushText(vdr(),"vdrO");
  push(vd(),"vdO",1);
  push(tinf(),"tinfO",2)
  push(tauC(),"tauEO",1);
  push(mdC(),"mdEO",1);
  push(tau(),"tauCO",1);
  push(md(),"mdCO",1);
  push(cmaxDC(),"cmaxO",1);
  push(cminDC(),"cminO",1);
  push(auc(),"aucO",1);
}

//Wts and CrCl
function ibw() {
  if (sex() == "f") {
    return 45.5 + 2.3 * (ht() - 60);
  } else {
    return 50 + 2.3 * (ht() - 60);
  }
}

function adjbw() {
  return ibw() + 0.4 * (wt()-ibw());
}

function bsa() {
  return Math.sqrt(ht() * wt() * 2.205 / 3131);
}

function bmi() {
  return (703*wt()*2.205)/(ht()*ht());
}

function lbw() {
  if (sex() == "f") {
    return (9270 * wt()) / (8780 + 244*bmi());
  } else {
    return (9720*wt()) / (6680+216*bmi());
  }
}

function dwt() {
  var x = pullDropdown("dosingI");
  if (x == "vancI" || x == "vancPT") {
    return wt();
  } else {
    if (wt() < ibw()) {
      return wt();
    } else if (wt()/ibw() > 1.3) {
      return adjbw();
    } else {
      return ibw();
    }
  }
}

function crclWt(ht,gender) {
  if (wt() < ibw()) {
    return wt();
  } else if (bmi() > 40){
    return lbw();
  } else {
    return ibw();
  }
}

function cgcrcl(){
  if (sex() == "f"){
    return ((140-age())*crclWt())*0.85 / (scr() * 72);
  } else {
    return ((140-age())*crclWt()) / (scr() * 72);
  }
}

function crcl() {
  if (pullDropdown("crclI") == "entered") {
    return parseFloat(pullText("crclEI"));
  } else {
    return cgcrcl();
  }
}

//PK Calculations
function k() {
  var x = pullDropdown("dosingI")
  if (x == "aminoI") {
    return aminok();
  } else if (x == "vancI") {
    return vanck();
  } else {
    return kcalc();
  }
}

function vd() {
  var x = pullDropdown("dosingI")
  if (x == "aminoI") {
    return dvd();
  } else if (x == "vancI") {
    return dvd();
  } else {
    return vdcalc();
  }
}

function halflife() {
  return Math.log(2)/k();
}

function pkCalc(c1,k,dt) {
  return Math.exp(-1*k*dt)*c1;
}

function cmax(pk,t,k) {
  return pk * Math.exp(k*t);
}

function cmin(tr,t,k) {
  return tr * Math.exp(-1*k*t);
}

function kcalc() {
  return (Math.log(ptpk()/pttr())/ptint());
}

function vdcalc() {
  return (currentDose()*(1.0-Math.exp(-1*k()*currenttinf())))/(currenttinf()*k()*(ptmax()-(ptmin()*Math.exp(-1*k()*currenttinf()))));
}

function aminok() {
  return 0.0024*crcl()+0.01;
}

function aminovd() {
  return (0.3*dwt()).toFixed(1) + "-" + (0.35*dwt()).toFixed(1);
}

function vanck() {
  return 0.00083 * crcl() + 0.0044;
}

function vancvd() {
  return (0.6*dwt()).toFixed(1) + "-" + (0.7*dwt()).toFixed(1);
}

function vdr() {
  var x = pullDropdown("dosingI");
  if (x == "vancI") {
    return vancvd();
  } else {
    return aminovd();
  }
}

function tauC() {
  return parseFloat(Math.log(dpk()/dtr())/k()) + parseFloat(tinf());
}

function mdC(){
  return (dpk()*tinf()*vd()*k()*(1-Math.exp(-1*k()*tau())))/(1-Math.exp(-1*k()*tinf()));
}

function cmaxDC(){
  return (md()*(1-Math.exp(-1*k()*tinf())))/(tinf()*vd()*k()*(1-Math.exp(-1*k()*tau())));
}

function cminDC() {
  return cmaxDC()*Math.exp(-1*k()*(tau()-tinf()));
}

function auc() {
  return ((cmaxDC() + cminDC())*tinf()/2 + (cmaxDC()-cminDC())/k())*(24/tau());
}


//Pulled Parameters

function ht(){
  return pullText("htI");
}

function wt(){
  return pullText("wtI");
}

function sex() {
  return pullDropdown("sexI");
}

function age(){
  return pullText("ageI");
}

function scr(){
  return pullText("scrI");
}

function dvd(){
  return pullText("vdI");
}

function ptpk() {
  return pullText("ptpkI");
}

function ptmax() {
  return cmax(ptpk(),mpint(),k());
}

function pttr() {
  return pullText("pttrI");
}

function ptmin(){
  return cmin(pttr(),tmint(),k());
}

function mpint(){
  return pullText("mpintI");
}

function tmint() {
  return pullText("tmintI");
}

function ptint() {
  return pullText("ptintI");
}

function currentDose() {
  return pullText("currentDoseI");
}

function currentInterval(){
  return pullText("currentIntervalI");
}

function dpk() {
  return pullText("dpkI");
}

function dtr(){
  return pullText("dtrI");
}

function currenttinf(){
  return pullText("currenttinfI");
}

function tau() {
  return pullText("tauI");
}

function md() {
  return pullText("mdI");
}

function tinf() {
  return pullText("tinfI");
}
