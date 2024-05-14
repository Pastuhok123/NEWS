const apiKey = "43a7338033d54223a6e1f68a3855d029";
const baseURL = "https://newsapi.org/v2/everything";

async function getNews(query) {
  try {
    // Відправка запиту до API новин з використанням ключа API та запиту користувача
    const response = await fetch(`${baseURL}?apiKey=${apiKey}&q=${query}`);
    const data = await response.json(); // Отримання відповіді та конвертування її в об'єкт JavaScript
    const articles = data.articles; // Отримання масиву статей з відповіді
    
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = ""; // Очищення контейнера перед відображенням нових статей
    
    articles.forEach(article => {
      // Створення обгортки для кожної статті
      const newsWrapper = document.createElement("div");
      newsWrapper.classList.add("news-wrapper");
      
      // Створення заголовку статті
      const title = document.createElement("h2");
      title.textContent = article.title;
      
      // Створення опису статті
      const description = document.createElement("p");
      description.textContent = article.description;
      
      // Створення відомості про джерело статті
      const source = document.createElement("p");
      source.textContent = `Source: ${article.source.name}`;
      
      // Створення посилання на статтю
      const readMoreLink = document.createElement("a");
      readMoreLink.href = article.url; // Встановлення посилання на основі URL статті
      readMoreLink.textContent = "Read more"; // Встановлення тексту посилання
      readMoreLink.target = "_blank"; // Відкриття посилання в новій вкладці
      
      // Додавання елементів до обгортки статті
      newsWrapper.appendChild(title);
      newsWrapper.appendChild(description);
      newsWrapper.appendChild(source);
      newsWrapper.appendChild(readMoreLink);
      
      // Додавання обгортки статті до контейнера новин
      newsContainer.appendChild(newsWrapper);
    });
  } catch (error) {
    console.error(error); // Вивід помилки у випадку її виникнення
  }
}

// Приклад виклику функції для отримання новин за певним запитом
getNews("technology");

