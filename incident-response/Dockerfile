FROM node:current-alpine3.11
ENV INCIDENT "F01705150050.json"
workdir /usr/src
COPY . .
COPY ./data/${INCIDENT} ./server/data.json
RUN cd /usr/src/client && npm install && npm run build
RUN cp -R /usr/src/client/dist/ /usr/src/server/dist/ && rm -Rf /usr/src/client
RUN cd /usr/src/server && npm install
EXPOSE 8080
CMD cd /usr/src/server/ && node index.js