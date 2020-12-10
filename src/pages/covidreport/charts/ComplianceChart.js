import chartcommon from './ChartCommon'

export function getComplianceChart(compliance) {
  var chart = {
    "caption": "Policyholder Safefy and Health Compliance",

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
    {"label": "Compliant","value": compliance.totalcompliant},
    {"label": "Not Compliant","value": compliance.totalnoncompliant}
  ]
  var chartanddata = {
    chart: {...chartcommon, ...chart },
    data: data
  }
  return chartanddata
}