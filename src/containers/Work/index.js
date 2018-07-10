import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

@withRouter
@connect(state => ({ items: state.App.works }))
@CSSModules(s)
export default class Work extends PureComponent {
  constructor (props) {
    super(props)
    this.year = null
  }

  render () {
    const sort = [...this.props.items]
      .filter(item => item.type === this.props.match.params.type)
      .map((item, i) => ({ id: i, ...item }))
      .sort((a, b) => a.year >= b.year ? -1 : 1)
      .sort((a, b) => a.id <= b.id ? -1 : 1)
    const items = sort.map((item, i) => {
      let year = null
      if (!this.year) {
        year = <div styleName='year'>{item.year}</div>
        this.year = item.year
      }
      if (this.year !== item.year) {
        year = <div styleName='year'>{item.year}</div>
        this.year = item.year
      }
      return (
        <div key={i}>
          {year}
          <div styleName='item'>
            <div styleName='favicon'>
              <img src={item.favicon} />
            </div>
            <div styleName='data'>
              <a target='_blank' href={item.url}>{item.title}</a>
              <p>{item.description}</p>
            </div>
          </div>
        </div>)
    })

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
            <span>Личные проекты</span>
          </NavLink>
        </div>
        <div styleName='items'>
          {items}
        </div>
      </div>
    )
  }
}
