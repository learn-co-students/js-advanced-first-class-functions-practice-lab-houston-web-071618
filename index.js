// Code your solution in this file!
const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];
const logDriverNames = function(drivers) {
drivers.forEach(function (driver) {
  console.log(driver.name)
})
}
// logs the name of each driver ‣

const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
    console.log(driver.name)
  }})
}
// logs the name of each driver whose hometown matches the passed-in argument ‣
// const numberSorter = function (num1, num2) {
//   return num1 - num2;
// };
//
// primes.sort(numberSorter);
// // => [2, 3, 5, 7, 13, 17]
//

const driversByRevenue = function(drivers) {
  let sorted_array = drivers.slice().sort(function (driverA, driverB) {
    return driverA.revenue - driverB.revenue
    })
    return sorted_array
}

// uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest) ‣
//
// guestList.sort(function (a, b) {
//   return a.localeCompare(b);
// });

const driversByName = function(drivers) {
  let sorted_array = drivers.slice().sort(function (driverA, driverB) {
    return driverA.name.localeCompare(driverB.name)
  })
  return sorted_array
}
// uses the sort() method to return a new array of drivers ordered alphabetically by name (A to Z) ‣

// const totalRevenue = function (drivers) {
//   let totalRevenue = 0
//
//   drivers.forEach(function (driver) {
//     totalRevenue += driver.revenue
//   })
//   return totalRevenue
// }

const totalRevenue = function(drivers) {
  let totalRevenue = drivers.reduce(function (agg, driver) {
    return agg + driver.revenue
  }, 0)
  return totalRevenue
}
// uses the reduce() method to sum the revenue of every driver and return the total ‣

const averageRevenue = function(drivers) {
  return totalRevenue(drivers)/drivers.length
}
// calculates the average revenue across all drivers ‣
