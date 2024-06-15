import React from 'react'

import Filters from '../filters'
import Tabs from '../tabs'
import TicketCard from '../ticket-card'

import './app.scss'
import logo from './assets/Logo.svg'

export default function App() {
  const tickets = [
    {
      id: 1,
      price: '12 000 Р',
      company: 'S7',
      routes: [
        {
          id: 1,
          routeName: 'MOW-HKT',
          routeTime: '21ч 15м',
          departureTime: '10:45 - 08:00',
          numberOfTransfers: '2 ПЕРЕСАДКИ',
          transfers: 'HKG, JNB',
        },
        {
          id: 2,
          routeName: 'MOW-HKT',
          routeTime: '21ч 15м',
          departureTime: '10:45 - 08:00',
          numberOfTransfers: '2 ПЕРЕСАДКИ',
          transfers: 'HKG, JNB',
        },
      ],
    },
    {
      id: 2,
      price: '12 000 Р',
      company: 'S7',
      routes: [
        {
          id: 1,
          routeName: 'MOW-HKT',
          routeTime: '21ч 15м',
          departureTime: '10:45 - 08:00',
          numberOfTransfers: '2 ПЕРЕСАДКИ',
          transfers: 'HKG, JNB',
        },
        {
          id: 2,
          routeName: 'MOW-HKT',
          routeTime: '21ч 15м',
          departureTime: '10:45 - 08:00',
          numberOfTransfers: '2 ПЕРЕСАДКИ',
          transfers: 'HKG, JNB',
        },
      ],
    },
    {
      id: 3,
      price: '12 000 Р',
      company: 'S7',
      routes: [
        {
          id: 1,
          routeName: 'MOW-HKT',
          routeTime: '21ч 15м',
          departureTime: '10:45 - 08:00',
          numberOfTransfers: '2 ПЕРЕСАДКИ',
          transfers: 'HKG, JNB',
        },
        {
          id: 2,
          routeName: 'MOW-HKT',
          routeTime: '21ч 15м',
          departureTime: '10:45 - 08:00',
          numberOfTransfers: '2 ПЕРЕСАДКИ',
          transfers: 'HKG, JNB',
        },
      ],
    },
  ]

  const ticketCards = tickets.map((item) => <TicketCard key={item.id} tickets={item} />)

  return (
    <>
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
          <button type="button" className="show-more">
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
          </button>
        </section>
      </main>
    </>
  )
}
