const sumLargestNumbers = function(data)
{
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < data.length; i++)
  {
    if (data[i] > num1)
    {
      num1 = data[i];
    }
  }
  console.log("num1: "+num1)
  for (let j = 0; j < data.length; j++)
  {
    if (data[j] > num2 && data[j] < num1)
      {
        num2 = data[j];
      }
  }
  console.log("num2: "+num2);
  return num1 + num2;
}
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));