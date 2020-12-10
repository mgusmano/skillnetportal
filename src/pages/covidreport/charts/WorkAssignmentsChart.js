import chartcommon from './ChartCommon'

export function getWorkAssignmentsChart(authorizations) {

  var chart = {
    "caption": "Work Assignments",

    // "showBorder": "0",
    // "showShadow": "0",
    // "use3DLighting": "0",
    // "showLabels": "0",
    // "showValues": "0",
    // "paletteColors": "#58E2C2, #F7E53B",
    // "bgColor": "#1D1B41",
    // "bgAlpha": "0",
    // "canvasBgAlpha": "0",
    // "doughnutRadius": "75",
    // "pieRadius": "95",
   // "pieRadius": "100",

   // "plotBorderAlpha": "0",

    "toolTipBgcolor": "#484E69",
    "toolTipPadding": "7",
    "toolTipBorderRadius": "3",
    "toolTipBorderAlpha": "30",
    "tooltipBorderThickness": "0.7",
    "toolTipColor": "#FDFDFD",

    // "baseFont": "Nunito Sans",
    // "baseFontSize": "14",
    // "baseFontColor": "#FDFDFD",
    // "showLegend": "1",
    // "legendShadow": "0",
    // "legendBorderAlpha": "0",
    // "drawCustomLegendIcon": "1",
    // "legendBgAlpha": "0",
    // "chartTopMargin": "-10",
    // "canvasTopMargin": "-10",
    // "chartBottomMargin": "20",
    // "canvasBottomMargin": "20",
    // "legendNumColumns": "1",
    // "legendPosition": "RIGHT",
    //"defaultCenterLabel": "Total <br> $6.2",

    //"centerLabel": "$label<br>$value",
    "centerLabel": "$value",
    formatNumberScale: "0",
    "centerLabelBold": "1",
    "centerLabelFontSize": "16",

    numberPrefix: "",
    numberSuffix: "",

    "enableRotation": "0",
    "transposeAnimation":"1",
    "plotToolText": "<div>$label<br>$value ($percentValue)<div>"
    // "showpercentvalues": "1",
    // "defaultcenterlabel": num_responses,
    // "aligncaptionwithcanvas": "0",
    // "captionpadding": "0",
    // "decimals": "1",
    // "plottooltext":
    //   "<b>$percentValue</b> of users are <b>$label</b>",
    // "centerlabel": "Responses: <br/>" + num_responses,

  }
  var data = [
    {"label": "Authorized","value": authorizations.totalauthorized},
    {"label": "Not Authorized","value": authorizations.totalnotauthorized}
  ]

  var chartanddata = {
    chart: {...chartcommon, ...chart },
    data: data
  }

  return chartanddata


}