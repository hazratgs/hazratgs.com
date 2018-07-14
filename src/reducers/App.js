import { } from '../constants/App'

const initialState = {
  works: [
    {
      'type': 'commercial',
      'title': 'Crypterium',
      'description': 'Pay with crypto anywhere in the world',
      'url': 'https://crypterium.com/',
      'favicon': 'https://crypterium.com/favicon.ico',
      'year': 2018
    },
    {
      'type': 'commercial',
      'title': 'Cosmopolitan',
      'description': 'СosmoShop — сервис экономии на покупках',
      'url': 'https://www.cosmo.ru/cosmoshop/',
      'favicon': 'https://www.cosmo.ru/favicon-new.ico',
      'year': 2018
    },
    {
      'type': 'commercial',
      'title': 'Сахар',
      'description': 'Единая бонусная карта',
      'url': 'https://saharcard.ru',
      'favicon': 'https://saharcard.ru/img/layout/favicon.ico',
      'year': 2018
    },
    {
      'type': 'commercial',
      'title': 'THT-CLUB',
      'description': 'Программа лояльности THT-CLUB',
      'url': 'https://play.google.com/store/apps/details?id=com.finchmil.thtclub',
      'favicon': 'https://lh3.googleusercontent.com/CbhPPDkvNBfJwczyzz3EDOR2CJd_taHYnh8JXUP0EScYOuopImUl7fQWpeEvJFJdLA=s360-rw',
      'year': 2018
    },
    {
      'type': 'commercial',
      'title': 'Банки.ру',
      'description': 'Бонусный клуб Банки.ру',
      'url': 'http://www.banki.ru/bonus/',
      'favicon': 'http://www.banki.ru/favicon.ico',
      'year': 2017
    },
    {
      'type': 'commercial',
      'title': 'Workle',
      'description': 'Бонусный клуб Workle',
      'url': 'https://www.workle.ru/promopage/workle-bonus/',
      'favicon': 'https://www.workle.ru/resources/images/favicon.ico',
      'year': 2017
    },
    {
      'type': 'commercial',
      'title': 'Комсомольская правда',
      'description': 'Бонусный клуб',
      'url': 'https://www.kp.ru/best/msk/bonus-club/',
      'favicon': 'https://www.kp.ru/best/newheadkp/favicon.ico',
      'year': 2017
    },
    {
      'type': 'commercial',
      'title': 'LiveLib',
      'description': 'Бутик LiveLib',
      'url': 'https://www.livelib.ru/special/bonus',
      'favicon': 'https://www.livelib.ru/favicon.ico',
      'year': 2017
    },
    {
      'type': 'commercial',
      'title': 'BitCoen Loyalty',
      'description': 'BitCoen Loyalty is a unique loyalty program created within the framework of the BitCoen project ecosystem.',
      'url': 'http://loyalty.bitcoen.io/mainpage/partners',
      'favicon': 'https://bitcoen.io/img/favicon/favicon.ico',
      'year': 2017
    },
    {
      'type': 'commercial',
      'title': 'Дневник.Бонус',
      'description': 'Программа лояльности специально для пользователей Дневник.ру',
      'url': 'https://ad.dnevnik.ru/promo/bonus',
      'favicon': 'https://static.dnevnik.ru/img/icons/favicon.ico',
      'year': 2017
    },
    {
      'type': 'commercial',
      'title': 'Лайфхакер',
      'description': 'Кэшбэк сервис Лайфхакера',
      'url': 'https://lifehacker.ru/cashback/',
      'favicon': 'https://lifehacker.ru/favicon-16x16.png',
      'year': 2017
    },
    {
      'type': 'commercial',
      'title': 'Monte-Carlo',
      'description': 'Служба доставки еды',
      'url': 'http://monte05.ru/',
      'favicon': 'http://monte05.ru/img/favicon.png',
      'year': 2017
    },
    {
      'type': 'commercial',
      'title': 'Доктор Плюс',
      'description': 'Медицинский центр',
      'url': 'http://doctorplus05.ru/',
      'favicon': 'http://doctorplus05.ru/public/img/favicon.png',
      'year': 2016
    },
    {
      'type': 'commercial',
      'title': 'Дербентский район',
      'description': 'Официальный сайт Администрации Дербентского района',
      'url': 'https://derbrayon.ru/',
      'favicon': 'https://derbrayon.ru/public/img/favicon.png',
      'year': 2016
    },
    {
      'type': 'commercial',
      'title': 'Рандеву',
      'description': 'Служба доставки еды',
      'url': 'https://randevu05.ru/',
      'favicon': 'https://randevu05.ru/public/img/favicon.png',
      'year': 2016
    },
    {
      'type': 'commercial',
      'title': 'Меридан',
      'description': 'Интернет-магазин цифровой техники',
      'url': 'https://meridian05.ru/',
      'favicon': 'https://meridian05.ru/public/img/favicon.ico',
      'year': 2016
    },
    {
      'type': 'commercial',
      'title': 'MMA-TODAY',
      'description': 'Новостной сайт о смешаных единоборствах',
      'url': 'https://mma-today.ru/',
      'favicon': 'https://mma-today.ru/public/img/favicon.png',
      'year': 2016
    },
    {
      'type': 'commercial',
      'title': '100 квадратов',
      'description': 'Агенство недвижимости',
      'url': 'http://stokvadratov.febox.ru/',
      'favicon': 'http://stokvadratov.febox.ru/public/img/favicon.png',
      'year': 2015
    },
    {
      'type': 'commercial',
      'title': 'Masspit',
      'description': 'Интернет-магазин спортивного питания',
      'url': 'http://masspit.febox.ru/',
      'favicon': 'http://masspit.febox.ru/public/img/favicon.png',
      'year': 2015
    },
    {
      'type': 'commercial',
      'title': 'Ориент',
      'description': 'Мебельные решения',
      'url': 'https://orientmebel.ru/',
      'favicon': 'https://orientmebel.ru/static/img/favicon.png',
      'year': 2015
    },
    {
      'type': 'commercial',
      'title': 'Первый',
      'description': 'Строительная компания',
      'url': 'http://perviy.febox.ru/',
      'favicon': 'http://perviy.febox.ru/public/img/favicon.png',
      'year': 2015
    },
    {
      'type': 'commercial',
      'title': 'Гарантъ-Строй',
      'description': 'Сайт объекта «Цитадель»',
      'url': 'http://garantstroy05.ru/',
      'favicon': 'http://garantstroy05.ru/public/img/favicon.png',
      'year': 2015
    },
    {
      'type': 'commercial',
      'title': 'Febox',
      'description': 'Веб-студия дизайна',
      'url': 'https://febox.ru/',
      'favicon': 'https://febox.ru/public/img/favicon.png',
      'year': 2014
    },
    {
      'type': 'commercial',
      'title': 'АПЮД',
      'description': 'Ассоциация предпринимателей',
      'url': 'http://apyd.ru/',
      'favicon': 'http://apyd.ru/public/images/favicon.png',
      'year': 2014
    },
    {
      'type': 'commercial',
      'title': 'Турлифт',
      'description': 'Лифтовое оборудование',
      'url': 'http://turlift.ru/',
      'favicon': 'hhttp://turlift.ru/img/favicon.png',
      'year': 2014
    },
    {
      'type': 'commercial',
      'title': 'Строймаркет',
      'description': 'Каталог компании',
      'url': 'http://stroymarketrd.ru/',
      'favicon': 'https://stroymarketrd.ru/public/img/favicon.png',
      'year': 2014
    },
    {
      'type': 'commercial',
      'title': 'Советсткое',
      'description': 'Администрация поселения',
      'url': 'http://sovetskoeselo.ru/',
      'favicon': 'http://sovetskoeselo.ru/public/img/favicon.png',
      'year': 2014
    },
    {
      'type': 'commercial',
      'title': 'Цмурский',
      'description': 'Администрация поселения',
      'url': 'http://cmur.ru/',
      'favicon': 'http://cmur.ru/public/images/favicon.png',
      'year': 2014
    },
    {
      'type': 'commercial',
      'title': 'Люстермаркет',
      'description': 'Интернет-магазин',
      'url': 'http://lustermarket.febox.ru/',
      'favicon': 'http://lustermarket.febox.ru/public/img/favicon.png',
      'year': 2014
    },
    {
      'type': 'personal',
      'title': 'instalator-telegram',
      'description': 'Telegram Bot для автоматизации массфаловинга и управления Instagram аккаунтами',
      'url': 'https://github.com/hazratgs/instalator-telegram',
      'favicon': 'https://assets-cdn.github.com/favicon.ico',
      'year': 2018
    },
    {
      'type': 'personal',
      'title': 'online-storage',
      'description': '⚡️Online implementation of localStorage',
      'url': 'https://github.com/hazratgs/online-storage',
      'favicon': 'https://assets-cdn.github.com/favicon.ico',
      'year': 2018
    },
    {
      'type': 'personal',
      'title': 'crypto-trading-bot',
      'description': '🤖 Трейдинг бот одновременно работающий с несколькими биржами',
      'url': 'https://github.com/hazratgs/crypto-trading-bot',
      'favicon': 'https://assets-cdn.github.com/favicon.ico',
      'year': 2017
    }
  ]
}

export default function appState (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
