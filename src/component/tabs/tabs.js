import React from 'react'
import { connect } from 'react-redux'

import { setSortCheapest, setSortFastest, setSortOptimum } from './actions-tabs'
import './tabs.scss'

function Tabs({ sortChepeast, sortFastest, sortOptimum, setCheapest, setFastest, setOptimum }) {
  const tabsItems = [
    { id: 1, name: 'Самый дешевый', isActive: sortChepeast, callback: setCheapest },
    { id: 2, name: 'Самый быстрый', isActive: sortFastest, callback: setFastest },
    { id: 3, name: 'Оптимальный', isActive: sortOptimum, callback: setOptimum },
  ]

  const tabsButtons = tabsItems.map((item, index) => {
    const buttonClassArray = ['tabs__button']

    if (index === 0) buttonClassArray.push('tabs__button--left')
    if (index === tabsItems.length - 1) buttonClassArray.push('tabs__button--right')
    if (item.isActive) buttonClassArray.push('tabs__button--active')

    const buttonClassNames = buttonClassArray.join(' ')

    return (
      <li key={item.id} className="tabs__item">
        <button className={buttonClassNames} type="button" onClick={item.callback}>
          {item.name.toUpperCase()}
        </button>
      </li>
    )
  })

  return <ul className="tabs">{tabsButtons}</ul>
}

const mapStateToProps = (state) => {
  return state.tickets
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCheapest: () => dispatch(setSortCheapest()),
    setFastest: () => dispatch(setSortFastest()),
    setOptimum: () => dispatch(setSortOptimum()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
