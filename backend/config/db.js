const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

let isMongoConnected = false;
const dataDir = path.join(__dirname, '../data');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/samvritha_portfolio';
  try {
    // Attempt Mongoose connection with 3-second timeout
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 3000
    });
    isMongoConnected = true;
    console.log('✅ Connected to MongoDB database successfully.');
  } catch (err) {
    isMongoConnected = false;
    console.log('💡 Local MongoDB service offline/unavailable. Falling back to local JSON database storage.');
  }
};

// Fallback JSON DB Utilities
const getJsonFile = (filename) => path.join(dataDir, `${filename}.json`);

const readJsonData = (filename) => {
  const filePath = getJsonFile(filename);
  if (!fs.existsSync(filePath)) return [];
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data || '[]');
  } catch (e) {
    return [];
  }
};

const writeJsonData = (filename, data) => {
  const filePath = getJsonFile(filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

const isMongoActive = () => isMongoConnected;

module.exports = {
  connectDB,
  isMongoActive,
  readJsonData,
  writeJsonData
};
