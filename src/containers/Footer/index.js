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
          <a href='tel:+79282194199'>+7 (928) 219-41-99</a>
          <a href='mailto:hazratgs@gmail.com'>hazratgs@gmail.com</a>
          <a target='_blank' href='https://t.me/hazratgs'>Telegram</a>
          <a target='_blank' href='https://github.com/hazratgs'>GitHub</a>
          <a target='_blank' href='https://habr.com/users/hazratgs/'>Хабрахабр</a>
          <a target='_blank' href='https://moikrug.ru/hazratgs'>Мой круг</a>
        </div>
        <div styleName='bottom'>
          © 2012–{year} Хазрат Гаджикеримов
        </div>
      </footer>
    )
  }
}
