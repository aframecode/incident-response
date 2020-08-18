# Layout

The application is layed out in three components
* [client](./client/README.md) - A vuejs application utilizing Vuetify and leaflet
* data - The directory you can place you data objects
* server - A basic express application to host the code and api endpoints

# Build
docker build .

* Note new data files must be added to ./data prior to build

# Running
Utilize default incident
```bash
docker run -p 8080:8080 <image sha or tag used>
```

Use custom incident file
```bash
docker run -p 8080:8080 --env INCIDENT=<INCIDENT-ID.json> <image sha or tag used>
```

# Development
If a server side is accessible you may run the client with hot reload using the following command
```bash
cd client && npm run serve
```

# Accessing
The application will be available at the path 127.0.0.1:8080 or on the host you are running the software.