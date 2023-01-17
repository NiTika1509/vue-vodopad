export default {
    "ERR_NETWORK": {severity:'error', content: "Ошибка при загрузке данных с сервера"},
    'Default': {severity:'info', content: 'Что-то пошло не так'},
    'logout': {severity:'info', content: 'Вы вышли из системы'},
    'login': {severity:'info', content: 'Добро пожаловать в систему!'},
    'Firebase: Error (auth/user-not-found).': {severity:'error', content: 'Пользователя с таким Email не существует.'},
    'Firebase: Error (auth/wrong-password).': {severity:'error', content: 'Неправильный данные для авторизации'},
    "TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.": { severity:'error', content: "Слишком много обращений к серверу. Попробуйте позже." },
    'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).': {severity:'error', content: 'Доступ к этой учетной записи был временно отключен из-за множества неудачных попыток входа в систему.'}
}



