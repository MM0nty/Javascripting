const drivers = {
  AgF4g: { name: 'Daniel Ricciardo', team: 'Renault F1 Team', cars: ['Toyota Corolla 2018', 'BMW M3', "F1"] },
  FfE4c: { name: 'Lando Norris', team: 'McLaren', cars: ['DB8', 'CLK489', 'F1'] },
  Df4cf: { name: 'Sebastian Vettel', team: 'Ferrari', cars: ['BMW M3', 'F1'] },
  I4fTw: { name: 'Nicholas Latifi', team: 'Renault F1 Team', cars: ['F1'] },
  pT4vD: { name: 'Kimi Raikkonen', team: 'Alfa Romeo', cars: ['BMW M3', 'F1'] },
  RaMfV: { name: 'Romain Grosjean', team: 'Ferrari', cars: ['Opel Cadet'] },
}

//Create a function that will print out a list of the cars, with no duplicates
//output should be ['Toyota Corolla 2018', 'BMW M3', "F1", 'DB8', 'CLK489', 'Opel Cadet']

//return array of cars, no duplicates
const function info(drivers) {
  //create empty array
  let array = [];
  //loop through drivers object
  for (let driver in drivers) {
    //create shortcut variable for object (instead of always typing "drivers[driver].cars"
    let car = drivers[driver].cars;
    //loop through car array
    for (let c of car) {
      if (!array.includes(c)) {
        //if c doesn't exist, push c into array
        array.push(c);
      }
    }
  }
  return array;
}
