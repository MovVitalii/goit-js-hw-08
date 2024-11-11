const countCategories = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${countCategories}`);
const categories = document.querySelectorAll('.item');
categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;
  console.log(`Category: ${title}  Elements: ${itemsCount}`);
});
