
# Cafe Employee Portal
This is the front end for the Cafe Employee Portal.
### prerequisities
1. Install node.js

### installation
1. Clone the repository to your local machine from my git repo:
# https://github.com/yongjia97/react-cafe-employee-portal.git
### Run frontend in local
once cloned to your local machine:
1. Change to the project directory
   # cd react-cafe-employee-portal/cafe-employee
2. Install dependencies
   #  npm install
3. Start the development server
   #  npm start

## The front end application running on port 3000.You can access your front end application in the browser (http://localhost:3000) ##


### Backend
This is the backend server for the Cafe Employee Portal.
step to create-react-app

### prerequisities
1. Install node.js ( please ignore if have installed node.js)
2. MySQL server (or equivalent database)

### installation
1. Clone the repository to your local machine from my git repo: ( please ignore if you clone it before)
# https://github.com/yongjia97/react-cafe-employee-portal.git
### Run backend in local
once cloned to your local machine:
1. Change to the project directory 
  # cd react-cafe-employee-portal/server 

2. Install dependencies
  # npm install

3. Configure mysql connection
   
  a. Open the server.js file in the src folder.
  b. Update the MySQL connection configuration with your database credentials (host, user, password, and database name).

4. Create database table
   
  a. Open your MySQL client or terminal and connect to your MySQL server.
  b. Run the following SQL query to create the 'cafe_employee' table:
  
 CREATE TABLE Employees (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email_address VARCHAR(255) NOT NULL,
    phone_number VARCHAR(8) NOT NULL,
    gender ENUM('Male', 'Female') NOT NULL
);

CREATE TABLE Cafes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL
);

CREATE TABLE EmployeeCafeRelationship (
    employee_id VARCHAR(10),
    cafe_id INT,
    start_date DATE NOT NULL,
    PRIMARY KEY (employee_id, cafe_id),
    FOREIGN KEY (employee_id) REFERENCES Employees(id),
    FOREIGN KEY (cafe_id) REFERENCES Cafes(id)
);

INSERT INTO Cafes (name, description, location, id)
VALUES
  ('Cafe A', 'Cozy cafe', 'CBD', '1'),
  ('Cafe B', 'Modern cafe', 'EAST COAST', '2');
  
INSERT INTO Employees (id, name, email_address, phone_number, gender)
VALUES
  ('UI000001', 'John ', 'john@gmail.com', '91234567', 'Male'),
  ('UI000002', 'Jason', 'jason@hotmail.com', '83525638', 'Male');
INSERT INTO EmployeeCafeRelationship (employee_id, cafe_id, start_date)
VALUES
  ('UI000001', 1, '2023-01-01'),
  ('UI000002', 2, '2023-02-15');

5. Run the server
  # npm start

The back end application running on port 8080.The server is a back-end application responsible for processing HTTP requests and providing data and services to the front-end application.It is running at (http://localhost:8080) ##
