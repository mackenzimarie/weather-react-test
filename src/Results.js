import React from "react";
import "./Results.css";

export default function Results() {
  return (
    <div class="results">
      <h2>Monday 5:00pm</h2>
      <h1 id="city">Seattle</h1>
      <div class="details">
        <p>
          <span id="temperature">40</span>
          <span href="#" class="units active" id="fahrenheit">
            ˚F
          </span>
          <span class="units seperator">|</span>
          <span href="#" id="celcius" class="units">
            ˚C
          </span>
        </p>
        <div class="row">
          <i id="icon" class="col-6 fas fa-cloud"></i>
          <h3 class="col-6">
            <span id="weather">Cloudy</span>
            <br />
            <span id="humidity">Humidity: 40%</span>
            <br />
            <span id="wind">Wind: 2mph</span>
          </h3>
        </div>
      </div>
      <div></div>
    </div>
  );
}
