const customer = require('../services/googleAdsClient');

async function fetchCampaigns() {
  try {
    const campaigns = await customer.query(`
      SELECT
        campaign.id,
        campaign.name,
        campaign.status
      FROM
        campaign
      LIMIT 10
    `);
    console.log('Campaigns:', campaigns);
    return campaigns;
  } catch (error) {
    console.error('Error fetching campaigns:', error.message);
    throw error;
  }
}

module.exports = fetchCampaigns;
