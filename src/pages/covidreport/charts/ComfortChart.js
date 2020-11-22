import chartcommon from './ChartCommon'

export function getComfortChart(comfortlevel) {
  var chart = {
    "caption": "Staff Comfort Level",
    }

  var data = [
    {"label": "Comfortable","value": comfortlevel.totalcomfortable},
    {"label": "Not Comfortable","value": comfortlevel.totalnotcomfortable}
    ]

  var chartanddata = {
    chart: {...chartcommon, ...chart },
    data: data
  }

  return chartanddata
}