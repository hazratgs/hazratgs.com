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
              <img src='/svg/typescript.svg'/>
              <span>TypeScript</span>
            </div>
            <div styleName='item'>
              <img src='/svg/webpack-icon.svg'/>
              <span>Webpack</span>
            </div>
            <div styleName='item'>
              <img src='/svg/eslint.svg'/>
              <span>ESLint</span>
            </div>
            <div styleName='item'>
              <img src='/svg/jest.svg'/>
              <span>Jest</span>
            </div>
            <div styleName='item'>
              <img src='/svg/postcss.svg'/>
              <span>PostCSS</span>
            </div>
            <div styleName='item'>
              <img src='/svg/styled-components.png'/>
              <span>Styled components</span>
            </div>
          </div>
          <p>А так же часто использую в работе:</p>
          <div styleName='number'>
            <div styleName='item'>
              <img src='/svg/nodejs.svg'/>
              <span>Node.js</span>
            </div>
            <div styleName='item'>
              <img src='/svg/mongodb.svg'/>
              <span>MongoDB</span>
            </div>
            <div styleName='item'>
              <img src='/svg/gitlab.svg'/>
              <span>GitLab</span>
            </div>
            <div styleName='item'>
              <img src='/svg/docker.svg'/>
              <span>Docker</span>
            </div>
            <div styleName='item'>
              <img src='/svg/linux.svg'/>
              <span>Linux</span>
            </div>
            <div styleName='item'>
              <img src='/svg/nginx.svg'/>
              <span>Nginx</span>
            </div>
            <div styleName='item'>
              <img src='/svg/chai.svg'/>
              <span>Chai & Mocha</span>
            </div>
            <div styleName='item'>
              <img src='/svg/mysql.svg'/>
              <span>MySQL</span>
            </div>
            <div styleName='item'>
              <img src='/svg/php.svg'/>
              <span>PHP</span>
            </div>
          </div>
          <ul>
            <li><p>Опыт проектирования и разработки Single Page Applications (SPA)</p></li>
            <li><p>Имею представление о блокчейне Ethereum, создавал токен на основе ERC20, Truffle</p></li>
            <li><p>Опыт кроссбраузерной и адаптивной верстки</p></li>
            <li><p>Gitlab CI/CD</p></li>
            <li><p>Смотрю в сторону функционального программирования</p></li>
            <li><p>Представление о React-Native, в свободное время веду <a target='_blank' href='https://github.com/hazratgs/MMATODAY'>разработку приложения</a></p></li>
            <li><p>Люблю красивый дизайн, особенно его верстать, раскладывая все по принципам React, каждую кнопочку в свою папочку)</p></li>
            <li><p>В своих проектах использую styled-components</p></li>
            <li><p>Работаю на MacBook Pro 13</p></li>
            <li><p>Часовой пояс GMT+0300 (MSK)</p></li>
          </ul>
          <br/>
        </div>
      </div>
    )
  }
}
