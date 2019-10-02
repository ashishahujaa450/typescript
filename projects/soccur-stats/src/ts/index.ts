import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

import { ConsoleReport } from './ReportTargets/ConsoleReport';
import { WinAnalysis } from './Analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './ReportTargets/HtmlReports';

const reader = new CsvFileReader('football.csv');
const matchreader = new MatchReader(reader);
matchreader.load();

const summary = new Summary(new WinAnalysis('Man United'), new HtmlReport());

summary.buildAndPrintReport(matchreader.matches);
