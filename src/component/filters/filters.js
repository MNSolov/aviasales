import React from 'react'
import { connect } from 'react-redux'

import Checkbox from '../checkbox/checkbox'

import {
  setFiltersShowAll,
  setFiltersWithotTransfers,
  setFiltersOneTransfer,
  setFiltersTwoTransfer,
  setFiltersThreeTransfer,
} from './actions-filters'

import './filters.scss'

function Filters({
  header,
  showAll,
  showWithoutTransfers,
  showOneTransfer,
  showTwoTransfers,
  showThreeTransfers,
  setShowAll,
  setWithotTransfers,
  setOneTransfer,
  setTwoTransfer,
  setThreeTransfer,
}) {
  const options = [
    { id: 1, idCheckbox: 10000, name: 'Все', isActive: showAll, callback: setShowAll },
    {
      id: 2,
      idCheckbox: 20000,
      name: 'Без пересадок',
      isActive: showWithoutTransfers,
      callback: setWithotTransfers,
    },
    { id: 3, idCheckbox: 30000, name: '1 пересадка', isActive: showOneTransfer, callback: setOneTransfer },
    { id: 4, idCheckbox: 40000, name: '2 пересадки', isActive: showTwoTransfers, callback: setTwoTransfer },
    { id: 5, idCheckbox: 50000, name: '3 пересадки', isActive: showThreeTransfers, callback: setThreeTransfer },
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
    setShowAll: () => dispatch(setFiltersShowAll()),
    setWithotTransfers: () => dispatch(setFiltersWithotTransfers()),
    setOneTransfer: () => dispatch(setFiltersOneTransfer()),
    setTwoTransfer: () => dispatch(setFiltersTwoTransfer()),
    setThreeTransfer: () => dispatch(setFiltersThreeTransfer()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
