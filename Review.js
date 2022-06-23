const drivers = {
  AgF4g: { name: 'Daniel Ricciardo', team: 'Renault F1 Team', cars: ['Toyota Corolla 2018', 'BMW M3', "F1"] },
  FfE4c: { name: 'Lando Norris', team: 'McLaren', cars: ['DB8', 'CLK489', 'F1'] },
  Df4cf: { name: 'Sebastian Vettel', team: 'Ferrari', cars: ['BMW M3', 'F1'] },
  I4fTw: { name: 'Nicholas Latifi', team: 'Renault F1 Team', cars: ['F1'] },
  pT4vD: { name: 'Kimi Raikkonen', team: 'Alfa Romeo', cars: ['BMW M3', 'F1'] },
  RaMfV: { name: 'Romain Grosjean', team: 'Ferrari', cars: ['Opel Cadet'] },
}

//output should be ['Toyota Corolla 2018', 'BMW M3', "F1", 'DB8', 'CLK489', 'Opel Cadet']

//return array of cars, no duplicates
const function info(drivers) {
  let array = [];
  for (let driver in drivers) {
    let car = drivers[driver].cars;
    for (let c of car) {
      if (!array.includes(c)) {
        array.push(c);
      }
    }
  }
  return array;
}
