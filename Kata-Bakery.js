const chooseRecipe = function (bakeryA, bakeryB, recipes)
{
  let name = ""
  for (let i = 0; i < bakeryA.length; i++)
  {
    for (let j = 0; j < bakeryB.length; j++)
    {
      for (let k = 0; k < recipes.length; k++)
      {
        if (((recipes[k].ingredients[0]) === bakeryA[i]) && ((recipes[k].ingredients[1]) === bakeryB[j]))
        {
          name = recipes[k].name;
        }
        else if (((recipes[k].ingredients[1]) === bakeryA[i]) && ((recipes[k].ingredients[0]) === bakeryB[j]))
        {
          name = recipes[k].name;
        }
      }
    }
  }
    return name;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes =
[
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];
console.log(chooseRecipe(bakeryA, bakeryB, recipes));


bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes =
[
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];
console.log(chooseRecipe(bakeryA, bakeryB, recipes));