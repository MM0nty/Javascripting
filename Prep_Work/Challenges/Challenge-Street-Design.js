const carPassing = function (cars, speed)
{
  let car =
    {
      time: Date.now(),// Your code in here ...
      speed: speed
    };
  cars.push(car);
  return cars;
}