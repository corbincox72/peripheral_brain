function k() {
  return (Math.log(ptPk()/ptTrough())/(ptTau()-ptInfTime()-ptTimeToSample())).toFixed(4);
}

function volume() {
  return (ptDose() * (1 - Math.exp(-1*k()*ptInfTime())) / (ptInfTime() * k() * (ptCmax() - (ptCmin() * Math.exp(-1*k()*ptInfTime())) ))).toFixed(1);
}

function volumeWt() {
    return wt();
}

function ptCmax() {
  return (ptPk() / Math.exp(-1*k()*ptTimeToSample()));
}

function ptCmin() {
  return (ptTrough() * Math.exp(-1*k()*ptTroughMinInterval()));
}
