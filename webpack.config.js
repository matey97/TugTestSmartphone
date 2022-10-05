const webpack = require("@nativescript/webpack");

module.exports = (env) => {
  env.appComponents = (env.appComponents || []).concat(['./app/core/collection/local-collection-service.android']);
	webpack.init(env);

	// Learn how to customize:
	// https://docs.nativescript.org/webpack

	return webpack.resolveConfig();
};


