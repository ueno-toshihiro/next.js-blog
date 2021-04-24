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
};
