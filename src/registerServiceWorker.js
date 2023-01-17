/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'Приложение работает из кэша Service Worker.\n' +
        'Для больших деталей, смотрите https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Ошибка при регистрации Servise Worker ')
    },
    cached () {
      console.log('Приложение было кэшированно для автономной работы.')
    },
    updatefound () {
      console.log('Загружается новый контент.')
    },
    updated () {
      console.log('Доступен новый контент; пожалуйста, обновите страницу.')
    },
    offline () {
      console.log('Нет подключения к интернету. Приложение работает в атономном режиме.')
    },
    error (error) {
      console.error('Ошибка в регистрации:', error)
    }
  })
}
