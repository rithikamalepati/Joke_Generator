* Objective:
The goal of this project is to create a dynamic website that fetches and displays jokes from a public API (JokeAPI). The website allows users to enter their name and receive a personalized joke in return, leveraging the server-side capabilities of Express.js, the HTTP client Axios for API integration, and the EJS templating engine for rendering HTML.

* Key Features:

User Input Form: The home page (index.ejs) provides a simple form where users can enter their name.

API Integration (JokeAPI): The application makes an HTTP request to the JokeAPI using Axios to retrieve a joke. The joke can be personalized based on the user's input (name), although the current version fetches a generic joke from the API.

Data Display: After receiving the joke from the API, the server renders a new page (joke.ejs) that displays the joke in a clean, user-friendly format.

Responsive Design: The website's layout is styled using CSS, making it visually appealing and responsive, ensuring that the page looks good on both desktop and mobile devices.

Reusable Templates: The project uses EJS (Embedded JavaScript) as a templating engine, which enables code reuse and dynamic content generation.

* Technologies Used:

Node.js: A JavaScript runtime used to build the server-side logic.

Express.js: A web application framework for Node.js to handle routing and HTTP requests.

Axios: A promise-based HTTP client used to make API requests to the JokeAPI.

EJS: A templating engine that helps dynamically generate HTML pages with embedded JavaScript.

HTML/CSS: Used for structuring and styling the web pages to ensure an interactive and user-friendly design.

* Project Structure:

app.js: The main server file that handles user requests, retrieves data from the API, and renders the appropriate views (HTML pages).

views/: A folder containing EJS files:
index.ejs: The home page where users can input their name.
joke.ejs: The result page where the joke is displayed after it is fetched from the API.

public/: A folder containing static assets like CSS files.
styles.css: The CSS file that defines the style for the website, ensuring it has a clean and professional look.
* How it Works:

When users visit the home page (http://localhost:3000), they see a form where they can input their name.

Upon submitting the form, the input (name) is sent to the server via a POST request to /joke.

The server uses Axios to make an API request to the JokeAPI and retrieve a random joke.

The server then renders the joke on a new page (joke.ejs), showing it to the user.

The user can return to the home page and request another joke if they wish.
