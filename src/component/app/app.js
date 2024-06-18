import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Filters from '../filters'
import Tabs from '../tabs'
import TicketCard from '../ticket-card'
import {
  setFiltersShowAll,
  setFiltersWithotTransfers,
  setFiltersOneTransfer,
  setFiltersTwoTransfer,
  setFiltersThreeTransfer,
} from '../filters/actions-filters'

import { requestGetId, requestGetTickets, showMore } from './action-app'
import './app.scss'
import logo from './assets/Logo.svg'

const debounce = require('lodash.debounce')

function ticketFilters(
  ticketsArray,
  ticketsShows,
  showWithoutTransfers,
  showOneTransfer,
  showTwoTransfers,
  showThreeTransfers
) {
  const ticketCards = []
  let i = 0
  let j = 0
  let visible = false
  let withoutTransfers = -1
  let oneTransfer = -1
  let twoTransfers = -1
  let threeTransfers = -1
  if (showWithoutTransfers) {
    withoutTransfers = 0
  }
  if (showOneTransfer) {
    oneTransfer = 1
  }
  if (showTwoTransfers) {
    twoTransfers = 2
  }
  if (showThreeTransfers) {
    threeTransfers = 3
  }

  while (j < ticketsShows && i < ticketsArray.length) {
    visible = ticketsArray[i].segments.reduce(
      (acc, item) =>
        (item.stops.length === withoutTransfers ||
          item.stops.length === oneTransfer ||
          item.stops.length === twoTransfers ||
          item.stops.length === threeTransfers) &&
        acc,
      true
    )

    if (visible) {
      ticketCards.push(<TicketCard key={ticketsArray[i].id} tickets={ticketsArray[i]} />)
      j += 1
    }
    i += 1
  }

  return ticketCards
}

function App({
  searchId,
  isLoaded,
  isStop,
  error,
  ticketsShows,
  ticketsArray,
  sendRequestGetId,
  sendGetTickets,
  callShowMore,
  showWithoutTransfers,
  showOneTransfer,
  showTwoTransfers,
  showThreeTransfers,
}) {
  const debounceSendRequestGetId = debounce(sendRequestGetId, 5000)
  const debounceSendGetTickets = debounce(sendGetTickets, 1000)

  useEffect(() => {
    if (searchId === 0 && isLoaded === false && error === 0) {
      sendRequestGetId()
    }
    if (searchId === 0 && isLoaded === false && error !== 0) {
      debounceSendRequestGetId()
    }

    if (searchId !== 0 && isLoaded === false && isStop === false && error === 0) sendGetTickets(searchId)

    if (searchId !== 0 && isLoaded === false && isStop === false && error !== 0) debounceSendGetTickets(searchId)
  })

  const buttonShow =
    ticketsShows < ticketsArray.length ? (
      <button type="button" className="show-more" onClick={callShowMore}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    ) : null

  const styleLoader = { width: `${(ticketsArray.length / 10000) * 100}%` }
  const loader = isStop === false ? <div style={styleLoader} className="loader" /> : null

  let ticketCards = ticketFilters(
    ticketsArray,
    ticketsShows,
    showWithoutTransfers,
    showOneTransfer,
    showTwoTransfers,
    showThreeTransfers
  )

  if (ticketCards.length === 0 && isLoaded === false && error === 0)
    ticketCards = <p className="section-main__not-found">По Вашим параметрам билетов не найдено</p>
  if (ticketCards.length === 0 && isLoaded === true && error === 0)
    ticketCards = <p className="section-main__not-found">Загружаю данные...</p>
  if (ticketCards.length === 0 && isLoaded === false && error !== 0)
    ticketCards = <p className="section-main__not-found">Что-то пошло не так...</p>

  return (
    <>
      {loader}
      <header className="header">
        <img className="header-logo" src={logo} alt="logo" />
      </header>
      <main className="main">
        <section className="section-aside">
          <Filters header="КОЛИЧЕСТВО ПЕРЕСАДОК" />
        </section>
        <section className="section-main">
          <Tabs />
          {ticketCards}
          {buttonShow}
        </section>
      </main>
    </>
  )
}

const mapStateToProps = (state) => {
  return { ...state.tickets, ...state.filters }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendRequestGetId: () => dispatch(requestGetId()),
    sendGetTickets: (id) => dispatch(requestGetTickets(id)),
    callShowMore: () => dispatch(showMore()),
    setShowAll: () => dispatch(setFiltersShowAll()),
    setWithotTransfers: () => dispatch(setFiltersWithotTransfers()),
    setOneTransfer: () => dispatch(setFiltersOneTransfer()),
    setTwoTransfer: () => dispatch(setFiltersTwoTransfer()),
    setThreeTransfer: () => dispatch(setFiltersThreeTransfer()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
