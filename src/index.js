//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const dayStyle = {
  color: ""
};

const timeOfDay = new Date().getHours();

const messages = ["Good morning", "Good afternoon", "Good evening"];
let message;

if (timeOfDay >= 0 && timeOfDay <= 12) {
  message = messages[0];
  dayStyle.color = "red";
} else if (timeOfDay > 12 && timeOfDay <= 18) {
  message = messages[1];
  dayStyle.color = "green";
} else {
  message = messages[2];
  dayStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={dayStyle}>
    {message}
  </h1>,
  document.getElementById("root")
);
