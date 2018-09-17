
function produceDrivingRange(ran) {
  return function(start, end){
    let num = Math.abs(parseInt(start) - parseInt(end))
    if(num > ran){
      return `${Math.abs(ran - num)} blocks out of range`
    }
    else {
      return `within range by ${num}`
    }
  }

}

function produceTipCalculator(percent) {
  return function(tip){
    return percent * tip
  }
}

function createDriver() {
  let Id = 0
  return class{
    constructor(name) {
      this.name = name;
      this.id = ++Id;
    }
  }
}
