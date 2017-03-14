"use strict";

var $ = require("jquery");

function ExpandFooter($container) {
    this.$container = $container;
    this.init();
}

ExpandFooter.prototype.init = function() {
    this.bindControls();
    this.closeHeight = this.$container.height();
    this.closeOuterHeight = this.$container.outerHeight();
    var self = this;
    self.resizeListener = function() {
        self.refresh();
    };
    self.$container.css({
        "top": $(window)
            .height() - this.closeOuterHeight,
        "height": this.closeHeight
    });
    self.startListeners();
};

ExpandFooter.prototype.bindControls = function() {
    var self = this;
    this.$container.find(".btn")
        .click(function() {
            self.toggle();
        });
};

ExpandFooter.prototype.startListeners = function() {
    $(window)
        .resize(this.resizeListener);
};

ExpandFooter.prototype.stopListeners = function() {
    $(window)
        .off("resize", this.resizeListener);
};

ExpandFooter.prototype.isOpen = function() {
    return this.$container.find(".btn.up")
        .is(":hidden");
};

ExpandFooter.prototype.toggle = function() {
    if (this.isOpen()) {
        this.close();
    } else {
        this.open();
    }
};

ExpandFooter.prototype.open = function() {
    var self = this;
    self.$container.find(".content")
        .show();
    self.$container.animate({
        "top": 0,
        "height": $(window)
            .height()
    }, function() {
        self.$container.find(".btn.up")
            .hide();
        self.$container.find(".btn.down")
            .show();
    });
};

ExpandFooter.prototype.close = function() {
    var self = this;

    self.$container.animate({
        "top": $(window)
            .height() - this.closeOuterHeight,
        "height": this.closeHeight
    }, function() {
        self.$container.find(".btn.up")
            .show();
        self.$container.find(".btn.down")
            .hide();
        self.$container.find(".content")
            .hide();
    });
};

ExpandFooter.prototype.refresh = function() {
    if (this.isOpen()) {
        this.$container.css({
            "height": $(window)
                .height()
        });
    } else {
        this.$container.css({
            "top": $(window)
                .height() - this.closeOuterHeight
        });
    }
};

module.exports = ExpandFooter;
