const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Hanya menampilkan pesan "Hello, World!" dan tabel
app.get('/', (req, res) => {
  const htmlContent = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            padding: 20px;
          }

          h1 {
            color: #333;
          }

          table {
            border-collapse: collapse;
            width: 50%;
            margin: 20px auto;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
          }

          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <h1>Hello, Gaes!</h1>
        
        <table>
          <tr>
            <th>Nama</th>
            <td>Ahmad Zulfy Waliyurrahman</td>
          </tr>
          <tr>
            <th>Kelas</th>
            <td>XIPPLG1</td>
          </tr>
          <tr>
            <th>No Absen</th>
            <td>3</td>
          </tr>
        </table>
      </body>
    </html>
  `;
  
  res.send(htmlContent);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}/`);
});
