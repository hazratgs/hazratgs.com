import React, { PureComponent } from 'react'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

@CSSModules(s)
export default class Header extends PureComponent {
  render () {
    const year = new Date().getFullYear()
    return (
      <footer styleName='footer'>
        <div styleName='top'>
          <a href='mailto:hazratgs@gmail.com'>Написать</a>
          <a target='_blank' href='https://t.me/hazratgs'>Поболтать</a>
        </div>
        <div styleName='bottom'>
          © 2012–{year} Хазрат Гаджикеримов
        </div>
      </footer>
    )
  }
}
