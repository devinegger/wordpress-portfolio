const cities = [
  "Dallas",
  "Sante Fe",
  "Sacramento",
  "Phoenix",
  "Des Moines",
  "Greenville",
];

window.addEventListener( 'DOMContentLoaded', () => {

  // return a random city (string) from the cities array
  function randomCity() {
    let cityIndex = Math.floor(Math.random() * cities.length);
    return cities[cityIndex];
  }



  // swap the current city with a new random city, making sure that it's not the same
  function swapCity() {
    let newCity = randomCity();
    while (currentCity === newCity) {
      newCity = randomCity();
    }
    currentCity = newCity;
    return currentCity;
  }

  // grab container for the animating random city
  const citiesContainer = document.querySelector('.cities');
  // set initial random city and apply it to the cities container
  let currentCity = randomCity();
  citiesContainer.innerHTML = currentCity;

  // add class for animating out,
  // swap city text,
  // add class for animating back in,
  // then remove animation classes
  setInterval(() => {
    citiesContainer.classList.add("exit");
    setTimeout(() => {
      citiesContainer.innerHTML = swapCity();
      citiesContainer.classList.add("enter");
      citiesContainer.classList.remove("exit");
    }, 300);
    setTimeout(() => {
      citiesContainer.classList.remove("enter");
    }, 800);
  }, 2000);
} );






