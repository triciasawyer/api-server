# API server

## Author: Tricia Sawyer

### Problem Domain

This project involves creating a straightforward REST API with a SQL database and an Express server. It serves as a foundation for building robust web applications that require backend services.

### Initializing and Running the Application

To get started with the API server, follow these steps:

- Clone this repository to your local machine.
- Run `npm install` to install the project's dependencies.
- Before running the server, make sure to set the following environment variables:

`PORT` and `DATABASE_URL`

- Start the server using `nodemon` to automatically restart it on code changes.
- Execute the command `npm test` to run the project's tests.

### Routes

The API server provides the following routes for interacting with the database:

- 404 bad route: `/foo`
- GET: `/pet`
- GET: `/pet/:id`
- GET: `/owner`
- GET: `/owner/:id`
- POST: `/pet`
- POST: `/owner`
- PUT: `/owner/:id`
- PUT: `/pet/:id`
- DELETE: `/owner/:id`
- DELETE: `/pet/:id`

### Deployed version

Check out the deployed version of the API server at [Render deploy](https://api-server-prod-3588.onrender.com). It's accessible in a live environment for testing and integration purposes.

### Links and Resources

- Github Actions: [View Actions:](https://github.com/triciasawyer/api-server/actions)
- Deployed API Server: [Access API Server Prod](https://api-server-prod-3588.onrender.com)

### UML Diagrams

![Phase 1 UML Diagram](./assets/phase1.png)
![Phase 2 UML Diagram](./assets/phase2.png)

### Pull Request links

[My Pull Request](https://github.com/triciasawyer/api-server-ethanStorm/pull/1)
[Ethan's Pull Request](https://github.com/triciasawyer/api-server/pull/2)
