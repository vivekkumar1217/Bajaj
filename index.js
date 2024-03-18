const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/processArray', (req, res) => {
  const inputArray = req.body.array;
  const userId = req.body.userId;
  const emailId = req.body.emailId;
  const collegeRollNumber = req.body.collegeRollNumber;

  const evenNumbers = inputArray.filter(num => num % 2 === 0);
  const oddNumbers = inputArray.filter(num => num % 2 !== 0);

  res.status(200).json({
    status: 'success',
    userId,
    emailId,
    collegeRollNumber,
    evenNumbers,
    oddNumbers
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});