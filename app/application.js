'use client'

import { Provider } from 'react-redux';
import store from './store';

const Application = ({ children }) => {
  return (
    <Provider store={store} >
      <div className="container">
        {children}
      </div>
    </Provider>
  )
}

export default Application
