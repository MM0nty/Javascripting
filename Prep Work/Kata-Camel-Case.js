const camelCase = function(input)
{
  let newInput = "";// Your code here
  for (let i = 0; i < input.length; i++)
  {
    if (input[i] == " ")
    {
      newInput += input[i+1].toUpperCase();
      i++;
    }
    else
    {
      newInput += input[i];
    }
  }
  return newInput;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));