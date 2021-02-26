import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div class="forecast" id="forecast">
      <div class="row" id="forecast-day-one">
        <div class="col-4">Monday</div>
        <div class="col-4">Clouds</div>
        <div class="col-4">40/45</div>
      </div>
      <div class="row" id="forecast-day-two">
        <div class="col-4">Tuesday</div>
        <div class="col-4">Rain</div>
        <div class="col-4">34/45</div>
      </div>
      <div class="row" id="forecast-day-three">
        <div class="col-4">Wednesday</div>
        <div class="col-4">Clouds</div>
        <div class="col-4">45/52</div>
      </div>
      <div class="row" id="forecast-day-four">
        <div class="col-4">Thursday</div>
        <div class="col-4">Clear</div>
        <div class="col-4">45/48</div>
      </div>
      <div class="row" id="forecast-day-five">
        <div class="col-4">Friday</div>
        <div class="col-4">Rain</div>
        <div class="col-4">45/46</div>
      </div>
    </div>
  );
}
