import ApiService from '../../api-service'

function sendRequest() {
  return { type: 'SEND_REQUEST' }
}

function getResponse(response) {
  return { type: 'GET_RESPONSE', response }
}

function getError(error) {
  return { type: 'GET_ERROR', error }
}

function getResponseTickets(response) {
  return { type: 'GET_RESPONSE_TICKETS', response }
}

export function showMore() {
  return { type: 'SHOW_MORE' }
}

export function asyncResponce() {
  return (dispatch) => {
    dispatch(sendRequest())
    setTimeout(() => dispatch({ type: 'GET_RESPONSE' }), 5000)
  }
}

export function requestGetId() {
  const api = new ApiService()

  return (dispatch) => {
    dispatch(sendRequest())
    api
      .getId()
      .then((response) => {
        dispatch(getResponse(response))
      })
      .catch((err) => {
        dispatch(getError(err))
        return err
      })
  }
}

export function requestGetTickets(id) {
  const api = new ApiService()

  return (dispatch) => {
    dispatch(sendRequest())
    api
      .getTickets(id)
      .then((response) => {
        dispatch(getResponseTickets(response))
      })
      .catch((err) => {
        dispatch(getError(err))
        return err
      })
  }
}
