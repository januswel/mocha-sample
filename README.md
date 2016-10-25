mocha-sample
===========

```sh
yarn
npm test
```

setup
-----

```sh
yarn -g react-native-cli
react-native init mocha-sample
cd mocha-sample
rm -rf node_modules
yarn
yarn remove jest babel-jest jest-react-native react-test-renderer
rm -rf __test__
yarn add mocha enzyme react-native-mock react-dom --dev
```

```json:package.json
{
  "name": "mocha",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "find test/spec -type f -name '*.js' | xargs mocha"
  },
  "dependencies": {
    "react": "15.3.2",
    "react-native": "^0.35.0"
  },
  "devDependencies": {
    "babel-preset-react-native": "1.9.0",
    "enzyme": "^2.5.1",
    "mocha": "^3.1.2",
    "react-dom": "^15.3.2",
    "react-native-mock": "^0.2.7"
  }
}
```

```conf:.babelrc
{
  "presets": ["react-native"]
}
```

```conf:test/mocha.opts
--compilers js:babel-register --require react-native-mock/mock --require test/lib/extensions
```

```js:test/lib/extensions.js
const platform = process.env.PLATFORM || 'ios'
require.extensions[`.${platform}.js`] = require.extensions['.js']
require.extensions['.png'] = () => ({})
```
