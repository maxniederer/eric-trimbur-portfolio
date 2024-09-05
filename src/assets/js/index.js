// import "../../node_modules/bootstrap/dist/css/bootstrap.css";

let currTheme = 0;
let totalThemes = 4;

function changeTheme() {
  document.body.classList.remove(`theme-${currTheme}`);
  currTheme = (currTheme + 1) % totalThemes; // mod by total themes (idk how many i want)
  if (currTheme > 0) document.body.classList.add(`theme-${currTheme}`);
}
