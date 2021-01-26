# npm-dts-webpack-plugin

This WebPack plugin generates single _index.d.ts_ file for whole _NPM_ package.

It allows creating a bundled _NPM_ library packages without _TypeScript_ sources and yet still keeping code suggestions wherever these libraries are imported.

_TypeScript_ picks up _index.d.ts_ automatically.

---

## Installation

First install the plugin:

```
npm install --save-dev npm-dts-webpack-plugin
```

Then add plugin to _WebPack_ configuration:

```javascript
const NpmDtsPlugin = require('npm-dts-webpack-plugin')

module.exports = {
  ......
  plugins: [
    new NpmDtsPlugin()
  ],
  ......
}
```

You can also choose to customize behavior by providing options supported by ["_npm-dts_"](https://www.npmjs.com/package/npm-dts) module:

```javascript
const NpmDtsPlugin = require('npm-dts-webpack-plugin')

module.exports = {
  ......
  plugins: [
    new NpmDtsPlugin({
      logLevel: 'debug'
    })
  ],
  ......
}
```

### Supported options

| Option   | Description                                                                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| entry    | Allows changing main _src_ file from _index.ts_ to something else.                                                                                      |
| force    | Ignores non-critical errors and attempts to at least partially generate typings (disabled by default).                                                  |
| logLevel | Log level (error, warn, info, verbose, debug) (defaults to "info").                                                                                     |
| output   | Overrides recommended output target to a custom one (defaults to "index.d.ts").                                                                         |
| root     | NPM package directory containing package.json (defaults to current working directory).                                                                  |
| tmp      | Directory for storing temporary information (defaults to OS-specific temporary directory). Note that tool completely deletes this folder once finished. |
| tsc      | Passed through additional TSC options (defaults to ""). Note that they are not validated or checked for suitability.                                    |
