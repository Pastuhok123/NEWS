document.addEventListener('DOMContentLoaded', function() {
    displayProfileInfo();
});

function displayProfileInfo() {
    // Отримати доступ до контейнера для відображення інформації про профіль
    var profileInfoContainer = document.getElementById('news-container');

    // Отримати дані про користувача з localStorage
    var userInfo = JSON.parse(localStorage.getItem('user'));

    // Перевірити, чи дані профілю доступні
    if (userInfo) {
        // Створити HTML розмітку для відображення інформації про профіль
        var profileHTML = '<h2>Інформація про користувача</h2>';
        profileHTML += '<p><strong>Ім\'я:</strong> ' + userInfo.name + '</p>';
        profileHTML += '<p><strong>Email:</strong> ' + userInfo.email + '</p>';
        profileHTML += '<p><strong>Роль:</strong> ' + userInfo.role + '</p>';

        // Вставити HTML розмітку в контейнер для профілю
        profileInfoContainer.innerHTML = profileHTML;
    } else {
        // Якщо дані профілю відсутні, відобразити відповідне повідомлення
        profileInfoContainer.innerHTML = '<p>Інформація профілю відсутня.</p>';
    }
}
