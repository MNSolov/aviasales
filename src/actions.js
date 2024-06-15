export function setFiltersShowAll() {
  return { type: 'SHOW_ALL' }
}

export function setFiltersWithotTransfers() {
  return { type: 'WITHOUT_TRANSFERS' }
}

export function setFiltersOneTransfer() {
  return { type: '1_TRANSFER' }
}

export function setFiltersTwoTransfer() {
  return { type: '2_TRANSFER' }
}

export function setFiltersThreeTransfer() {
  return { type: '3_TRANSFER' }
}

export function setSortCheapest() {
  return { type: 'SET_CHEAPEST' }
}

export function setSortFastest() {
  return { type: 'SET_FASTEST' }
}

export function setSortOptimum() {
  return { type: 'SET_OPTIMUM' }
}
