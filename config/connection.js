const { connect, connection } = require('mongoose');
require('dotenv').config();

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/socialnetworkDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});

connection.on('error', (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

module.exports = connection;
