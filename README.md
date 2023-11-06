## MyContacts API

This is a simple API built with Express using PostgreSQL to add contacts and categories.

#### Rodando a API
To run this API, you need to have Docker installed to run a PostgreSQL instance. After installation, open the terminal and execute the following command to download and run a PostgreSQL image:
```
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=password -e POSTGRES_DB=mycontacts -p 5432:5432 -d postgres
```

This will start a PostgreSQL container already configured to run the backend correctly.
Make sure to stop the local Windows PostgreSQL process to avoid conflicts with Docker.

#### To stop the container:
```
docker stop pg
```

#### Commands to run the project:
Before running the API, you need to install the dependencies. Ensure you have Node.js and Yarn installed on your system.

#### Clone this repository:

```
git clone https://github.com/endriwmsi/mycontacts-api.git
cd mycontacts-api
```

#### Install the dependencies:
```
yarn install
```

#### Start the development server:
```
yarn dev
```

Now, the API will be running locally at http://localhost:3000.
You can test the API using the Insomnia software.
For a complete experience, download the application's front-end from the repository:
```
git clone https://github.com/endriwmsi/mycontacts-front.git
```