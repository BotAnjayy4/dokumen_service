function loadPage(page) {
  fetch(page)
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById('page-content');
      container.innerHTML = html;
    });
}
