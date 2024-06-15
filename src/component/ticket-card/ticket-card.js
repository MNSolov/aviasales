import React from 'react'

import Route from '../route'

import logoAviacompany from './S7 Logo.png'

import './ticket-card.scss'

export default function TicketCard(props) {
  const { tickets } = props

  const routes = tickets.routes.map((item) => <Route key={item.id} routeInfo={item} />)

  return (
    <div className="ticket-card">
      <section className="ticket-card__header">
        <span className="ticket-card__price">{tickets.price}</span>
        <img src={logoAviacompany} alt="Логотип авиакомпании" />
      </section>
      {routes}
    </div>
  )
}
