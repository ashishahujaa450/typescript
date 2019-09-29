"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numberCollection = /** @class */ (function () {
    function numberCollection(data) {
        this.data = data;
    }
    Object.defineProperty(numberCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    numberCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    numberCollection.prototype.swap = function (leftIndex, rightIndex) {
        //perform some trandional swap
        var temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    };
    return numberCollection;
}());
exports.numberCollection = numberCollection;
