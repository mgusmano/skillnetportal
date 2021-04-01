import chartcommon from './ChartCommon'

export function getHealthQuestionsNHChart(healthquestionsNH) {

  //var categoryArray = []
  var dataArray = []
  for (const [key, value] of Object.entries(healthquestionsNH)) {
    //var c = {label: key}
    //categoryArray.push(c)
    var v = {value: value}
    dataArray.push(v)
  }

  var chart = {
    caption: "Health Questions - New Hampshire",
    maxBarHeight: 50,
    yAxisMaxValue: 10,
    yAxisMinValue: 10,
  }
  // var categories = [
  //   {
  //     category: [
  //       {label: "1. Do you have any symptoms of COVID-19?"},
  //       {label: "2. Have you been in close contact with someone who is suspected or confirmed to have had COVID-19 in the past 14 days?"},
  //       {label: "3. Have you traveled on non-essential travel in the past 14 days outside of New England?"},
  //     ]
  //   }
  // ]
  var categories = [
    {
      category: [
        {label: "1. Do you have any of the following symptoms of COVID-19: 1. Fever (a documented temperature of 100.4 degrees Fahrenheit or higher) or are feeling feverish; 2. Respiratory symptoms such as a runny nose, nasal congestion, sore throat, cough, or shortness of breath; 3. General body symptoms such as muscle aches, chills, and severe fatigue; 4. Gastrointestinal symptoms such as nausea, vomiting, or diarrhea; or 5. Changes in your sense of taste or smell?"},
        {label: "2. Have you been in close contact with someone who is suspected or confirmed to have had COVID-19 in the past 14 days?"},
        {label: "3. Have you traveled on non-essential travel in the past 14 days outside of New Hampshire, Vermont, Maine, Massachusetts, Connecticut, or Rhode Island (this includes any international travel or travel by cruise ship and any domestic travel, within the US, outside of NH, VT, RI, CT, MA or ME, regardless of the mode of transportation)?"},
      ]
    }
  ]
  var dataset = [
    {
      seriesname: "Number of People who Answered Yes",
      data: dataArray
    }
  ]
  var chartanddata = {
    chart: {...chartcommon, ...chart },
    categories: categories,
    dataset: dataset
  }
  return chartanddata
}