import { } from '../constants/App'

const initialState = {
  works: [
    {
      'title': 'Crypterium',
      'description': 'Pay with crypto anywhere in the world',
      'url': 'https://crypterium.com/',
      'favicon': 'https://crypterium.com/favicon.ico',
      'year': 2018
    },
    {
      'title': 'Банки.ру',
      'description': 'Бонусный клуб Банки.ру',
      'url': 'http://www.banki.ru/bonus/',
      'favicon': 'http://www.banki.ru/favicon.ico',
      'year': 2018
    },
    {
      'title': 'Cosmopolitan',
      'description': 'СosmoShop — сервис экономии на покупках',
      'url': 'https://www.cosmo.ru/cosmoshop/',
      'favicon': 'https://www.cosmo.ru/favicon-new.ico',
      'year': 2018
    },
    {
      'title': 'Сахар',
      'description': 'Единая бонусная карта',
      'url': 'https://saharcard.ru',
      'favicon': 'https://saharcard.ru/img/layout/favicon.ico',
      'year': 2018
    },
    {
      'title': 'THT-CLUB',
      'description': 'Программа лояльности THT-CLUB',
      'url': 'https://play.google.com/store/apps/details?id=com.finchmil.thtclub',
      'favicon': 'https://lh3.googleusercontent.com/CbhPPDkvNBfJwczyzz3EDOR2CJd_taHYnh8JXUP0EScYOuopImUl7fQWpeEvJFJdLA=s360-rw',
      'year': 2018
    },
    {
      'title': 'Workle',
      'description': 'Бонусный клуб Workle',
      'url': 'https://www.workle.ru/promopage/workle-bonus/',
      'favicon': 'https://www.workle.ru/resources/images/favicon.ico',
      'year': 2017
    },
    {
      'title': 'Комсомольская правда',
      'description': 'Бонусный клуб',
      'url': 'https://www.kp.ru/best/msk/bonus-club/',
      'favicon': 'https://www.kp.ru/best/newheadkp/favicon.ico',
      'year': 2017
    },
    {
      'title': 'LiveLib',
      'description': 'Бутик LiveLib',
      'url': 'https://www.livelib.ru/special/bonus',
      'favicon': 'https://www.livelib.ru/favicon.ico',
      'year': 2017
    },
    {
      'title': 'BitCoen Loyalty',
      'description': 'BitCoen Loyalty is a unique loyalty program created within the framework of the BitCoen project ecosystem.',
      'url': 'http://loyalty.bitcoen.io/mainpage/partners',
      'favicon': 'https://bitcoen.io/img/favicon/favicon.ico',
      'year': 2017
    },
    {
      'title': 'Дневник.Бонус',
      'description': 'Программа лояльности специально для пользователей Дневник.ру',
      'url': 'https://ad.dnevnik.ru/promo/bonus',
      'favicon': 'https://static.dnevnik.ru/img/icons/favicon.ico',
      'year': 2017
    },
    {
      'title': 'Лайфхакер',
      'description': 'Кэшбэк сервис Лайфхакера',
      'url': 'https://lifehacker.ru/cashback/',
      'favicon': 'https://lifehacker.ru/favicon-16x16.png',
      'year': 2017
    },
    {
      'title': 'Monte-Carlo',
      'description': 'Служба доставки еды',
      'url': 'http://monte05.ru/',
      'favicon': 'http://monte05.ru/img/favicon.png',
      'year': 2017
    },
    {
      'title': 'Доктор Плюс',
      'description': 'Медицинский центр',
      'url': 'http://doctorplus05.ru/',
      'favicon': 'http://doctorplus05.ru/public/img/favicon.png',
      'year': 2017
    },
    {
      'title': 'Дербентский район',
      'description': 'Официальный сайт Администрации Дербентского района',
      'url': 'https://derbrayon.ru/',
      'favicon': 'https://derbrayon.ru/public/img/favicon.png',
      'year': 2017
    },
    {
      'title': 'Рандеву',
      'description': 'Служба доставки еды',
      'url': 'https://randevu05.ru/',
      'favicon': 'https://randevu05.ru/public/img/favicon.png',
      'year': 2016
    },
    {
      'title': 'Меридан',
      'description': 'Интернет-магазин цифровой техники',
      'url': 'https://meridian05.ru/',
      'favicon': 'https://meridian05.ru/public/img/favicon.ico',
      'year': 2016
    },
    {
      'title': 'MMA-TODAY',
      'description': 'Новостной сайт о смешаных единоборствах',
      'url': 'https://mma-today.ru/',
      'favicon': 'https://mma-today.ru/public/img/favicon.png',
      'year': 2016
    },
    {
      'title': 'Гарантъ-Строй',
      'description': 'Сайт объекта «Цитадель»',
      'url': 'http://garantstroy05.ru/',
      'favicon': 'http://garantstroy05.ru/public/img/favicon.png',
      'year': 2016
    },
    {
      'title': 'Ориент',
      'description': 'Мебельные решения',
      'url': 'https://orientmebel.ru/',
      'favicon': 'https://orientmebel.ru/static/img/favicon.png',
      'year': 2016
    },
    {
      'title': 'Febox',
      'description': 'Веб-студия дизайна',
      'url': 'https://febox.ru/',
      'favicon': 'https://febox.ru/public/img/favicon.png',
      'year': 2016
    }
  ]
}

export default function appState (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
