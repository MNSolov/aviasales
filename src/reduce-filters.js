const initialState = {
  filters: {
    showAll: true,
    showWithoutTransfers: false,
    showOneTransfer: true,
    showTwoTransfers: true,
    showThreeTransfers: true,
  },
  tabs: { sortChepeast: true, sortFastest: false, sortOptimum: false },
}

export default function reduceFilters(state, action) {
  if (typeof state === 'undefined') return initialState

  let resultFilters = {}
  Object.assign(resultFilters, state.filters)
  let resultTabs = {}
  Object.assign(resultTabs, state.tabs)

  if (action.type === 'SHOW_ALL')
    resultFilters = {
      showAll: !resultFilters.showAll,
      showWithoutTransfers: resultFilters.showAll,
      showOneTransfer: !resultFilters.showAll,
      showTwoTransfers: !resultFilters.showAll,
      showThreeTransfers: !resultFilters.showAll,
    }

  if (action.type === 'WITHOUT_TRANSFERS')
    resultFilters = {
      showAll: resultFilters.showWithoutTransfers,
      showWithoutTransfers: !resultFilters.showWithoutTransfers,
      showOneTransfer: resultFilters.showWithoutTransfers,
      showTwoTransfers: resultFilters.showWithoutTransfers,
      showThreeTransfers: resultFilters.showWithoutTransfers,
    }

  if (action.type === '1_TRANSFER') {
    resultFilters.showOneTransfer = !resultFilters.showOneTransfer
    resultFilters.showAll =
      resultFilters.showOneTransfer && resultFilters.showTwoTransfers && resultFilters.showThreeTransfers
    resultFilters.showWithoutTransfers =
      resultFilters.showOneTransfer === false &&
      resultFilters.showTwoTransfers === false &&
      resultFilters.showThreeTransfers === false
  }

  if (action.type === '2_TRANSFER') {
    resultFilters.showTwoTransfers = !resultFilters.showTwoTransfers
    resultFilters.showAll =
      resultFilters.showOneTransfer && resultFilters.showTwoTransfers && resultFilters.showThreeTransfers
    resultFilters.showWithoutTransfers =
      resultFilters.showOneTransfer === false &&
      resultFilters.showTwoTransfers === false &&
      resultFilters.showThreeTransfers === false
  }

  if (action.type === '3_TRANSFER') {
    resultFilters.showThreeTransfers = !resultFilters.showThreeTransfers
    resultFilters.showAll =
      resultFilters.showOneTransfer && resultFilters.showTwoTransfers && resultFilters.showThreeTransfers
    resultFilters.showWithoutTransfers =
      resultFilters.showOneTransfer === false &&
      resultFilters.showTwoTransfers === false &&
      resultFilters.showThreeTransfers === false
  }

  if (action.type === 'SET_CHEAPEST') {
    resultTabs = { sortChepeast: true, sortFastest: false, sortOptimum: false }
  }
  if (action.type === 'SET_FASTEST') {
    resultTabs = { sortChepeast: false, sortFastest: true, sortOptimum: false }
  }
  if (action.type === 'SET_OPTIMUM') {
    resultTabs = { sortChepeast: false, sortFastest: false, sortOptimum: true }
  }

  return { filters: resultFilters, tabs: resultTabs }
}
