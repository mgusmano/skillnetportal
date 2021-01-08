import chartcommon from './ChartCommon'


export function getFiveDayPostVisitChart(o) {
  var chart = {
    "caption": "Completed 5 Day Post Visit",


    "toolTipBgcolor": "#484E69",
    "toolTipPadding": "7",
    "toolTipBorderRadius": "3",
    "toolTipBorderAlpha": "30",
    "tooltipBorderThickness": "0.7",
    "toolTipColor": "#FDFDFD",


    "centerLabel": "$value",
    formatNumberScale: "0",
    "centerLabelBold": "1",
    "centerLabelFontSize": "16",
    numberPrefix: "",
    numberSuffix: "",


  }
  var data = [
    {"label": "Completed <= 5 Days","value": o.totalcompletedIn5},
    {"label": "Completed > 5 Days","value": o.totalcompletedAfter5},
    {"label": "Not Completed > 5 Days","value": o.totalnotcompletedAfter5},
    {"label": "Not Completed <= 5 Days","value": o.totalnotcompletedIn5},

  ]
  var chartanddata = {
    chart: {...chartcommon, ...chart },
    data: data
  }
  return chartanddata
}