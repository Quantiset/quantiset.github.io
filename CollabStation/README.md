# EdEASE


1. Introduction
Project Overview
The Collaboration Station project is designed to help kids with disabilities, especially Autism, break into the world of software engineering in a fun way — by learning how to create games in Scratch. The platform enables real-time collaboration, empowering users to build projects together with live co-editing features (think Google Docs). It integrates audio, video, and chat functionalities while seamlessly working with Scratch GUI, and supports breakout rooms for smaller team interactions.
Features
Real-time collaboration in Scratch
Audio, video, and chat integration
Breakout rooms
User authentication with username/password and SSO using Auth0
Integration with Agora for real-time communication
Technologies Used
Frontend:
HTML/CSS/JavaScript
Scratch GUI
Backend:
Node.js
Express
MongoDB
Passport.js
Authentication:
Auth0
Real-time Communication:
Agora
2. Getting Started
Prerequisites
Node.js (v14 or higher)
MongoDB
Auth0 account
Agora account
Installation

1. Clone the repository:

> git clone https://github.com/Educating-Autistic-Software-Engineers/collaborationStation.git
> cd collaboration-station

2. Install dependencies:

npm install
Running the Project
1. Start MongoDB:

brew services start mongodb-community@6.0

2. Start the server:

npm start

3. Open your browser and navigate to:

http://localhost:3000


3. Usage
Registering a New User
Open the registration form on the home page.
Enter a username and password.
Click the "Register" button.
Upon successful registration, you will be redirected to the lobby page.
Logging In
Open the login form on the home page.
Enter your username and password.
Click the "Login" button.
Upon successful login, you will be redirected to the lobby page.
Using Single Sign-On (SSO)
Click the "Login with Auth0" link on the home page.
You will be redirected to the Auth0 login page.
Log in with your social account (eg. Google).
Upon successful login, you will be redirected to the lobby page.
Navigating the Lobby and Rooms
The lobby page allows you to join or create new rooms.
Once in a room, you can collaborate with other users using the real-time features provided by Agora.

4. Key Files and Directories
/auth: Contains backend code for authentication, server setup, and user model.
/mumble2: Contains files related to the collaborative environment using Agora.


5. Auth0 Integration
Setting Up Auth0
Sign up for an Auth0 account.
Create a new application in the Auth0 dashboard.
Configure the callback URL to http://localhost:3000/callback.
Configuring Auth0 in the Project
Update the authConfig object in server.js with your Auth0 domain, client ID, and client secret.

6. Agora Integration
Setting Up Agora
Sign up for an Agora account.
Create a new project in the Agora dashboard to get your App ID.
Configuring Agora in the Project
Add your Agora App ID to the relevant JavaScript files in the /mumble2/js directory.

7. Contributing
Contribution Guidelines
Fork the repository.
Create a new branch for your feature or bug fix.
Commit your changes and push to your branch.
Open a pull request.
Code of Conduct
Be respectful and inclusive.
Follow the project's coding standards.
Report any issues or bugs you find.

