# Layout

The application is layed out in three components
* client - A vuejs application utilizing Vuetify and leaflet
* data - The directory you can place you data objects
* server - A basic express application to host the code and api endpoints

# Building
docker build . -e INCIDENT=<your incident file>

# Running
docker run -p 8080:8080 <image sha or tag used>

# Accessing
The application will be available at the path 127.0.0.1:8080 or on the host you are running the software.