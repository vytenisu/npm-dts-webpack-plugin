var Generator = require('npm-dts').Generator;

var tmp = require('tmp');
var path = require('path');

const plugin = {
  name: 'NpmDtsPlugin'
};

module.exports = class NpmDtsPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap(plugin, function() {
      tmp.dir(function(err, tmp, removeTmp) {
        if (err) throw err;

        var generator = new Generator(
          {tmp: path.resolve(tmp, 'npm-dts')},
          true,
          true
        );

        generator
          .generate()
          .then(() => {
            removeTmp();
          })
          .catch(function(e) {
            removeTmp();
            throw e;
          });
      });
    });
  }
};
