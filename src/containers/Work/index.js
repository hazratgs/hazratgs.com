import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

@withRouter
@CSSModules(s)
export default class Work extends PureComponent {
  render () {
    return (
      <div styleName='work'>В процессе...</div>
    )
  }
}
