FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
RUN rm index.html
RUN rm 
COPY dist/Cloudiator-ui .
