import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import AudioIcon from '../../public/svg/baseline-volume_up-24px.svg'

const Wrapper = styled.div`
  padding: 40px 80px;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #fff;
  transition: background-color .3s ease;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const Title = styled.h1`
  font-family: 'bandera';
  font-size: 36px;
  font-weight: 400;
  max-width: 740px;

  span {
    color: red;
    font-size: 11px;
    font-weight: 300;
    position: relative;
    top: -22px;
    left: 2px;
    font-family: 'gerbera';
  }

  @media (max-width: 768px) {
    font-size: 29px;
    margin: 5px 0;
  }
`

const Description = styled.p`
  max-width: 740px;
  color: #000;
  font-size: 18px;
  line-height: 28px;
  min-height: 20px;
  font-family: 'gerbera';
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 24px;
  }
`

const Content = styled.div`
  padding: 40px 0;
  max-width: 740px;
`

const Item = styled.div`
  display: flex;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    border-bottom: 1px solid #eee;
    padding-bottom: 50px;
    margin-bottom: 50px;

    &:last-child {
      border-bottom: 0;
      margin-bottom: 0;
    }
  }
`

const Book = styled.div`
  width: 140px;
  margin-right: 40px;
  position: relative;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 72px;
    margin-right: 20px;
  }
`

const Info = styled.div`
  flex: 1;
  position: relative;
`

const Author = styled.span`
  font-family: 'gerbera';
  color: #999;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const BookTitle = styled.h2`
  font-family: 'gerbera';
  line-height: 28px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    margin: 10px 0;

    strong {
      display: block;
      margin-bottom: 10px;
    }
  }
`

const Label = styled.span`
  font-size: 12px;
  padding: 5px 5px 4px;
  border-radius: 3px;
  color: #fff;
  font-weight: 300;
  position: relative;
  top: -3px;
  line-height: 12px;
  border: 1px solid #005ea5;
  color: #005ea5;

  @media (max-width: 768px) {
    display: inline-block;
    font-size: 10px;
    padding: 3px 3px 2px;
  }
`

const BookDescription = styled.p`
  font-family: 'gerbera';
  line-height: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`

const Ball = styled.div`
  font-family: 'bandera';
  font-size: 24px;
  font-weight: bold;
  color: #8cb400;

  ${props => props.value === 1 && `color: #f6c000;`}
  ${props => props.value === 2 && `color: #f6c000;`}
  ${props => props.value === 3 && `color: #c1c710;`}
  ${props => props.value === 4 && `color: #8cb400;`}
  ${props => props.value === 5 && `color: #359e00;`}
`

const BookAudio = styled.div`
  position: absolute;
  right: 0;
  top: -5px;
  width: 24px;
  height: 24px;

  svg {
    fill: #999!important;
  }

  @media (max-width: 768px) {
    svg {
      width: 16px;
      height: 16px;
    }
  }
`

@connect(
  state => ({ books: state.Books.books })
)
export default class Books extends PureComponent {
  render () {
    const items = this.props.books.map((item, i) => {
      console.log('item.score', item.score)
      return (
        <Item key={i}>
          <Book>
            <img src={item.img} alt={item.title} />
          </Book>
          <Info>
            <Author>{item.author}</Author>
            <BookTitle>
              <strong dangerouslySetInnerHTML={{ __html: item.title }}/>{' '}
              <Label>{item.category}</Label>
            </BookTitle>
            <BookDescription dangerouslySetInnerHTML={{ __html: item.review }}/>
            <Ball value={parseInt(item.score)}>{item.score}</Ball>
            {item.audio && (
              <BookAudio>
                <AudioIcon />
              </BookAudio>
            )}
          </Info>
        </Item>
      )
    })

    return (
      <Wrapper>
        <Title>Книги<span>beta</span></Title>
        <Description>
          Собираю список прочитанных/прослушанных мною книг, делюсь впечатлиниями и оцениваю, иногда даже настоятельно рекомендую прочитать/послушать!
        </Description>
        <Content>
          {items}
        </Content>
      </Wrapper>
    )
  }
}
