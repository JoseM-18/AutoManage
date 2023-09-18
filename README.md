# My Car Dealership App

This is a React app for managing inventory and orders for a car dealership. It uses a PostgreSQL database for storing the data.

## Project Structure

The project has the following files:

- `public/index.html`: This file is the HTML template for the React app.
- `public/favicon.ico`: This file is the favicon for the React app.
- `src/App.js`: This file is the main component of the React app. It renders the navigation and the routes for the pages.
- `src/components/Inventory.js`: This file exports a component `Inventory` which displays the inventory of the car dealership.
- `src/components/Order.js`: This file exports a component `Order` which displays the order details of the car dealership.
- `src/pages/InventoryPage.js`: This file exports a component `InventoryPage` which renders the `Inventory` component and handles the logic for fetching the inventory data from the server.
- `src/pages/OrderPage.js`: This file exports a component `OrderPage` which renders the `Order` component and handles the logic for fetching the order data from the server.
- `src/services/api.js`: This file exports functions for making HTTP requests to the server. It uses the `axios` library.
- `src/utils/formatDate.js`: This file exports a function `formatDate` which formats a date string to a human-readable format.
- `App.css`: This file contains the CSS styles for the React app.
- `index.js`: This file is the entry point of the React app. It renders the `App` component to the DOM.
- `setupTests.js`: This file is the setup file for running tests with `Jest` and `Enzyme`.
- `package.json`: This file is the configuration file for npm. It lists the dependencies and scripts for the project.
- `.env`: This file contains environment variables for the project, such as the server URL and API keys.

## Getting Started

To run the app, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Create a `.env` file in the root directory and set the environment variables for the server URL and API keys.
4. Start the app by running `npm start`.

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Create a pull request to the original repository.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.