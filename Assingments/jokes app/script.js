async function GetNewJoke() {
    
  const response = await fetch(
    "https://official-joke-api.appspot.com/jokes/random"
  );
  console.log(response);
  const data = await response.json();

  document.getElementById("setup").innerText = data.setup;
  document.getElementById("punchline").innerText = data.punchline;
}
