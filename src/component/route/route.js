import React from 'react'

import './route.scss'

export default function Route(props) {
  const { routeInfo } = props

  const timeDepartureDestination = (date, duration) => {
    let time = new Date(date)
    let result = `${String(time.getUTCHours()).padStart(2, '0')}:${String(time.getUTCMinutes()).padStart(2, '0')}`
    time = new Date(Number(new Date(date)) + Number(duration) * 60000)
    result += ` - ${String(time.getUTCHours()).padStart(2, '0')}:${String(time.getUTCMinutes()).padStart(2, '0')}`
    return result
  }

  const timeDuration = (duration) => {
    const time = new Date(Number(duration) * 60000)
    const days = Math.floor(Number(duration) / 24 / 60)
    let result = days > 0 ? `${days} д ` : ''
    result += `${time.getUTCHours()}ч ${String(time.getUTCMinutes()).padStart(2, '0')}м`
    return result
  }

  const numberTransaction = (number) => {
    let result = ''
    if (number === 0) result = 'Без пересадок'
    if (number === 1) result = '1 пересадка'
    if (number === 2) result = '2 пересадки'
    if (number === 3) result = '3 пересадки'
    return result.toUpperCase()
  }

  return (
    <table className="route__table">
      <thead className="route__table-header">
        <tr>
          <td className="route__cell">{`${routeInfo.origin} - ${routeInfo.destination}`}</td>
          <td className="route__cell">В ПУТИ</td>
          <td className="route__cell">{numberTransaction(routeInfo.stops.length)}</td>
        </tr>
      </thead>
      <tbody className="route__table-body">
        <tr>
          <td className="route__cell">{timeDepartureDestination(routeInfo.date, routeInfo.duration)}</td>
          <td className="route__cell">{timeDuration(routeInfo.duration)}</td>
          <td className="route__cell">{routeInfo.stops.join(', ')}</td>
        </tr>
      </tbody>
    </table>
  )
}
