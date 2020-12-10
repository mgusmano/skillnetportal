import chartcommon from './ChartCommon'

export function getDayOfHealthAssessmentChart(o) {
  var chart = {

    "toolTipBgcolor": "#484E69",
    "toolTipPadding": "7",
    "toolTipBorderRadius": "3",
    "toolTipBorderAlpha": "30",
    "tooltipBorderThickness": "0.7",
    "toolTipColor": "#FDFDFD",


    "caption": "Completed Health Assessment on Visit Date",
    "centerLabel": "$value",
    formatNumberScale: "0",
    "centerLabelBold": "1",
    "centerLabelFontSize": "16",
    numberPrefix: "",
    numberSuffix: "",
  }
  var data = [
    {"label": "Completed","value": o.completed},
    {"label": "Not Completed","value": o.notcompleted},
    {"label": "Visit In Future","value": o.visitinfuture}
  ]
  var chartanddata = {
    chart: {...chartcommon, ...chart },
    data: data
  }
  return chartanddata
}