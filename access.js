var isAdmin = confirm('Вы админ?'); 
if(isAdmin) {
    prompt('Введите пароль') === 'imbatman' ? alert('Добро пожаловать!') : alert('Пароль не верен')
} else {
    alert('Вход отменен');
}
