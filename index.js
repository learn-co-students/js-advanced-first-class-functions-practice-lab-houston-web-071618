// Code your solution in this file!

function logDriverNames(arrayOfDrivers) {
  arrayOfDrivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(arrayOfDrivers, location) {
  arrayOfDrivers.forEach(function (driver) {
    if(driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(arrayOfDrivers) {
  let newArrayOfDrivers = [...arrayOfDrivers]

  return newArrayOfDrivers.sort(function(a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(arrayOfDrivers) {
  let newArrayOfDrivers = [...arrayOfDrivers]

  return newArrayOfDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(arrayOfDrivers) {
  let newArrayOfDrivers = [...arrayOfDrivers]

  return newArrayOfDrivers.reduce(function (acc, currentDriver) {
    return acc + currentDriver.revenue;
  }, 0)
}

function averageRevenue(arrayOfDrivers) {
  let newArrayOfDrivers = [...arrayOfDrivers]

  return totalRevenue(newArrayOfDrivers) / newArrayOfDrivers.length
}
