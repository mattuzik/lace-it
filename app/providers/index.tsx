import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store'
import type { ReactNode } from 'react'
import ScrollToTop from '@/shared/lib/utils/scrollToTop'

export const withProviders = (children: ReactNode) => (
  <Provider store={store}>
    <Router>  
      <ScrollToTop />
      {children}
    </Router>
  </Provider>
)