import chartcommon from './ChartCommon'


export function getFiveDayPostVisitChart(compliant,notcompliant) {
  var chart = {
    "caption": "5 day post visit",
  }
  var data = [
    {"label": "Compliant","value": compliant},
    {"label": "Not Compliant","value": notcompliant}
  ]
  var chartanddata = {
    chart: {...chartcommon, ...chart },
    data: data
  }
  return chartanddata
}