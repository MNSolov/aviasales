const initialState = {
  showAll: true,
  showWithoutTransfers: true,
  showOneTransfer: true,
  showTwoTransfers: true,
  showThreeTransfers: true,
}

export default function reduceFilters(state, action) {
  if (typeof state === 'undefined') return initialState

  let resultFilters = {}
  Object.assign(resultFilters, state)

  if (action.type === 'SHOW_ALL')
    resultFilters = {
      showAll: !resultFilters.showAll,
      showWithoutTransfers: true,
      showOneTransfer: !resultFilters.showAll,
      showTwoTransfers: !resultFilters.showAll,
      showThreeTransfers: !resultFilters.showAll,
    }

  if (action.type === 'WITHOUT_TRANSFERS') {
    resultFilters.showWithoutTransfers = !resultFilters.showWithoutTransfers

    if (
      resultFilters.showOneTransfer === false &&
      resultFilters.showTwoTransfers === false &&
      resultFilters.showThreeTransfers === false &&
      resultFilters.showWithoutTransfers === false
    )
      resultFilters.showWithoutTransfers = true

    resultFilters.showAll =
      resultFilters.showOneTransfer &&
      resultFilters.showTwoTransfers &&
      resultFilters.showThreeTransfers &&
      resultFilters.showWithoutTransfers
  }

  if (action.type === '1_TRANSFER') {
    resultFilters.showOneTransfer = !resultFilters.showOneTransfer
    if (
      resultFilters.showOneTransfer === false &&
      resultFilters.showTwoTransfers === false &&
      resultFilters.showThreeTransfers === false &&
      resultFilters.showWithoutTransfers === false
    )
      resultFilters.showWithoutTransfers = true

    resultFilters.showAll =
      resultFilters.showOneTransfer &&
      resultFilters.showTwoTransfers &&
      resultFilters.showThreeTransfers &&
      resultFilters.showWithoutTransfers
  }

  if (action.type === '2_TRANSFER') {
    resultFilters.showTwoTransfers = !resultFilters.showTwoTransfers

    if (
      resultFilters.showOneTransfer === false &&
      resultFilters.showTwoTransfers === false &&
      resultFilters.showThreeTransfers === false &&
      resultFilters.showWithoutTransfers === false
    )
      resultFilters.showWithoutTransfers = true

    resultFilters.showAll =
      resultFilters.showOneTransfer &&
      resultFilters.showTwoTransfers &&
      resultFilters.showThreeTransfers &&
      resultFilters.showWithoutTransfers
  }

  if (action.type === '3_TRANSFER') {
    resultFilters.showThreeTransfers = !resultFilters.showThreeTransfers

    if (
      resultFilters.showOneTransfer === false &&
      resultFilters.showTwoTransfers === false &&
      resultFilters.showThreeTransfers === false &&
      resultFilters.showWithoutTransfers === false
    )
      resultFilters.showWithoutTransfers = true

    resultFilters.showAll =
      resultFilters.showOneTransfer &&
      resultFilters.showTwoTransfers &&
      resultFilters.showThreeTransfers &&
      resultFilters.showWithoutTransfers
  }

  return resultFilters
}
