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
`

const Title = styled.h1`
  font-family: 'bandera';
  font-size: 36px;
  font-weight: 400;
  max-width: 740px;
`

const Description = styled.p`
  max-width: 740px;
  color: #000;
  font-size: 18px;
  line-height: 28px;
  min-height: 20px;
  font-family: 'gerbera';
  font-weight: 300;
`

const Content = styled.div`
  padding: 40px 0;
  max-width: 740px;
`

const Item = styled.div`
  display: flex;
  margin-bottom: 100px;
`

const Book = styled.div`
  width: 140px;
  margin-right: 40px;
  position: relative;

  img {
    width: 100%;
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
`

const BookTitle = styled.h2`
  font-family: 'gerbera';
  line-height: 28px;
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
`

const BookDescription = styled.p`
  font-family: 'gerbera';
  line-height: 24px;
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
              <span dangerouslySetInnerHTML={{ __html: item.title }}/>{' '}
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
        <Title>Книги</Title>
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
