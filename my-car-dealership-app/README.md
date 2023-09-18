# My Car Dealership App

This is a web application built with React that serves as a comprehensive management system for car dealerships. It includes features for managing inventory and work orders.

## Installation

To install the application, clone the repository and run the following command in the project directory:

```
npm install
```

## Usage

To start the application, run the following command in the project directory:

```
npm start
```

This will start the development server and open the application in your default browser.

## Components

The application includes the following components:

- `Inventory`: Displays the inventory of cars in the dealership. It receives the inventory data as a prop.
- `Order`: Displays the details of an order. It receives the order data as a prop.

## Pages

The application includes the following pages:

- `InventoryPage`: Displays the `Inventory` component and fetches the inventory data from the server using the `api` service.
- `OrderPage`: Displays the `Order` component and fetches the order data from the server using the `api` service.

## Services

The application includes the following services:

- `api`: Interacts with the server API to fetch and update data. It includes functions for fetching the inventory and orders, and for creating and updating orders.

## Utils

The application includes the following utility functions:

- `formatDate`: Formats a date string in a human-readable format.

## Contributing

Contributions to the project are welcome. To contribute, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.