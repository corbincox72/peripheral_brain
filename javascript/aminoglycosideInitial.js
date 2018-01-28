function k() {
  return (0.0024 * crcl() + 0.01).toFixed(4);
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
