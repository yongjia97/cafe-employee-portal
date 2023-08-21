const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'abc123',
  database: 'cafe_employee'
});
con.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.get('/cafes',async(req,res)=>{
    const location = req.query.location;
    let cafes;
    try {
        const query = location
        ? 'SELECT C.*, COUNT(ECR.employee_id) AS employees FROM Cafes AS C LEFT JOIN EmployeeCafeRelationship AS ECR ON C.id = ECR.cafe_id WHERE C.location = ? GROUP BY C.id ORDER BY employees DESC'
        : 'SELECT C.*, COUNT(ECR.employee_id) AS employees FROM Cafes AS C LEFT JOIN EmployeeCafeRelationship AS ECR ON C.id = ECR.cafe_id GROUP BY C.id ORDER BY employees DESC';    
        con.query(query, location ? [location] : [], (error, rows) => {
          if (error) {
            console.log('Error fetching cafes:', error);
            res.status(500).json({ error: 'Failed to fetch cafes' });
          } else {
            const cafes = rows;
            res.json(cafes);
          }
        });
    } catch (error) {
      console.log('Error fetching cafes:', error);
      console.error('Error fetching cafes:', error);
      res.status(500).json({ error: 'Failed to fetch cafes' });
    }
});    

app.get('/cafes/:cafeId/employees', (req, res) => {
  const cafeId = req.params.cafeId;
console.log(cafeId)
  // Query the database to retrieve employee data for the specified cafeId
  const query = 'SELECT E.* FROM Employees AS E INNER JOIN EmployeeCafeRelationship AS ECR ON E.id = ECR.employee_id WHERE ECR.cafe_id = ?';
  con.query(query, [cafeId], (error, rows) => {
    if (error) {
      console.log('Error fetching employees:', error);
      res.status(500).json({ error: 'Failed to fetch employees' });
    } else {
      const employees = rows;
      res.json(employees);
    }
  });
});

app.get('/employees', (req, res) => {
  console.log('API /employees endpoint accessed');
  const cafe = req.query.cafe;

  let query = `
    SELECT E.id, E.name, E.email_address, E.phone_number,
           DATEDIFF(CURDATE(), ECR.start_date) AS days_worked,
           C.name AS cafe
    FROM Employees AS E
    LEFT JOIN EmployeeCafeRelationship AS ECR ON E.id = ECR.employee_id
    LEFT JOIN Cafes AS C ON ECR.cafe_id = C.id
  `;

  if (cafe) {
    query += 'WHERE C.name = ?';
  }

  con.query(query, cafe ? [cafe] : [], (error, rows) => {
    if (error) {
      console.log('Error fetching employees:', error);
      res.status(500).json({ error: 'Failed to fetch employees' });
    } else {
      const employees = rows;
      res.json(employees);
    }
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});