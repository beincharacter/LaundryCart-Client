# LaundryCart

LaundryCart is a comprehensive full-stack application designed to streamline the process of managing laundry orders. Users can create and customize orders based on their specific requirements, track the status of their orders, and access a centralized dashboard to monitor all their laundry-related activities. Implemented with a focus on security and user authentication, this app incorporates JWT authentication to ensure secure access to user data and features.

## Key Features

- **Full-Stack Implementation**: Developed using a combination of front-end and back-end technologies to create a seamless user experience.
- **Order Creation**: Users can easily create laundry orders, specifying quantities and other relevant details to tailor their requests.
- **Order Tracking**: Provides users with real-time updates on the status of their orders, enhancing transparency and communication.
- **Dashboard**: Offers a centralized dashboard where users can view all their orders and their respective statuses at a glance, improving organization and efficiency.
- **JWT Authentication**: Implements JSON Web Token (JWT) authentication for secure user authentication and authorization, ensuring data privacy and integrity.

## Live Demo

Check out the live demo [here](#).

## GitHub Repository

Explore the project on GitHub: [LaundryCart](https://laundryservice-wrgh.onrender.com/)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**:
    ```bash
    // client
    git clone https://github.com/beincharacter/LaundryCart-Client.git
    git clone https://github.com/beincharacter/LaundryCart-Server.git
    cd LaundryCart-Client
    cd LaundryCart-Server

    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add the following:
    ```env
    JWT_SECRET=your_jwt_secret
    MONGO_URI=your_mongo_uri
    PORT=5000
    ```

4. **Start the application**:
    ```bash
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register or log in to your account.
3. Create a new laundry order by specifying quantities and other relevant details.
4. Track the status of your orders in real-time via the dashboard.

## Configuration

- **JWT Authentication**: Set up a secret key for JWT in the `.env` file.
- **MongoDB**: Set up a MongoDB database and get your connection URI.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this `README.md` to better suit your project's needs. Happy coding!
