const { animals, employees, hours, prices } = require('./data');

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce((totalPrice, category) => {
    return totalPrice + (entrants[category] * prices[category]);
  }, 0);
}

function schedule(dayName) {
  const humanReadableSchedule = {
    Monday: 'CLOSED',
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm'
  };

  if (dayName) {
    return { [dayName]: humanReadableSchedule[dayName] };
  } else {
    return humanReadableSchedule;
  }
}

function animalCount(species) {
  if (species) {
    const animal = animals.find(animal => animal.name === species);
    return animal ? animal.residents.length : 0;
  } else {
    const animalCounts = {};

    // Contar cada especie de animal
    animals.forEach(animal => {
      animalCounts[animal.name] = animal.residents.length;
    });

    return animalCounts;
  }
}

function animalMap(options = {}) {
  const { includeNames = false, sex } = options;
  const animalsByLocation = {};

  animals.forEach(animal => {
    if (!animalsByLocation[animal.location]) {
      animalsByLocation[animal.location] = [];
    }

    const residents = sex ? animal.residents.filter(resident => resident.sex === sex) : animal.residents;
    
    if (includeNames) {
      const animalDetails = {};
      animalDetails[animal.name] = residents.map(resident => resident.name);
      animalsByLocation[animal.location].push(animalDetails);
    } else {
      animalsByLocation[animal.location].push(animal.name);
    }
  });

  return animalsByLocation;
}

function animalPopularity(rating) {
  const popularityGroups = {};

  // Agrupar animals por popularity
  animals.forEach(animal => {
    const popularity = animal.popularity;
    if (!popularityGroups[popularity]) {
      popularityGroups[popularity] = [];
    }
    popularityGroups[popularity].push(animal.name);
  });

  // Odenar la  popularity agrupadas por valor numérico en orden ascendente
  const sortedGroups = Object.fromEntries(
    Object.entries(popularityGroups).sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
  );

  // Si un rating es proveido, regreso animals con ese rating
  if (rating !== undefined) {
    return sortedGroups[rating] || [];
  }

  return sortedGroups;
}

function animalsByIds(ids) {
  if (!ids) return [];
  
  if (typeof ids === 'string') {
    return animals.filter(animal => animal.id === ids);
  } else if (Array.isArray(ids)) {
    return animals.filter(animal => ids.includes(animal.id));
  } else {
    return [];
  }
}

function animalByName(animalName) {
  if (!animalName) return {};

  for (const animal of animals) {
    for (const resident of animal.residents) {
      if (resident.name === animalName) {
        return {
          name: resident.name,
          sex: resident.sex,
          age: resident.age,
          species: animal.name
        };
      }
    }
  }

  return {};
}

function employeesByIds(ids) {
  if (!ids) return [];

  if (!Array.isArray(ids)) {
    const employee = employees.find(employee => employee.id === ids);
    return employee ? [employee] : [];
  }

  return employees.filter(employee => ids.includes(employee.id));
}


function employeeByName(employeeName) {
  if (!employeeName) return {};

  const employee = employees.find(emp => emp.firstName === employeeName || emp.lastName === employeeName);

  return employee || {};
}


function managersForEmployee(idOrName) {
  let employee;
  if (typeof idOrName === 'string') {
    employee = employees.find(emp => emp.id === idOrName || emp.firstName === idOrName || emp.lastName === idOrName);
  }

  if (!employee) return {};

  const managers = employee.managers.map(managerId => {
    const manager = employees.find(emp => emp.id === managerId);
    return `${manager.firstName} ${manager.lastName}`;
  });

  return {
    id: employee.id,
    firstName: employee.firstName,
    lastName: employee.lastName,
    managers: managers,
    responsibleFor: employee.responsibleFor
  };
}


function employeeCoverage(idOrName) {
  const coverage = {};

  if (!idOrName) {
    employees.forEach(employee => {
      const employeeName = `${employee.firstName} ${employee.lastName}`;
      coverage[employeeName] = [];
      employee.responsibleFor.forEach(animalId => {
        const animal = animals.find(animal => animal.id === animalId);
        coverage[employeeName].push(animal.name);
      });
    });
  } else {
    let employee;
    if (typeof idOrName === 'string') {
      employee = employees.find(emp => emp.id === idOrName || emp.firstName === idOrName || emp.lastName === idOrName);
    }

    if (!employee) return {};

    const employeeName = `${employee.firstName} ${employee.lastName}`;
    coverage[employeeName] = [];
    employee.responsibleFor.forEach(animalId => {
      const animal = animals.find(animal => animal.id === animalId);
      coverage[employeeName].push(animal.name);
    });
  }

  return coverage;
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
