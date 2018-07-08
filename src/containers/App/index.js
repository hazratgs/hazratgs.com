import React, { PureComponent } from 'react'
import { withRouter, Route } from 'react-router-dom'
import s from './style.pcss'

import Header from '../Header'
import Footer from '../Footer'
import About from '../About'

@withRouter
export default class App extends PureComponent {
  render () {
    return (
      <div className={s.app}>
        <Header/>
        <div className={s.content}>
          <Route exact path='/' component={About}/>
        </div>
        <Footer/>
      </div>
    )
  }
}
