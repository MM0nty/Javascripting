function calculateRectangleArea(length, width)
{
  let rectangle = length * width;
  if (rectangle < 0)
  {
    return rectangle = undefined;
  }
  return rectangle;
}


function calculateTriangleArea(base, height)
{
  let triangle = base * height / 2;
  if (triangle < 0)
  {
    return triangle = undefined;
  }
  return triangle;
}


function calculateCircleArea(radius)
{
  let circle = Math.PI * (radius * radius);
  if (circle < 0)
  {
    return circle = undefined;
  }
  return circle;
}
