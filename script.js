const url = 3e1f1531aee142a7b978c7b0421e5d9c

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const container = document.getElementById("news-container");
    container.innerHTML = "";

    data.articles.forEach(article => {
      const div = document.createElement("div");
      div.className = "article";

      div.innerHTML = `
        <img src="${article.urlToImage || ''}" alt="News Image">
        <h2>${article.title}</h2>
        <p>${article.description || ''}</p>
        <a href="${article.url}" target="_blank">Read More</a>
      `;

      container.appendChild(div);
    });
  } catch (error) {
    console.error("Error fetching news:", error);
  }
}

fetchNews();
