const calculateChange = function(total, cash)
{
  let change = cash - total;
  let currency =
  [
    {name: "twenty", value: 2000, amount: 0},
    {name: "ten", value: 1000, amount: 0},
    {name: "five", value: 500, amount: 0},
    {name: "toonie", value: 200, amount: 0},
    {name: "loonie", value: 100, amount: 0},
    {name: "quarter", value: 25, amount: 0},
    {name: "dime", value: 10, amount: 0},
    {name: "nickel", value: 5, amount: 0},
    {name: "penny", value: 1, amount: 0}
  ];
  let money = {};
  for (let i = 0; i < currency.length; i++)
  {
    while (change >= currency[i].value)
    {
      change -= currency[i].value;
      currency[i].amount++;
      money[currency[i].name] = currency[i].amount;
    }
  }
 return money; 
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));