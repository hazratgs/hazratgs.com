const initialState = {
  books: [
    {
      title: 'Грокаем алгоритмы.<br/>Иллюстрированное пособие для программистов и любопытствующих',
      author: 'Адитья Бхаргава',
      category: 'Алгоритмы',
      img: 'https://ozon-st.cdn.ngenix.net/multimedia/1016990496.jpg',
      audio: false,
      review: 'Написано простым, доступным языком и разжёвано так, что осталось только проглотить.',
      score: '5.0'
    },
    {
      title: 'Как люди думают',
      author: 'Дмитрий Чернышев',
      category: 'Психология',
      img: 'https://kniga.biz.ua/images/goods/big/3997.jpg',
      audio: true,
      review: 'Это конечно не шедевр, но она отлично дополняет и местами структурирует знания которые были получены из подобных книг.',
      score: '4.7'
    },
    {
      title: 'Google. <br/>Прорыв в духе времени',
      author: 'Дэвид Вайз, Марк Малсид',
      category: 'Бизнес',
      img: 'https://book-audio.com/covers/v/vaiz-devid-a-google-proryv-v-dukhe-vremeni-the-google-story-inside-the-hottest-business.jpg',
      audio: true,
      review: 'Вайз по-настоящему классно пишет. Жаль, что не знаю английский, иначе прочитал бы в оригинале.',
      score: '4.8'
    },
    {
      title: 'JavaScript: сильные стороны',
      author: 'Дуглас Крокфорд',
      category: 'Разработка',
      img: 'https://ozon-st.cdn.ngenix.net/multimedia/1005016241.jpg',
      audio: false,
      review: 'Книга написана очень доступно, хороша для упорядочения знаний. Из плохого - синтаксические диаграммы, громоздкие и ненужные.',
      score: '4.4'
    },
    {
      title: 'JavaScript. Шаблоны',
      author: 'Стоян Стефанов',
      category: 'Разработка',
      img: 'https://s3-goods.ozstatic.by/2000/164/193/10/10193164_0.jpg',
      audio: false,
      review: 'В книге описывается масса примеров хорошего и плохого кода, с подробными пояснениями что такое хорошо и что такое плохо.',
      score: '4.5'
    },
    {
      title: 'JavaScript. Подробное руководство',
      author: 'Дэвид Флэнаган',
      category: 'Разработка',
      img: 'https://s4-goods.ozstatic.by/2000/147/11/1/1011147_0.jpg',
      audio: false,
      review: 'Данную книгу лично я использовал только как справочник, изредка в неё заглядывая Для новичка лучше не найти: настолько просто всё расписано, что не понять не возможно.',
      score: '5.0'
    },
    {
      title: 'PHP 5. В подлиннике',
      author: 'Дмитрий Котеров',
      category: 'Разработка',
      img: 'https://img-fotki.yandex.ru/get/27964/308080679.7/0_166118_c55c9eff_orig.jpg',
      audio: false,
      review: 'Книга очень хорошая. Начал изучать программирование именно с нее.',
      score: '5.0'
    },
    {
      title: 'PHP. Объекты, шаблоны и методики программирования',
      author: 'Мэт Зандстра',
      category: 'Разработка',
      img: 'https://ozon-st.cdn.ngenix.net/multimedia/1002134878.jpg',
      audio: false,
      review: 'Описывается все понятным языком, достаточно примеров, мало воды. Все что нужно для хорошей книги.',
      score: '5.0'
    }
  ]
}

export default function appState (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
