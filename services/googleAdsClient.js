
const { GoogleAdsApi } = require('google-ads-api');
const config = require('../config/auth');

const client = new GoogleAdsApi({
  client_id: config.client_id,
  client_secret: config.client_secret,
  developer_token: config.developer_token,
  refresh_token: config.refresh_token,
});

(async () => {
  try {
    const customer = client.Customer({
      customer_id: config.customer_id,
      login_customer_id: config.login_customer_id,
    });
    console.log('Authentication successful!');
  } catch (error) {
    console.error('Authentication failed:', error.message);
  }
})();


