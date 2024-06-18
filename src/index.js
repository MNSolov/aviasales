import React from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'

import reduceFilters from './redux/reduce-filters'
import reduceTickets from './redux/reduce-tickets'
import App from './component/app'

const store = configureStore({
  reducer: {
    tickets: reduceTickets,
    filters: reduceFilters,
  },
  middleware: () => [thunk],
})

const root = createRoot(document.querySelector('.root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
