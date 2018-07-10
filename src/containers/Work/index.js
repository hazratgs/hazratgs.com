import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

@withRouter
@connect(state => ({ items: state.App.works }))
@CSSModules(s)
export default class Work extends PureComponent {
  render () {
    const items = this.props.items.map((item, i) =>
      <div key={i} styleName='item'>
        <div styleName='favicon'>
          <img src={item.favicon} />
        </div>
        <div styleName='data'>
          <a target='_blank' href={item.url}>{item.title}</a>
          <p>{item.description}</p>
        </div>
      </div>
    )

    return (
      <div styleName='work'>
        <div styleName='tabs'>
          <NavLink
            to='/work/commercial'
            activeClassName={s.active}
          >
            <span>Коммерческие</span>
          </NavLink>
          <NavLink
            to='/work/personal'
            activeClassName={s.active}
          >
            <span>Личные</span>
          </NavLink>
        </div>
        <div styleName='items'>
          <div styleName='year'>2018</div>
          {items}
        </div>
      </div>
    )
  }
}
