const webpack = require("@nativescript/webpack");
const path = require("path");

module.exports = (env) => {
  env.appComponents = (env.appComponents || []).concat(['./app/core/collection/local-collection-service.android']);
	webpack.init(env);

	// Learn how to customize:
	// https://docs.nativescript.org/webpack

  webpack.Utils.addCopyRule({
    from: path.resolve(__dirname, 'App_Resources', 'Android', 'google-services.json'),
    to: path.resolve(__dirname, 'platforms', 'android', 'app'),
  });

	return webpack.resolveConfig();
};


