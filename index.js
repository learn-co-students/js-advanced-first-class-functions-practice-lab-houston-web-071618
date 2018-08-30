// Code your solution in this file!
const logDriverNames = drivers =>
  drivers.forEach(driver => console.log(driver.name));

const logDriversByHometown = (drivers, hometown) =>
  drivers.forEach(driver => {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });

const driversByRevenue = drivers =>
  drivers
    .slice()
    .sort((driverOne, driverTwo) => driverOne.revenue - driverTwo.revenue);

const driversByName = drivers =>
  drivers
    .slice()
    .sort((driverOne, driverTwo) =>
      driverOne.name.localeCompare(driverTwo.name)
    );

const totalRevenue = drivers =>
  drivers.reduce((total, currentDriver) => currentDriver.revenue + total, 0);

const averageRevenue = drivers => totalRevenue(drivers) / drivers.length;
