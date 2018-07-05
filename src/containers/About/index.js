import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import s from './style.pcss'

@connect(state => ({ theme: state.App.theme }))
@withRouter
@CSSModules(s)
export default class About extends PureComponent {
  state = {
    loader: true
  }

  componentDidMount () {
    setTimeout(() => this.setState({ loader: false }), 60)
  }

  getYear = start => new Date().getFullYear() - start

  render () {
    return (
      <div styleName='about' className={s[this.props.theme]}>
        <div styleName='wrapper' className={this.state.loader && s.loader}>
          <h1>О себе</h1>
          <p>
            Приветствую! Меня зовут Хазрат, мне 26 лет.
            Разработкой занимаюсь уже более {this.getYear(2009)} лет,
            имею большой опыт в создании и поддержке разной сложности проектов:
            от интернет-магазинов и служб доставки еды до автоматизации сложных решений для бизнеса.
          </p>
          <p>
            Мне нравится принимать участие во всех этапах разработки приложения,
            начиная от серверной логики и ее реализации с помощью различных технологий и фреймворков,
            и заканчивая клиентским кодом приложения.
          </p>
          <p>Сейчас мой основной стек это:</p>
          <div styleName='number'>
            <div styleName='item'>
              <img src='/svg/react.svg'/>
              <span>React</span>
            </div>
            <div styleName='item'>
              <img src='/svg/redux.svg'/>
              <span>Redux</span>
            </div>
            <div styleName='item'>
              <img src='/svg/webpack-icon.svg'/>
              <span>Webpack</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
