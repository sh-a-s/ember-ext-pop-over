/*jshint node:true*/
module.exports = {
    description: '',
    normalizeEntityName: function() {},
    afterInstall: function(options) {
        return this.addBowerPackageToProject('ember-pop-over');
    }
  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
