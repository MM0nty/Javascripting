for (let x = 100; x < 201; x++)
{
  if (x % 4 === 0 && x % 3 === 0)
  {
    console.log("LoopyLighthouse") ;
  }
  else if (x % 3 === 0)
  {
    console.log("Loopy");
  }
  else if (x % 4 === 0)
  {
    console.log("Lighthouse");
  }
  else
  {
    console.log(x);
  }
}

function loopyLighthouse(range, multiples, words)
{
  for (let num = range[0]; num <= range[1]; num++)
  {
    if (num % multiples[0] === 0 && num % multiples[1] === 0)
    {
      console.log(words[0] + words[1]);
    }
    else if (num % multiples[0] === 0)
    {
      console.log(words[0]);
    }
    else if (num % multiples[1] === 0)
    {
      console.log(words[1]);
    }
    else
    {
      console.log(num);
    }
  }
}