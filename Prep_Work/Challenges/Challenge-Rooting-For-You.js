const judgeVegetable = function (vegetables, metric)
{
  let best = 0;
  let winner;
  for (let i = 0; i < vegetables.length; i++)
  {
    if (vegetables[i][metric] > best)
    {
      best = vegetables[i][metric];
      winner = vegetables[i].submitter;
    }
  }
  return winner;// Your code in here ...
};