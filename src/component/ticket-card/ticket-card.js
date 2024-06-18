import React from 'react'

import Route from '../route'

import './ticket-card.scss'

export default function TicketCard(props) {
  const { tickets } = props

  const routes = tickets.segments.map((item) => <Route key={Math.random()} routeInfo={item} />)

  return (
    <div className="ticket-card">
      <section className="ticket-card__header">
        <span className="ticket-card__price">{`${tickets.price} Р`}</span>
        <img src={`//pics.avs.io/99/36/${tickets.carrier}.png`} alt="Логотип авиакомпании" />
      </section>
      {routes}
    </div>
  )
}
