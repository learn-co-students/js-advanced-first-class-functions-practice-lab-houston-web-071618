// Code your solution in this file!
function logDriverNames(driversArray) {
  const printName = name => console.log(name)
  driversArray.forEach(driver => printName(driver.name))
}

function logDriversByHometown(driversArray, location) {
  driversArray.forEach(driver => driver.hometown == location ? console.log(driver.name) : "nil")
}

function driversByRevenue(driversArray) {
  copiedArray = driversArray.slice()
  return copiedArray.sort((a,b) => a.revenue - b.revenue)
}

function driversByName(driversArray) {
  copiedArray = driversArray.slice()
  return copiedArray.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase())
}

function totalRevenue(driversArray) {
  return driversArray.reduce((driverSum, driver) => {
    return driverSum += driver.revenue
  }, 0)
}

function averageRevenue(driversArray) {
  return totalRevenue(driversArray) / driversArray.length
}