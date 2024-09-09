let currTheme = 0;
const totalThemes = 6;

if (!localStorage.getItem("theme")) localStorage.setItem("theme", "theme-0");
currTheme = Number(localStorage.getItem("theme").slice(-1));
if (isNaN(currTheme)) currTheme = 0;
updateTheme(currTheme);

function changeTheme() {
  currTheme = (currTheme + 1) % totalThemes;
  updateTheme(currTheme);
  localStorage.setItem("theme", `theme-${currTheme}`);
}

function updateTheme(i) {
  document.documentElement.setAttribute("data-theme", `theme-${i}`);
}
