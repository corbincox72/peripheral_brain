function k() {
  return (Math.log(ptPk()/ptTrough())/(ptTau()-ptInfTime())).toFixed(4);
}

function volume() {
  return (ptDose() * (1 - Math.exp(-1*k()*ptInfTime())) / (ptInfTime() * k() * (ptCmax() - (ptCmin() * Math.exp(-1*k()*ptInfTime())) ))).toFixed(1);
}

function ptCmax() {
  return (ptPk() / Math.exp(-1*k()*ptTimeToSample()));
}

function ptCmin() {
  return (ptTrough() * Math.exp(-1*k()*ptTroughMinInterval()));
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
