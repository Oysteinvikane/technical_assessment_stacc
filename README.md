## Technical Assessment - Øystein H. Vikane

### Techstack

- React.js
- CSS / Tailwind CSS
- Axios
- Vercel
- CI/CD (Github actions)
- Jupyter Notebook (For the ML model)

### Project information

This project is a technical assessment task done over 2 days.
The project is a web-application with react.js and its a multipage web-application.
You will find 3 different pages in the web-app; Home, Electricity prices and Prediction.

Home: landing page.

Electricity prices: This page shows you 2 different graphs, 1 for today's prices and one for tomorrows,
Between 00:00 -> 12/14:00 the second graph is not available while we wait for update on the next days prices.
You are able to change the Price Area in a dropdown menu, so you can see the graphs for your area and some more stuff.

Predict: This page takes input for 7 different features; "Global_active_power, Global_reactive_power, Voltage, Global_intensity, Sub_metering_1, Sub_metering_2, Sub_metering_3. The input for those features are sent to a API which runs the machine learning model which is made with the notebook in this project and predicts
the kW usage per min based on the input features. The API returns the prediction and it will show underneath the predict button aswell as the 3 first predictions
you did will be stored and displayed in the boxes on the page.

### Project structure

```
│   .gitignore
│   package-lock.json
│   package.json
│   postcss.config.js
│   README.md
│   tailwind.config.js
│
├───.github
│   └───workflows
│           deploy.yml
│
├───.vercel
│       project.json
│       README.txt
│
└───src
    │   App.css
    │   App.js
    │   App.test.js
    │   constants.js
    │   index.css
    │   index.js
    │   reportWebVitals.js
    │   setupTests.js
    │
    ├───components
    │   │   navbar.jsx
    │   │   priceareadata.jsx
    │   │
    │   └───charts
    │           linechart.jsx
    │           linechartduo.jsx
    │
    ├───pages
    │       electricityprices.jsx
    │       heatmap.jsx
    │       home.jsx
    │
    └───styles
```

Credit:
This project uses data from hvakosterstrommen's API which is available at [https://www.hvakosterstrommen.no]. The electricity prices they use in their API is taken directly from entsoe [https://transparency.entsoe.eu/]
