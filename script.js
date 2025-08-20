const container = document.getElementById("news-container");

// Example RSS feed (Google News - India)
const rssUrl = "https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en";

// Free API to convert RSS → JSON
const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    data.items.forEach(item => {
      const article = document.createElement("div");
      article.classList.add("article");

      article.innerHTML = `
        <h2><a href="${item.link}" target="_blank">${item.title}</a></h2>
        <p>${item.pubDate}</p>
      `;

      container.appendChild(article);
    });
  })
  .catch(err => {
    container.innerHTML = "<p>⚠️ Failed to load news. Try again later.</p>";
    console.error(err);
  });
