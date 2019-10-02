"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buildAndPrintReport = function (match) {
        var output = this.analyzer.run(match);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
