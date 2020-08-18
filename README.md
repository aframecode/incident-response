# Layout

The application is layed out in three components
* [client](./client/README.md) - A vuejs application utilizing Vuetify and leaflet
* data - The directory you can place you data objects
* server - A basic express application to host the code and api endpoints


# Install steps

## Prerequisites
1. Docker

## Build
1. Copy new data to the ./data
2. Run the following command from this directory and take not of the generate id (you may also tag the image)
```bash
docker build .
```

# Running
You may run the application with the default data file, or you may supply an additional incident.

## Default Incident
```bash
docker run -p 8080:8080 <image sha or tag generate above>
```

## Custom incident file
```bash
docker run -p 8080:8080 --env INCIDENT=<INCIDENT-ID.json> <image sha or tag used>
```

### Accessing the running instance
The application will be available at the path 127.0.0.1:8080 or on the host you are running the software.

# Development
Client with hot reload can be run using the following command
```bash
cd client && npm run serve
```

# Retrospective
Notes looking back at the application

## Improvements or best practices

1. Simplified client side approach such as pureJS or LitHTML, with such a geospatial aspect VueJs was not necessary and potentially added integration cost
2. Additional objects drawn on the graph, so much time was spent setting up the framework that visualization suffered
3. Route analysis, between units and fire department with the incident
4. Persistent Store to cache data items
5. Normalized server side to allow for proper long term API versioning and automated doc generation. Separation of logic into api/processing
6. The addition of server side logging to assist in monitoring of production instances
7. Organized component model on the client side. Due to the rush most of the functionality is in a single file, properly utilizing the component model would have allowed for better separation of logic
8. Visualization consistency, due to using Vuetify and leaflet the visuals are not consistent.

## Time spent

I spent a little over 5 hours on the project with several small breaks. An hour was lost to testing integration of the originally selected visualization framework (Cesium), however after evaluating initial issues I elected to move to leaflet. 

## Screenshots
* [landing](./screenshots/landing.png)
* [mobile](./screenshots/mobile.png)
* [apparatus](./screenshots/apparatus.png)
* [description](./screenshots/description.png)
* [address](./screenshots/address.png)