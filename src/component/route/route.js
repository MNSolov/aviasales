import React from 'react'

import './route.scss'

export default function Route(props) {
  const { routeInfo } = props
  return (
    <table className="route__table">
      <thead className="route__table-header">
        <tr>
          <td>{routeInfo.routeName}</td>
          <td>В ПУТИ</td>
          <td>{routeInfo.numberOfTransfers}</td>
        </tr>
      </thead>
      <tbody className="route__table-body">
        <tr>
          <td>{routeInfo.departureTime}</td>
          <td>{routeInfo.routeTime}</td>
          <td>{routeInfo.transfers}</td>
        </tr>
      </tbody>
    </table>
  )
}
