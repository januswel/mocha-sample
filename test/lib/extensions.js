const platform = process.env.PLATFORM || 'ios'
require.extensions[`.${platform}.js`] = require.extensions['.js']
require.extensions['.png'] = () => ({})
