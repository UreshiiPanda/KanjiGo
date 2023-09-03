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
also try out OpenAI's Dall-E program to generate pictures which help them match a image to a given Kanji for
image-based memorization. These pictures can then be loaded into the app to be viewed in the Kanji Pics tab.
Learning Kanji is one the most laborious parts of learning Japanese, so this app aims to make it easier.


<h4>Tech Stack:</h4>  Javascript ~ React ~ MongoDB ~ Express ~ Node ~ HTML ~ CSS  <br><br>


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started:<br>

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
        MONGODB_CONNECT_STRING=mongodb+srv://<username>:<password>@cluster0.vj6fual.mongodb.net/?retryWrites=true&w=majority
        OPENAI_API_KEY="place your API key here"
      ```

      NOTE:  The package.json on the frontend has a proxy setup by default, please adjust this
             according to your own connection needs. Default ports are set to 8000 for
             the backend, and 3000 for the frontend. <br>
      ```json
          "proxy": "http://localhost:8000"
      ```
5. A Nodemailer service is integrated with the contact form in the app. [Nodemailer](nodemailer.com) is a Node.js module
   which allows an app to send emails. This app is setup by default to generate and send emails to a fake
   Ethereal email account, and the email link will be sent to you in an JS alert for viewing. Note that
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

