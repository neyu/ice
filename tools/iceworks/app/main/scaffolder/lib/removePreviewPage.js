const path = require('path');
const pathExists = require('path-exists');

const removePageV3 = require('./removePageV3');
const removePageV4 = require('./removePageV4');

module.exports = async function ({ clientSrcPath }) {
  const routerConfigFilePath = path.join(clientSrcPath, 'routerConfig.js');

  if (pathExists.sync(routerConfigFilePath)) {
    await removePageV4({
      clientSrcPath,
      pageFolderName: 'IceworksPreviewPage',
      routerPath: '/IceworksPreviewPage',
    });
  } else {
    await removePageV3({
      clientSrcPath,
      pageFolderName: 'IceworksPreviewPage',
    });
  }
};
