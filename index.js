var Generator = require('npm-dts').Generator;

const plugin = {
  name: 'NpmDtsPlugin'
};

module.exports = class NpmDtsPlugin {
  constructor(options) {
    this.options = options || {};
  }

  apply(compiler) {
    var _options = this.options;

    compiler.hooks.afterEmit.tap(plugin, function() {
      setTimeout(function() {
        var generator = new Generator(_options, true, true);

        generator.generate().catch(function(e) {
          throw e;
        });
      });
    });
  }
};
