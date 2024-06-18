const initialState = {
  isLoaded: false,
  error: 0,
  searchId: 0,
  ticketsArray: [],
  isStop: false,
  ticketsShows: 5,
  sortChepeast: true,
  sortFastest: false,
  sortOptimum: false,
}

export default function reduceTickets(state, actions) {
  if (typeof state === 'undefined') return initialState

  const result = {}
  Object.assign(result, state)

  if (actions.type === 'SEND_REQUEST') {
    result.isLoaded = true
  }

  if (actions.type === 'SHOW_MORE') {
    result.ticketsShows += 5
  }

  if (actions.type === 'SET_CHEAPEST') {
    result.ticketsArray = result.ticketsArray.sort((a, b) => a.price - b.price)
    result.sortChepeast = true
    result.sortFastest = false
    result.sortOptimum = false
  }

  if (actions.type === 'SET_FASTEST') {
    result.ticketsArray = result.ticketsArray.sort((a, b) => {
      const sumA = a.segments.reduce((acc, item) => Number(item.duration) + acc, 0)
      const sumB = b.segments.reduce((acc, item) => Number(item.duration) + acc, 0)
      return sumA - sumB
    })
    result.sortChepeast = false
    result.sortFastest = true
    result.sortOptimum = false
  }

  if (actions.type === 'SET_OPTIMUM') {
    result.ticketsArray = result.ticketsArray.sort((a, b) => {
      const sumA = a.segments.reduce((acc, item) => Number(item.duration) + acc, 0) * a.price
      const sumB = b.segments.reduce((acc, item) => Number(item.duration) + acc, 0) * b.price
      return sumA - sumB
    })
    result.sortChepeast = false
    result.sortFastest = false
    result.sortOptimum = true
  }

  if (actions.type === 'GET_RESPONSE') {
    result.isLoaded = false
    result.searchId = actions.response.searchId
    result.error = 0
  }

  if (actions.type === 'GET_ERROR') {
    result.isLoaded = false
    result.error = actions.error
  }

  if (actions.type === 'GET_RESPONSE_TICKETS') {
    actions.response.tickets.forEach((item) => {
      const resultObject = { id: result.ticketsArray.length, ...item }

      result.ticketsArray.push(resultObject)
    })

    if (result.sortChepeast) {
      result.ticketsArray = result.ticketsArray.sort((a, b) => a.price - b.price)
    }
    if (result.sortFastest)
      result.ticketsArray = result.ticketsArray.sort((a, b) => {
        const sumA = a.segments.reduce((acc, item) => Number(item.duration) + acc, 0)
        const sumB = b.segments.reduce((acc, item) => Number(item.duration) + acc, 0)
        return sumA - sumB
      })
    if (result.sortOptimum)
      result.ticketsArray = result.ticketsArray.sort((a, b) => {
        const sumA = a.segments.reduce((acc, item) => Number(item.duration) + acc, 0) * a.price
        const sumB = b.segments.reduce((acc, item) => Number(item.duration) + acc, 0) * b.price
        return sumA - sumB
      })

    result.isStop = actions.response.stop
    result.error = 0
    result.isLoaded = false
  }

  return result
}
