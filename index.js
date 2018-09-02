// Code your solution in this file!

const driver = [
    { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
    { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
    { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
    { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
    { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
  ];

function logDriverNames(driver) {
	driver.forEach(function(driver) {
		console.log(driver.name);
	});
}

function logDriversByHometown(driver, location) {
	driver.forEach(function(driver) {
		if (location === driver.hometown) {
		console.log(driver.name);
	}
	});
}

function driversByRevenue(driver) {
	return driver.slice().sort(function(a, b) {
		return a.revenue - b.revenue;
	});
}

function driversByName(driver) {
	return driver.slice().sort((a, b) => (a.name).localeCompare(b.name)) 
	};

function totalRevenue(driver) {
	return driver.reduce(function(agg, driver) {
		return driver.revenue + agg;
	}, 0);
}

function averageRevenue(driver) {
	total = totalRevenue(driver)
	return (total / driver.length);
}