import React from 'react'
import { connect } from 'react-redux'

import Checkbox from '../checkbox/checkbox'

import './filters.scss'

function Filters({
  header,
  showAll,
  showWithoutTransfers,
  showOneTransfer,
  showTwoTransfers,
  showThreeTransfers,
  setFiltersShowAll,
  setFiltersWithotTransfers,
  setFiltersOneTransfer,
  setFiltersTwoTransfer,
  setFiltersThreeTransfer,
}) {
  const options = [
    { id: 1, name: 'Все', isActive: showAll, callback: setFiltersShowAll },
    { id: 2, name: 'Без пересадок', isActive: showWithoutTransfers, callback: setFiltersWithotTransfers },
    { id: 3, name: '1 пересадка', isActive: showOneTransfer, callback: setFiltersOneTransfer },
    { id: 4, name: '2 пересадки', isActive: showTwoTransfers, callback: setFiltersTwoTransfer },
    { id: 5, name: '3 пересадки', isActive: showThreeTransfers, callback: setFiltersThreeTransfer },
  ]

  const filterItems = options.map((item) => {
    return (
      <li key={item.id} className="filters__item">
        <Checkbox id={item.id} isActive={item.isActive} callback={item.callback}>
          {item.name}
        </Checkbox>
      </li>
    )
  })

  return (
    <div className="filters">
      <h2 className="filters__header">{header}</h2>
      <ul className="filters__menu">{filterItems}</ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state.filters
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFiltersShowAll: () => dispatch({ type: 'SHOW_ALL' }),
    setFiltersWithotTransfers: () => dispatch({ type: 'WITHOUT_TRANSFERS' }),
    setFiltersOneTransfer: () => dispatch({ type: '1_TRANSFER' }),
    setFiltersTwoTransfer: () => dispatch({ type: '2_TRANSFER' }),
    setFiltersThreeTransfer: () => dispatch({ type: '3_TRANSFER' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
