# Slidely Backend Server

## Overview
This is the backend server for the SlidelyFormApp project. It is built using Node.js, Express, and TypeScript, and provides endpoints to submit and read submissions.

## Prerequisites
- Node.js (v14.x or higher)
- npm (v6.x or higher)

## Getting Started

### 1. Clone the Repository
First, clone the repository to your local machine:
```sh
git clone https://github.com/harsh-kumar-patwa/backend-google-form-alternative.git
cd slidely-backend
```

### 2. Install Dependencies
Install the required npm packages:
```sh
npm install express body-parser
npm install --save-dev typescript ts-node @types/node @types/express nodemon

```

### 3. Compile TypeScript
Compile the TypeScript files to JavaScript:
```sh
npx tsc
```

### 4. Run the Server
You can run the server in development mode or production mode.

Development Mode
In development mode, the server will automatically restart on file changes:
```sh
npm run dev
```

Production Mode
In production mode, the server runs the compiled JavaScript files:
```sh
npm run start
```

### 5. Verify the Server
Once the server is running, you can verify it by visiting the following endpoint in your browser or using a tool like Postman:
```sh
http://localhost:3000/ping
```
You should see the response:

```sh
True
```

## Endpoints
### POST /submit

**Submit a new entry.**  

  
* URL :  /submit

* Method :  POST

* Body :

```sh
{
    "Name": "Harsh Kumar",
    "Email": "harshkumar3446@gmail.com",
    "Phone": "+91 9142840799",
    "GithubLink": "https://github.com/harsh-kumar-patwa",
    "StopwatchTime": "00:05:30"
}
```

* Response:

  201: Submission saved.
  
  500: Error reading or writing database file.


## GET /read
**Read a submission by index.**

* URL : /read?index=0
* Method: GET
* Response:
  
  200: Returns the submission at the specified index.
  
  404: Submission not found.
  
  500: Error reading database file.

# Project Structure 
```sh
slidely-backend/
├── dist/               # Compiled JavaScript files
│   ├── index.js
├── node_modules/       # Node.js dependencies
├── src/                # TypeScript source files
│   ├── index.ts
├── db.json             # JSON file to store submissions
├── package.json        # Project metadata and npm scripts
├── tsconfig.json       # TypeScript configuration file
├── .gitignore          # Git ignore file
├── README.md           # Project documentation
```

# Troubleshooting
If you encounter issues running the server, try the following:

* Ensure Node.js and npm are installed correctly.

* Delete the node_modules folder and run npm install again.

* Verify the db.json file is present in the root directory.
