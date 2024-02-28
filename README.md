# Movies API & Frontend

Movies is a full-stack application consisting of a Spring Boot backend (Movies API) and a React frontend. The backend provides a simple API related to movies, leveraging Spring Data MongoDB, while the frontend interacts with this API to present movie information and reviews.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)

## Features

- **Movie Information:** Retrieve details about movies, including title, release date, trailer link, and more.
- **Review System:** Allow users to add reviews for movies.
- **Data Persistence:** Store movie information and reviews in a MongoDB database using Spring Data MongoDB.
- **RESTful Endpoints:** Expose RESTful endpoints for easy integration with other applications.
- **Frontend UI:** A React-based frontend for a user-friendly interface.

## Technologies Used

### Backend

- Java 17
- Spring Boot 3
- MongoDB
- Lombok

### Frontend

- React
- Axios

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Damples06/Movie-Rating-Site
   cd WeatherWebApp
   ```
   
2. **Build and Run:**

   ```bash
   ./mvnw clean install
   ./mvnw spring-boot:run
   ```
   
3. **Access the Application:**

   Open your web browser and go to http://localhost:5454.

## Usage

**Movie Information**
   
   To retrieve details for a specific movie, use the following endpoint:
   
   ```
      GET /api/v1/movies/{imdbId}
   ```
   Example:
   
   ```bash
      curl http://localhost:5454/api/v1/movies/tt1234567
   ```

**Reviews**
   
   To create a review for a movie, use the following endpoint:   
   
   ```
      POST /api/v1/reviews
   ```
   
   Example:
   
   ```bash
      curl -X POST -H "Content-Type: application/json" -d '{"reviewBody": "Great movie!", "imdbId": "tt1234567"}' http://localhost:5454/api/v1/reviews
   ```

 ## Configuration

   Configure the application properties in application.yml for MongoDB connection.
   
   ```yaml
      server:
        port: 5454
      spring:
        data:
          mongodb:
            database: ${MONGO_DATABASE}
            uri: mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}
   ```

## Contributing

   Contributions are welcome! Feel free to open issues and pull requests.
   Replace `<repository_url>` with the actual URL of your Movies repository. Make sure to mention the frontend directory (assuming it's called `frontend`), and provide instructions for installing dependencies and starting the frontend. If your frontend has additional configurations, you may include those as well.
