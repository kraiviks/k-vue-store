export const filterItems = (allItems, cat) => {
  if (cat.toLowerCase() === 'all') {
    return allItems
  } else {
    return allItems.filter((item) => item.category.includes(cat.toLowerCase()))
  }
}
