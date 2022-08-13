require('dotenv').config();
const path = require('path');

/**
 * sassOptions: Use SASS setting
 * generateBuildId: Use git commit hash
 */
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  generateBuildId: async () => {
    // 例えば、ここで最新のコミットハッシュを取得することができます
    return 'my-build-id';
  },
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    REGION: process.env.REGION,
    USER_POOL_ID: process.env.USER_POOL_ID,
    USER_POOL_WEB_CLIENT_ID: process.env.USER_POOL_WEB_CLIENT_ID,
    OAUTH_DOMAIN: process.env.OAUTH_DOMAIN,
    OAUTH_REDIRECT_SIGN_IN: process.env.OAUTH_REDIRECT_SIGN_IN,
    OAUTH_REDIRECT_SIGN_OUT: process.env.OAUTH_REDIRECT_SIGN_OUT,
  },
};
