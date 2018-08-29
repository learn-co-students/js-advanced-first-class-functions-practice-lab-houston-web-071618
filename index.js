// Code your solution in this file!

function logDriverNames(drivers){
  drivers.forEach(function (driver){
    console.log(driver.name);
  });

}

function logDriversByHometown(drivers, arg){
  drivers.forEach(function (driver){
    if(driver.hometown === arg){
      console.log(driver.name)
    }
  });
}

const driversByRevenue = function(drivers){
  return drivers.slice().sort( function (driver1, driver2){
    return driver1.revenue - driver2.revenue;
  });
}

const driversByName = function(drivers){
  return drivers.slice().sort(function (driver1, driver2){
    return driver1.name.localeCompare(driver2.name)
  });
}

function totalRevenue(drivers){
  return drivers.reduce(function (total, driver){
    return driver.revenue+total;
  },0);
};

function averageRevenue(drivers){
  totalRevenue = totalRevenue(drivers)
  return totalRevenue/drivers.length
};
