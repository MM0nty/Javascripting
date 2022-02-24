function lastIndexOf(array, value)
{
  let match = false;
  let target = 0;
  if (array.length <= 0)
  {
    return -1;
  }
  else
  {
    for (let i = array.length - 1; i >= 0; i--)
    {
      if (array[i] == value)
      {
        match = true;
        target = i;
        break;
      }
    }
    if (match === true)
    {
      return target;
    }
    else
    {
      return -1;
    }
  }
}