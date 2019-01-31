FROM node:dubnium-alpine
ADD ./ /app
WORKDIR /app
EXPOSE 5010
ENTRYPOINT ["npm", "start"]