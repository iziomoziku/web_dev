let quote = document.querySelector("#quote");
let result = document.querySelector(".result");
let author = document.querySelector("#author");
let btn = document.querySelector("#button");
let formInput = document.querySelector("#quantity");
let api_key = document.querySelector("#api_key");
let error = document.querySelector("#errorMsg");

function sendForm(event) {
  // let data = { number: formInput.value };
  let data = { number: formInput.value, api_key: api_key.value };

  fetch("http://localhost:3000/get", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      if ("error" in res) {
        error.style.display = "block";
        error.classList.add("alert");
        error.classList.add("alert-danger");
        result.style.display = "none";
        error.innerHTML = res.error.message;
        return;
      }

      error.style.display = "none";
      result.style.display = "block";
      author.innerHTML = res.author;
      quote.innerHTML = `"${res.quote}"`;
    });
}
