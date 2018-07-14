import React, { PureComponent } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

@withRouter
@CSSModules(s)
export default class Header extends PureComponent {
  render () {
    return (
      <header styleName='header'>
        <div styleName='user'>
          <div styleName='img'>
            <img src='/hazratgs.jpg'/>
          </div>
          <div styleName='data'>
            <h1>Хазрат Гаджикеримов</h1>
            <p>Senior JavaScript Developer</p>
          </div>
        </div>
        <nav styleName='nav'>
          <NavLink exact to='/' activeClassName={s.active}>Обо мне</NavLink>
          <NavLink to='/work/commercial' activeClassName={s.active}>Работы</NavLink>
          <a
            target='_blank'
            href='https://habr.com/users/hazratgs/posts/'
            styleName='habr'
          >
            Публикации <i>2</i>
          </a>
          <a target='_blank' href='https://github.com/hazratgs'>
            <img src='/svg/github.svg'/>
            <span>GitHub</span>
          </a>
        </nav>
      </header>
    )
  }
}
