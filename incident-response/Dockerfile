FROM node:current-alpine3.11
workdir /usr/src
COPY . .
COPY ./data/${INCIDENT} ./server/data.json
RUN cd /usr/src/client && npm install && npm run build
RUN cp -R /usr/src/client/dist/ /usr/src/server/dist/ && rm -Rf /usr/src/client && mv /usr/src/data /usr/src/server/data
RUN cd /usr/src/server && npm install
EXPOSE 8080
ENV INCIDENT "F01705150050.json"
CMD cd /usr/src/server/ && node index.js