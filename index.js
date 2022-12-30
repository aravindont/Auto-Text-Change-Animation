const containerEl = document.querySelector(".container");

const careers = [
  "Web Developer",
  "Web Designer",
  "Front End Developer",
  "Instructor",
  "Blogger",
];

let careerIndex = 0;

let characterIndex = 0;
function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h1>I am ${
    careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"
  } ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
  if (characterIndex === careers[careerIndex].length) {
    characterIndex = 0;
    careerIndex++;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 200);
}
updateText();
