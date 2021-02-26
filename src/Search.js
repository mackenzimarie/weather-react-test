import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");

  function updateCity(event) {
    event.preventDefault();
    console.log(event.target.value);
    setCity(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    alert(`Searching for ${city}`);
  }

  return (
    <div class="search">
      <form>
        <div class="search-city">
          <label for="input-city-here" class="city-search-label"></label>
          <div class="button-in">
            <input
              type="text"
              class="city-search-control"
              placeholder="Search for a city..."
              autocomplete="off"
              id="inputCity"
              onChange={updateCity}
            />
            <button
              type="submit"
              id="search-icon"
              class="icon"
              onSubmit={handleSearch}
            >
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
