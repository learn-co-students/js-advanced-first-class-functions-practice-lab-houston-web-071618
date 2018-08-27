// Code your solution in this file!
const logDriverNames = (drivers) => {
  drivers.forEach( driver => {
    console.log(driver.name)
  })
}

const logDriversByHometown = (drivers, hometown ) => {
  drivers.forEach ( driver => {
    if (driver.hometown === hometown) {
      console.log(driver.name)
    }
  });
};

const driversByRevenue = (drivers) => {
  return drivers.slice().sort( (driverOne, driverTwo) => {
    if(driverOne.revenue < driverTwo.revenue){
      return -1
    } else if (driverOne.revenue > driverTwo.revenue){
      return 1
    } else {
      return 0
    }
  })
}
const driversByName = (drivers) => {
  return drivers.slice().sort( (driverOne, driverTwo) => {
    return driverOne.name.localeCompare(driverTwo.name)
  })
}

const totalRevenue = (drivers) => {
  return drivers.reduce( (total, currentDriver) => {
    return currentDriver.revenue + total;
  }, 0)
}

const averageRevenue = (drivers) => {
  return totalRevenue(drivers) / drivers.length
}
