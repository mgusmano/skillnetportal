import chartcommon from './ChartCommon'


export function getFiveDayPostVisitChart(o) {
  var chart = {
    "caption": "5 day post visit",
  }
  var data = [
    {"label": "Not completed","value": o.percentNotCompleted},
    {"label": "Complete in 5 days","value": o.percentIn5},
    {"label": "Completed > 5 days","value": o.percentAfter5},
  ]
  var chartanddata = {
    chart: {...chartcommon, ...chart },
    data: data
  }
  return chartanddata
}