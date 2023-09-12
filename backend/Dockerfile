FROM node:latest

ARG mongo_db_uri
ARG port
ARG openai_api_key

WORKDIR /

COPY ./package.json ./
COPY ./package-lock.json ./

ENV MONGO_DB_URI=$mongo_db_uri
ENV PORT=$port
ENV OPENAI_API_KEY=$openai_api_key

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "node", "controller.mjs" ]
