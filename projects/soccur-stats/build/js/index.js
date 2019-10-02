"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var ConsoleReport_1 = require("./ReportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchreader = new MatchReader_1.MatchReader(reader);
matchreader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchreader.matches);
