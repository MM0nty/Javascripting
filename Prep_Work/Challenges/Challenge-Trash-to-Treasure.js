const smartGarbage = function (trash, bins)
{
  const keys = Object.keys(bins)
  for (let i of keys)
  {
    if (i == trash)
    {
      bins[i]++;
    }
  }
  return (bins);
}