import Ember from 'ember';
import PopOver from "ember-pop-over";

export default PopOver.extend({
    layoutName: 'components/pop-over',
    activeClass: null,
    onShowCallback: null,
    onHideCallback: null,
    onTileCallback: null,

    init(){
        this._super(...arguments);
    },

    addActiveClass() {
        var $target = Ember.$(Ember.get(this, 'activeTarget.element'));
        $target.addClass(Ember.get(this, 'activeClass'));
    },

    removeActiveClass() {
        var $targets = Ember.$(Ember.get(this, 'targets'));
        $targets.each((i, el) => {
            Ember.$(el.element).removeClass(Ember.get(this, 'activeClass'));
        });
    },

    hide() {
        if (this.activeClass != null) {
            this.removeActiveClass();
        }
        let onHideCallback = this.get('onHideCallback');
        if (typeof onHideCallback === 'function') {
            onHideCallback();
        }
        this._super(...arguments);
    },

    show() {
        if (this.activeClass != null) {
            this.addActiveClass();
        }
        let onShowCallback = this.get('onShowCallback');
        if (typeof onShowCallback === 'function') {
            onShowCallback();
        }
        this._super(...arguments);
    },

    tile() {
        this._super(...arguments);

        let onTileCallback = this.get('onTileCallback');
        if (typeof onTileCallback === 'function') {
            onTileCallback();
        }
    }
});
