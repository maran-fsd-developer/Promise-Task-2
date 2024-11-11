 // Fetch a cat fact on page load
document.addEventListener("DOMContentLoaded", function () {
  function fetchCatFact() {
    return fetch("https://meowfacts.herokuapp.com/")
      .then((response) => response.json())
      .then((data) => {
        const catFactText = document.getElementById("catFactText");
        catFactText.textContent = data.data[0];
      })
      .catch((error) => {
        console.error("Error fetching cat fact:", error);
      });
  }
  fetchCatFact();
  // Add an event listener to the "refreshButton" button to fetch a new fact when clicked
  document.getElementById("refreshButton").addEventListener("click", () => {
    fetchCatFact();
  });
});
