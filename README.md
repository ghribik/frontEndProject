# Bespoke Weather Forecast (BWF) Application  21-OCT-2022

INTRODUCTION:

This is an application developed to demonstrate some basic front end features like carousel, password field, dropdown, etc. using the bootstrap library at: https://getbootstrap.com/
This application also utilizes Javascript and jquery library code to execute AJAX request, event handlers, DOM manipulation, callback functions, string literals, and setTimeout functions to name a few.


PURPOSE:

The BWF app will take in a user defined city from any location worldwide and return the various weather data and forecast for the current day at that city. Some data returned includes:
the current weather description, current temperatures (max, min, and avg), current wind conditions, and the sun and moon data (sunrise, sunset, total hours of sunlight, moonrise, moonset, and moon phase).


LIMITATIONS:

The current weather is updated quite frequently, but forecasts are generated daily. There will be issues if a user queries the weather forecast for cities in a different day. There are two 
requirements in order to use this publicly available app. The first is an API key is needed from weatherstack (which are offered for free) and a proxy to connect the HTTPS page to a
HTTP api from herokuapp. See items 1 and 2 below:

    1) The application does require an API key, which is free from https://weatherstack.com/. There is a dropdown menu built into the app that will open this URL in a new tab.

    2) Additionally the application is published on github pages which uses HTTPS and the weatherstack API free version uses HTTP which causes a conflict because the HTTP link
    is considered insecure information. The workaround used for this is a herokuapp demonstration application that provides a proxy in order to run the HTTP content on an HTTPS site.
    The link to this is https://cors-anywhere.herokuapp.com/corsdemo which is also contained in the dropdown menu built into the app.

Taking into consideration the two items above, the app will run from any computer using the following URL: https://ghribik.github.io/frontEndProject/


CREDITS

**Special thanks to the Galvanize team for teaching me all the awesome technical coding expertise required to complete this project.