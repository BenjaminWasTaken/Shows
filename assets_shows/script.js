let shows = [];

function addShow(name, theme) {
  let show = { name: name, theme: theme };
  shows.push(show);
  console.log(`Added "${name}" -> "${theme}" to shows.`);
  displayShows();
}

function displayShows() {
  let showList = document.querySelector('#show-list');
  showList.innerHTML = '';
  for (let i = 0; i < shows.length; i++) {
    let show = shows[i];
    let li = document.createElement('li');
    li.textContent = `"${show.name}" -> "${show.theme}"`;
    showList.appendChild(li);
  }
}

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  let nameInput = document.querySelector('#show-name');
  let themeInput = document.querySelector('#show-theme');
  let name = nameInput.value;
  let theme = themeInput.value;
  addShow(name, theme);
  nameInput.value = '';
  themeInput.selectedIndex = 0;
});
