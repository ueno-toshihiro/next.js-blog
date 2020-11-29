const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  generateBuildId: async () => {
    // 例えば、ここで最新のコミットハッシュを取得することができます
    return 'my-build-id';
  }
}
