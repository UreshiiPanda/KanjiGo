# Kanji Go

#### Kanji study CRUD app written in JS



<a name="readme-top"></a>


<!-- Kanji Go Gif -->
![kanji go gif](https://github.com/UreshiiPanda/KanjiGo/assets/39992411/123d62bb-341e-4c6b-b192-941c51e6917d)



<!-- ABOUT THE PROJECT -->
## About The Project
This app has one main purpose - to help Japanese learners memorize their Kanji. Here learners can memorize
their Kanji based on JLPT (Japanese language proficiency test) section since each section has its own 
Document in the DB. Users can create, edit, and delete Kanji in their own personal Kanji lists. Users can
also try out OpenAI's Dall-E program to generate pictures which help them match an image to a given Kanji for
image-based memorization. Dall-E is still an awful AI model but it's kinda funny to see what it comes up with
and the potential is there for this to be an effective Kanji learning method in the near future. 
These pictures can then be loaded into the app to be viewed in the Kanji Pics tab. Some pictures have been pre-loaded
into this app just for demo purposes. Learning Kanji is one of the most laborious parts of learning Japanese, 
so this app experiments with making it easier and more fun.


<h4>Tech Stack:</h4>  Javascript ~ React ~ MongoDB ~ Express ~ Node ~ HTML ~ CSS  <br><br>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED WITH DOCKER -->
## Getting Started With Docker:<br>

0. If you already have Docker installed on your machine, then this app can be simply run with the
   following instructions. The docker-compose.yml contains almost all of the Docker info needed
   to understand the context in which the app runs, including: builds, ports, network, and volume
   storage. The only exception to this are the environment variables which have been placed in a
   .env file in order to protect sensitive keys like your OPENAI_API_KEY. The step for setting up your
   local .env file is included below. Note that these environment variables can also be moved into
   the docker-compose.yml file and more can be read about how to do that here:
   [Docker Env Vars](https://docs.docker.com/compose/environment-variables/set-environment-variables/)

1. Clone all project files into a root working directory.
    ```sh
        git clone https://github.com/UreshiiPanda/KanjiGo.git
    ```
2. Store environment variables by creating ```.env``` in that same root directory.<br>
   Place your environment variables into this file. <br>
      ```
        port=8000
        mongo_db_uri="mongodb://mongo:27017"
        openai_api_key="place your API key here"
      ```
3. From that root directory, run docker compose:
    ```sh
        docker compose up
    ```
4. To stop the app, stop docker compose from another terminal:
    ```sh
        docker compose down
    ```


<br><br>
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED WITHOUT DOCKER -->
## Getting Started Without Docker:<br>

1. Clone all project files into a root working directory.
    ```sh
        git clone https://github.com/UreshiiPanda/KanjiGo.git
    ```
    
2. Setup your MongoDB database, create a new cluster, and host it or connect your local IP to it. Retrieve
   your MongoDB connection string from here. The connection string will look something like this,
   depending on your means of connecting:
   ```
     mongodb+srv://<username>:<password>@cluster0.vj6fual.mongodb.net/?retryWrites=true&w=majority
   ```
   NOTE:  This app will create 5 separate Documents in MongoDB, one document for each JLPT Kanji section.

3. If you wish to use OpenAI's Dall-E image API, then setup an OpenAI account and generate a personal key.
   This key will be needed to generate pictures and it will be placed in a .env folder in the next step.
   ```
     OPENAI_API_KEY="place your API key here"
   ```

4. Store environment variables by creating ```/backend/.env``` in the backend directory.<br>
   Place your environment variables into this file. Replace &lt;username&gt; and &lt;password&gt; in the
   MongoDB connect string with your MongoDB credentials. <br>
      ```
        PORT=8000
        MONGO_DB_URI=mongodb+srv://<username>:<password>@cluster0.vj6fual.mongodb.net/?retryWrites=true&w=majority
        OPENAI_API_KEY="place your API key here"
      ```

      NOTE:  The package.json on the frontend has a proxy setup by default, please adjust this
             according to your own connection needs. The proxy is currently setup to connect to a Docker
             Container, so please change the proxy to the localhost proxy shown below in order to use it
             without Docker. Default ports are set to 8000 for the backend, and 3000 for the frontend. <br>
      ```json
          "proxy": "http://localhost:8000"
      ```
5. A Nodemailer service is integrated with the contact form in the app. [Nodemailer](nodemailer.com) is a Node.js module
   which allows an app to send emails. This app is setup by default to generate and send emails to a fake
   Ethereal email account, and the email link will be sent to you in a JS alert for viewing. Note that
   nodemailer can also be setup to send emails to your personal email, this can be adjusted in the
   controller.mjs file.
   
6. Run the following command in both the frontend and the backend directories to install the
   node modules required for both ends of the app.
   ```sh
      npm install
   ```
   
8. Check that your MongoDB cluster is connected and then start the backend of the app from the
   backend directory:
    ```sh
      node controller.mjs
    ```
    
9. Start the frontend of the app from the frontend directory:
    ```sh
      npm start
    ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

