const redis = require('redis');

// Create Redis client
const client = redis.createClient(6379);



module.exports = client;
