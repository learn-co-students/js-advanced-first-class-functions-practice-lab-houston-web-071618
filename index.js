// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function(driver){
    console.log(driver.name)
  });
};
const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};
const driversByRevenue = function (drivers) {
    // console.log(drivers) why use .slice()?
    return drivers.slice(0).sort(function (driverA, driverB) {
      return driverA.revenue - driverB.revenue;
    });//.slice(0)expression creates a copy of the array starting at element 0; as does .slice()
};
const driversByName  = function(drivers) {
  return drivers.slice(0).sort(function (driverA, driverB) {
      return driverA.name.localeCompare(driverB.name);
  });//.slice(0)expression creates a copy of the array starting at element 0; as does .slice()
};
const totalRevenue = function(drivers) {
  return drivers.reduce(function (total, currentDriver){
    return currentDriver.revenue + total;
  }, 0); //initial value passed as second argument
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers)/drivers.length
};//use previous code as already have total
