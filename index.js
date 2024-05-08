const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const timeRecordRoutes = require('./routes/timeRecordRoutes');
const userController = require('./controllers/userController');
const timeRecordController = require('./controllers/timeRecordController');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Conexiunea la MongoDB Atlas
mongoose.connect('mongodb+srv://sergiu:zPvj2FEs40PFjwcB@simpre-cc.df4xcfr.mongodb.net/?retryWrites=true&w=majority&appName=simpre-cc', {
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch(err => {
  console.error('Could not connect to MongoDB Atlas:', err);
});

// Ruta de bază
app.get('/', (req, res) => {
  res.send('Bun venit la aplicația de pontaj!');
});

// Rute pentru gestionarea utilizatorilor
app.post('/api/users/register', userController.registerUser);
app.post('/api/users/login', userController.loginUser);

// Rute pentru gestionarea înregistrărilor de timp
app.post('/api/timerecords', timeRecordController.addTimeRecord);
app.get('/api/timerecords/:userId', timeRecordController.getTimeRecordsByUserId);

// Rute pentru gestionarea utilizatorilor și pontajelor
app.use('/api/users', userRoutes);
app.use('/api/timerecords', timeRecordRoutes);

// Pornirea serverului
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});