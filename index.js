// Code your solution in this file!
// logDriverNames() — Receives an array of driver objects and logs the name attribute of each driver to the console.
// logDriversByHometown() — Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.
// driversByRevenue() — Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.
// driversByName() — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.
// totalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.
// averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.

const logDriverNames = function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  })
}

const logDriversByHometown = function(drivers,town){
  drivers.forEach(function(driver){
    if (driver.hometown === town){
      console.log(driver.name);
    }
  })
}

const driversByRevenue = function(drivers){
  let newArray = drivers.slice(0);
  newArray.sort(function(a,b){
    return a.revenue - b.revenue;
  })
  return newArray;
}

const driversByName = function(drivers){
  let newArray = drivers.slice(0);
  newArray.sort(function(a,b){
    return a.name.localeCompare(b.name);
  })
  return newArray;
}

const totalRevenue = function(drivers){
  return drivers.reduce(function(total, driver){
    return total + driver.revenue;
  }, 0)
}

const averageRevenue = function(drivers){
  return totalRevenue(drivers)/drivers.length;
  }
