/*jshint node:true*/
module.exports = {
    normalizeEntityName: function() {},
    afterInstall: function() {
        return this.addBowerPackageToProject('ember-pop-over', '0.1.30');
    }
};
