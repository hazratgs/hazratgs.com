import React, { PureComponent } from 'react'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

@CSSModules(s)
export default class Header extends PureComponent {
  render () {
    return (
      <div>шапка</div>
    )
  }
}
