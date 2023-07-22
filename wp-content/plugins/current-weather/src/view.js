import { getWeather } from "./api";

import { populateWeather } from "./WeatherPill";

import Flickity from "flickity";

window.addEventListener( 'DOMContentLoaded', () => {

    // element containing location
    const locationElement = document.querySelector(
    ".wp-block-create-block-current-weather__location"
    );

    // get lat and lon from html data attributes
    const latitude = locationElement.dataset.latitude;
    const longitude = locationElement.dataset.longitude;

    // run the following code asynchronously
    (async () => {
    
    // if there is no latitude or longitude, quit
    if (!latitude || !longitude) {
        return;
    }

    // get the weather data using the latitude and longitude
    const daily = await getWeather(latitude, longitude);

    // if there is weather data, populate the weather pills
    if (daily) {
        populateWeather(daily);
    }
    })();

    // Initialize the variable where we will enable the carousel outside of the function so it's always available.
    var flkty = "";

    // initialize function to attach flickity to container with options
    // pass in event object to check if it's a resize event
    function init(event) {
    let options = {
        freeScroll: true,
        contain: true,
        groupCells: true,
        prevNextButtons: false,
        pageDots: false,
    };

    // if it's the first time running, event will be undefined, so don't destroy
    // if it's a resize event, destroy the carousel so it can be re-initialized
    if(undefined !== event && "resize" === event.type) {
        flkty.destroy();
    }

    // if the window is less than 768px, don't contain the carousel
    if (window.innerWidth < 768) {
        options.contain = false;
    }

    // initialize flickity attached to the container
    flkty = new Flickity(".wp-block-create-block-current-weather__wrap", options);
    }

    // Add resize event listener calling init function when window is resized
    window.addEventListener("resize", init);

    init();
});