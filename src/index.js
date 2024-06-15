import React from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import reduceFilters from './reduce-filters'
import App from './component/app'

const store = configureStore({ reducer: reduceFilters })

const root = createRoot(document.querySelector('.root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
