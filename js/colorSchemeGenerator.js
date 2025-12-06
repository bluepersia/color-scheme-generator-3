function init() {
  const form = document.getElementById("color-scheme-generator-form");
  const colorSchemesList = document.getElementById("color-schemes-list");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const color = formData.get("color-picker");
    const scheme = formData.get("scheme-selector");

    fetch(
      `https://www.thecolorapi.com/scheme?hex=${color.slice(
        1
      )}&mode=${scheme}&count=5`
    )
      .then((res) => res.json())
      .then((data) => {
        colorSchemesList.innerHTML = data.colors
          .map(
            (color) => `
          <li class="color-schemes__item">
            <div class="color-schemes__color-box" style="background-color: ${color.hex.value};"></div>
            <span class="color-schemes__color-code">${color.hex.value}</span>
          </li>
        `
          )
          .join("");
      });
  });
}

export default init;
