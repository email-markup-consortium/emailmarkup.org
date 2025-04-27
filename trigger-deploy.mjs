import https from 'https';
import dotenv from "dotenv";

/**
 * Trigger a Netlify deploy
 * Just a post request with empty JSON
 * See: https://docs.netlify.com/configure-builds/build-hooks/
 *
 * Render.com cron
 * To avoid installing all site dependencies, set build command to npm install dotenv
 */


dotenv.config();
const webhookPath = process.env.NETLIFY_WEBHOOK_PATH;
const data = JSON.stringify({});

if(!webhookPath) {
  console.log('NETLIFY_WEBHOOK_PATH is not set in the .env file');
  process.exit();
}

console.log('Triggering a deploy..');
console.log(webhookPath);

const options = {
  hostname: 'api.netlify.com',
  path: `${webhookPath}`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options);

req.on('error', (e) => {
  console.error('Request error:', e);
});

req.write(data);
req.end();

console.log('Check Netlify deploy log to confirm successful deploy!');