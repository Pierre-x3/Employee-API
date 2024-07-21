const { createClient } = require('redis');

class Redis {
  static client = null;

  async connect(){
    if(!Redis.client) {
      Redis.client = createClient();
      Redis.client.on('error', err => console.error('Redis ha fallado'));
      await Redis.client.connect();
    }
    return Redis.client;    
  }
}

async function connectRedis(){
  return await new Redis().connect();
}

module.exports = { connectRedis };
