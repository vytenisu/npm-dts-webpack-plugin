# npm-dts-webpack-plugin

This WebPack plugin generates single _index.d.ts_ file for whole NPM package.

It allows creating NPM library packages without _TypeScript_ sources and yet still keeping code suggestions wherever these libraries are imported.

_Typescript_ picks up _index.d.ts_ automatically.

---

## Installation

First install the plugin:

```
npm install npm-dts-webpack-plugin
```

Then add plugin to WebPack configuration:

```
const NpmDtsPlugin = require('npm-dts-webpack-plugin')

module.exports = {
  ......
  plugins: [
    new NpmDtsPlugin()
  ],
  ......
}
```

You can also choose to customize behavior by providing options supported by _npm-dts_ module:

```
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
