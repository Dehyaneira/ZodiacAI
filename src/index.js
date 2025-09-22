function displayPrediction(response) {
  new Typewriter("#prediction", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePrediction(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0e93e42412aact309f35c9990ed8oba3";
  let prompt = `User instructions: Your mission is to generate an horoscope prediction about ${instructionsInput.value}`;
  let context =
    "You are a professional astrologer with a great sense of humor. Do not put html or ` at the beggining. Just display the prediction not a context in 6 lines. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let predictionElement = document.querySelector("#prediction");
  predictionElement.classList.remove("hidden");
  predictionElement.innerHTML = `<div class="generating"> Generating your prediction ⏳ </div>`;
  axios.get(apiUrl).then(displayPrediction);
}
let predictionFormElement = document.querySelector("#instructions");
predictionFormElement.addEventListener("submit", generatePrediction);
