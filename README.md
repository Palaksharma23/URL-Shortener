
<h1 align="center"> URL Shortener </h1> <br>
<p align="center">
  <a href="https://urlshortenerapp.onrender.com/">
    <img alt="URL Shortener" title="URL Shortener" src="https://i.ibb.co/3S28Mx1/screely-1682321272615.png" width="450">
  </a>

</p>

<p align="center">
  Link shortening made simple.
</p>

<p align="center">
  <a href="https://urlshortenerapp.onrender.com/">URL Shortener App
    
  </a>

</p>


## Table of Contents

- [Introduction](#introduction)
- [Important Links](#important-links-related-to-the-project)
- [Technology Used](#technology-used)
- [Features](#features)
- [Top Level Directory Structure](#top-level-directory-structure)
- [Screenshots of the project](#screenshots-of-the-project)
- [Installation](#installation)
- [Contributions](#contributions)
- [Feedback](#feedback)


## Introduction

Our **URL shortener** app simplifies long and complex URLs, making it **easy to share and remember links**. With just a few clicks, our app generates short, easy-to-type URLs that redirect to your desired page, saving you time and making it simple to share links on social media, email, or text messages.

Say goodbye to long and complicated URLs and hello to our user-friendly URL shortener ❤.

### Important links related to the project
* Deployed Website 👉 https://urlshortenerapp.onrender.com/
* Postman API Documentation 👉 https://documenter.getpostman.com/view/27055315/2s93Y5Nf7N

## Technology Used

| Technology | Features |
|------------|----------|
| Node.js, Express.js    |  Backend of the application  |   
|    MongoDB Atlas, Mongoose    | Database for the application|
| Redis Client | Fast and efficient in memory data storage|
| Bcrypt     |    Password Management      |   
| JSON Web Token     |    Authorization and Authentication |     |   Pug      |  Server Side Rendering |
| Render     |     Deployment     |  
| Postman | API Testing, Debugging and Documentation |
 
## Features

Things you can do with URL Shortener:

* Convert the Original URL to the Short URL
* Sign up for the application
* Log in to the application
* Log out of the application
* Short URL automatically redirects to the original URL
* Security Features such as Rate Limiting, Password Encryption, etc.

## Top-level directory structure

    
    ├── controllers             # This folder contains the controllers of the application. These controllers handle incoming requests from clients, interact with the model to retrieve or update data, and send responses back to the client.
    ├── models                  # This folder handles the data and manages the schema of the data to be stored in the database.
    ├── public                  # This folder handles images, JavaScript, and CSS that are related to the website and can be accessed by the client.
    ├── Routes                  # This folder handles the routes of the application, determining what actions need to be performed for specific routes.
    ├── utils                   # This folder manages the utility files that contain classes used throughout the website.
    ├── views                   # This folder manages the templates used to generate the view of the website.             
    ├── .gitignore                 
    ├── app.js                    
    ├── package-lock.json                     
    ├── package.json                    
    └── README.md

<div align="center">
<img src="https://i.ibb.co/BK8KLHM/MVC-Architecture.jpg" alt="mvc architecture" height="400"/>
</div>
<br/>

## Screenshots of the project
<table>
  <tr>
    <td>URL Shortener Page</td>
    <td>Short URL generation</td>
  </tr>
  <tr>
    <td>
   <img src="https://i.ibb.co/tM0Bqf0/screely-1682320425114.png" border="0">
    </td>
     <td>
<img src="https://i.ibb.co/r33dxNV/screely-1682320458160.png" border="0"></td>
  </tr>
</table>
<table>
  <tr>
    <td>SignUp Page</td>
    <td>Login Page</td>
  </tr>
  <tr>
    <td>
<img src="https://i.ibb.co/DVcgPc4/screely-1677924790571.png" alt="screely-1677924790571" border="0"></td>
<td><img src="https://i.ibb.co/Xk355Hk/screely-1682320599366.png" alt="screely-1677925542185" border="0"></td>
  </tr>
</table>
<table>
  <tr>
    <td>Home Screen Before Authentication</td>
    <td>Home Screen After Authentication</td>
  </tr>
  <tr>
    <td>
<img src="https://i.ibb.co/q1Frzpy/screely-1682320670696.png" alt="screely-1677925947288" border="0"></td>
<td>
   <img src="https://i.ibb.co/tM0Bqf0/screely-1682320425114.png" border="0">
    </td>
  </tr>
</table>

##  Installation
<br>

To setup the project on your local environment, follow the given steps:

1. Fork the [Palaksharma23/URL-Shortener](https://github.com/Palaksharma23/URL-Shortener) repository.
2. Clone the repository:
```
https://github.com/<USERNAME>/URL-Shortener.git
```

  Replace the `<USERNAME>` with your GitHub username. 

Install the necessary dependencies

```bash
  npm install
```
Add a config.env file in the root directory and enter your MongoDb Atlas and REDIS Client credentials 
The format of config.env file should be similar to the following
```
DATABASE=Your_MongoDB_Connection_String
REDISPASSWORD=Your_REDIS_Client_Password
JWT_SECRET=Your_JWT_Secret_Key
JWT_EXPIRES_IN=Your_JWT_Expiry_Time
JWT_COOKIE_EXPIRES_IN=Your_JWT_Cookie_Expiry_Time
```
To start the server in development mode

```
  npm run dev 
```

For monitoring changes in the development mode, create a new terminal and run the following command in the directory
``` 
  npm run watch:js
```


Go to `localhost:3000` to view the website.
<br>


## Contributions

Your worthy contributions are most welcome to the URL Shortener website. If you have an idea for a new feature or a bug fix, please submit an issue or pull request.


## Feedback

Feel free to send any feedback on [Twitter](https://twitter.com/palaksharma2312) or [file an issue](https://github.com/Palaksharma23/URL-Shortener/issues/new). 
