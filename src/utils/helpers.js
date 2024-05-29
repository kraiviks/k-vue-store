export const filterItems = (allItems, cat, filters) => {
  let filteredItems = [...allItems]

  switch (filters.byPrice) {
    case 'cheap':
      filteredItems = filteredItems.sort((a, b) => a.price - b.price)
      break
    case 'expensive':
      filteredItems = filteredItems.sort((a, b) => b.price - a.price)
      break
    default:
      break
  }

  if (filters.searchQuery) {
    filteredItems = filteredItems.filter((item) =>
      item.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
    )
  }

  if (cat.toLowerCase() !== 'all') {
    filteredItems = filteredItems.filter((item) => item.category.includes(cat.toLowerCase()))
  }

  return filteredItems
}
