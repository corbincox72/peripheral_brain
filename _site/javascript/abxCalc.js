function updateAll() {
  hideExtra();
  updateOutputs();
  updateTable();
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
  push(halflife(),"t12O",1);
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

function tinfTable(){
  if (dose() == 1000) {
    return 1;
  } else if (dose() == 1250) {
    return 1.5;
  } else if (dose() == 1500) {
    return 1.5;
  } else if (dose() == 1750) {
    return 2;
  } else {
    return 2;
  }
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

// Table Functions
function tinfTable(dose){
  if (dose == 1000) {
    return 1;
  } else if (dose == 1250) {
    return 1.5;
  } else if (dose == 1500) {
    return 1.5;
  } else if (dose == 1750) {
    return 2;
  } else {
    return 2;
  }
}

function cmaxTable(dose,tau) {
  return dose*(1-Math.exp(-1*k()*tinfTable(dose))) / (tinfTable(dose) * vd() * k() * (1-Math.exp(-1*k()*tau)));
}

function cminTable(dose,tau) {
  return cmaxTable(dose,tau) * Math.exp(-1*k()*(tau - tinfTable(dose)));
}

function aucTable(dose,tau) {
  return ((24/tau) * ((cmaxTable(dose,tau) + cminTable(dose,tau))*tinfTable(dose)/2 + ((cmaxTable(dose,tau) - cminTable(dose,tau))/k())));
}

function stitchCell(dose, tau) {
  var x = cmaxTable(dose,tau).toFixed(1);
  var y = cminTable(dose,tau).toFixed(1);
  var z = aucTable(dose,tau).toFixed(0)
  return x + " / " + y + " <br /> " + z;
}

function updateTableCell(dose,tau,id) {
  pushText(stitchCell(dose,tau),id);
  if (aucTable(dose,tau) >= 400 && aucTable(dose,tau) <= 600) {
    document.getElementById(id).setAttribute("style", "background-color:rgba(0, 255, 0, 0.3);");
  } else {
    document.getElementById(id).setAttribute("style", "background-color:rgba(255, 0, 0, 0.3);");
  }
}

function updateTable() {
  updateTableCell(1000,8,'1q8');
  updateTableCell(1250,8,'125q8');
  updateTableCell(1500,8,'15q8');
  updateTableCell(1750,8,'175q8');
  updateTableCell(2000,8,'2q8');

  updateTableCell(1000,12,'1q12');
  updateTableCell(1250,12,'125q12');
  updateTableCell(1500,12,'15q12');
  updateTableCell(1750,12,'175q12');
  updateTableCell(2000,12,'2q12');

  updateTableCell(1000,18,'1q18');
  updateTableCell(1250,18,'125q18');
  updateTableCell(1500,18,'15q18');
  updateTableCell(1750,18,'175q18');
  updateTableCell(2000,18,'2q18');

  updateTableCell(1000,24,'1q24');
  updateTableCell(1250,24,'125q24');
  updateTableCell(1500,24,'15q24');
  updateTableCell(1750,24,'175q24');
  updateTableCell(2000,24,'2q24');

  updateTableCell(1000,36,'1q36');
  updateTableCell(1250,36,'125q36');
  updateTableCell(1500,36,'15q36');
  updateTableCell(1750,36,'175q36');
  updateTableCell(2000,36,'2q36');

  updateTableCell(1000,48,'1q48');
  updateTableCell(1250,48,'125q48');
  updateTableCell(1500,48,'15q48');
  updateTableCell(1750,48,'175q48');
  updateTableCell(2000,48,'2q48');
}
