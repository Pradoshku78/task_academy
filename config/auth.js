require('dotenv').config();
module.exports = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  refresh_token: process.env.REFRESH_TOKEN,
  developer_token: process.env.DEVELOPER_TOKEN,
  login_customer_id: process.env.LOGIN_CUSTOMER_ID,
  customer_id: process.env.CUSTOMER_ID,
};
