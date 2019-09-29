"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var characterCollection = /** @class */ (function () {
    function characterCollection(data) {
        this.data = data;
    }
    Object.defineProperty(characterCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    characterCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    characterCollection.prototype.swap = function (leftIndex, rightIndex) {
        var characters = this.data.split('');
        var temp = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = temp;
        this.data = characters.join('');
    };
    return characterCollection;
}());
exports.characterCollection = characterCollection;
