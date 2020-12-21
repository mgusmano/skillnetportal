import chartcommon from './ChartCommon'


export function getFiveDayPostVisitChart(o) {
  var chart = {
    "caption": "5 day post visit completed and not completed",


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
    {"label": "By 5 days","value": o.totalcompletedIn5},
    {"label": "By > 5 days","value": o.totalcompletedAfter5},
    {"label": "Not By > 5 days","value": o.totalnotcompletedAfter5},
    {"label": "Not Yet < 5 days","value": o.totalnotcompletedIn5},

  ]
  var chartanddata = {
    chart: {...chartcommon, ...chart },
    data: data
  }
  return chartanddata
}