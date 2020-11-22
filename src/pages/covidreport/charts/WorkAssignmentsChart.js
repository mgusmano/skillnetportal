import chartcommon from './ChartCommon'

export function getWorkAssignmentsChart(authorizations) {

  var chart = {
    "caption": "Work Assignments",
    "paletteColors": "#94070B, #00415C",
    // "showpercentvalues": "1",
    // "defaultcenterlabel": num_responses,
    // "aligncaptionwithcanvas": "0",
    // "captionpadding": "0",
    // "decimals": "1",
    // "plottooltext":
    //   "<b>$percentValue</b> of users are <b>$label</b>",
    // "centerlabel": "Responses: <br/>" + num_responses,
    "theme": "fusion"
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