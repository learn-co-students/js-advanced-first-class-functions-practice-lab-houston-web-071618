// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

const logDriversByHometown = function(drivers, loc) {
  drivers.forEach(function(driver) {
    if (loc == driver.hometown) {
    console.log(driver.name)}
  })
}

const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function(dr1, dr2) {
    return dr1.revenue - dr2.revenue
  })
}

const driversByName = function(drivers) {
  let newdr = drivers.slice();
  return newdr.sort(function(driver1, driver2) {
    return driver1.name.localeCompare(driver2.name)
  })
}

const totalRevenue = function(drivers) {
  return drivers.reduce(function(total, driver) {
    return total += driver.revenue
  }, 0)
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers)/(drivers.length)
  }
