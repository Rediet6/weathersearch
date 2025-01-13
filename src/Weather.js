import React, { useState } from "react";
import axios from "axios";
import Animation from "./Animation";
export default function Weather() {
  let [citys, updateCity] = useState("");
  let [textone, updatetextone] = useState("");
  let [textdesc, updatetextdesc] = useState("");
  let [texthum, updatetexthum] = useState("");
  let [textwind, updatetextwind] = useState("");
  const [tempr, setTemp] = useState(null);
  const [showList, setShowList] = useState(false);
  function newcity(event) {
    event.preventDefault();
    updateCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (citys !== "") {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${citys}&APPID=945e96f089c7d6845eb2dd3f9e78f71e&units=metric`;

      axios.get(url).then((response) => {
        const data = response.data;
        setTemp(data.main.temp);
        const temp = Math.round(data.main.temp);
        const desc = data.weather[0].description;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;

        updatetextone(`Temperature: ${temp} °C`);
        updatetextdesc(`Description: ${desc}`);
        updatetexthum(`Humidity: ${humidity}%`);
        updatetextwind(`Wind: ${wind} m/s`);
      });
      setShowList(true);
    }
  }
  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="city"
          placeholder="Enter a city.."
          onChange={newcity}
        />
        <input type="submit" value="Search" />
      </form>
      {showList && (
        <ul>
          <li>{textone}</li>
          <li>{textdesc}</li>
          <li>{texthum}</li>
          <li>{textwind}</li>
          <br />
          <li>
            {tempr < 30 && <Animation icon="CLOUDY" />}
            {tempr > 30 && <Animation icon="CLEAR_DAY" />}
          </li>
        </ul>
      )}
    </div>
  );
}
