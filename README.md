# Final Project - Hair & Beauty Salon :scissors:
## Node.js Express REST API MySQL database project :paperclips:

This project is the creation of the back end for a Hair Salon site. This application used Express.js API and Sequelize to interact with a MySQL database. This application displays creation of database using mySQL with models and associations. Then demonstrates the API Routes to perform RESTful CRUD operations. It can perform CRUD (Create, Read, Update, Delete) operations using HTTP Methods (POST, GET, PUT, and DELETE) for RESTful Services.




<div align="center">
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
 </div>

## ℹ️ How It Works

- Login.
- Logout.


1. Logged Users:
     - book appointments using interactive datepicker.
     - can cancel appointments.
     - can see their own appointments.
     - can update their profile.
     - view their own profile.


2. Stylists (user role):
     - view all appointments.
     - view all costumers.
     - view their own profile.
    


3. Admin:
     - deletes appointments.
     - view all users of the salon (not just costumers. Including Stylist and Admins).
     - view their own profile.


- Home
- Services
- Treatments
- Reviews

> **Note**
> Those are the final functionalities (Frontend). I have created a total of 19 endpoints on the Backend.


![endpoints](https://user-images.githubusercontent.com/121962750/236151029-4a2933f9-595b-4d06-8f90-d4b99e188713.png)


## About The Application

  - It is built with Node.js and Express Framework with Javascript. In addition, the applications database is MySQL, with the use of mysql2 library.

  - In the applicaiton we can manage user data, such as create/edit/delete a user or an appointment. In addition, we can get all the users in the database.




## ⚒️ Stack Tech

- Node.js
- Express
- Cors
- MySQL2
- Docker
- MySQL Workbench
- Postman
- VSCode
- Sequelize ORM
- NPM
- Axios


## 	:round_pushpin: Dependencies

 - bcrypt: 5.1.0
 - cors: 2.8.5
 - dotenv: 16.0.3
 - express: 4.18.2
 - jsonwebtoken: 9.0.0
 - mysql2: 3.2.0
 - nodemon: 2.0.22
 - sequelize: 6.31.0
 - sequelize-cli: 6.6.0

## Requirements

 - [node & npm](https://nodejs.org/en)
 - [git](https://www.robinwieruch.de/git-essential-commands/)

## Instalations

- git clone https://github.com/AlynaNastas/ANR-GeeksHubs-Final-Project-HairSalon.git
- cd HairSalon
- npm install
- npm start
- optional: include _.env_ in your _.gitignore_

## GET Routes

- http://localhost:4000
  - /users/login
  - /updateprofile
  - /admin/appoint/70
  - /users/role/6

## Postman

- Install [Postman](https://www.postman.com/downloads/) to interact with REST API
- Login with:
  - URL: http://localhost:4000/users/login
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: {  "email": maddie@malou.com", "password":" - - - - - " }

- See appontments:
  - URL: http://localhost:4000/appointmets
  - Method: GET


## Issues and solutions

   - Issue: I can not bring Stylist name to the front end.

   - Solution: I would need to bring data through different tables doing "joins" between the tables.






 ## Database diagram :memo:

![DDBB](https://user-images.githubusercontent.com/121962750/236195418-9930f479-21c5-4f9f-b014-c206dd72c887.png)




## License

This project is licensed under the [MIT License](https://github.com/marinakolova/BeautyBooking/blob/master/LICENSE)



## Contact

:envelope_with_arrow: Alyna Nastas Romaniuc

![image](https://user-images.githubusercontent.com/121962750/227806286-eaf20a49-cee0-4cff-8f6d-f04b4dfcb873.png)
![image](https://user-images.githubusercontent.com/121962750/227806305-5d5348e2-756b-432d-8f61-870eb09941e3.png)

