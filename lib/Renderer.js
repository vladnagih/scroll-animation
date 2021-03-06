"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var Renderer = /** @class */ (function () {
    function Renderer(containers) {
        this.containers = containers;
    }
    Renderer.prototype.render = function (time) {
        var scroll = window.pageYOffset;
        var difference = time - this.lastTime;
        difference = difference > 0 ? difference : 0;
        this.containers.forEach(function (container) { return container.animate(scroll, difference); });
        this.lastTime = time;
    };
    Renderer.prototype.update = function () {
        this.containers.forEach(function (container) { return container.update(); });
    };
    Renderer.prototype.loop = function () {
        var _this = this;
        this.update();
        window.addEventListener('resize', utils_1.debounce(this.update.bind(this), 100));
        var tick = function () {
            window.requestAnimationFrame(function (time) {
                _this.render(time);
                tick();
            });
        };
        tick();
    };
    return Renderer;
}());
exports.Renderer = Renderer;
//# sourceMappingURL=Renderer.js.map