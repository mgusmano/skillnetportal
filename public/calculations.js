(function(exports){

  exports.ComplianceCalculations = function(allArray) {

    var complianceArray = {
      totalcompliant: 0,
      totalnoncompliant: 0
    }
    allArray.forEach(survey => {


      var authcode = survey.authcode
      var dateofvisit = survey.dateofvisit
      var aloneorpeople = survey.aloneorpeople
      var today = new Date()
      var todayString =  + (today.getMonth()+1).toString().padStart(2, '0') + '/' + today.getDate().toString().padStart(2, '0') + '/' + today.getFullYear()

      var date1 = new Date(todayString);
      var date2 = new Date(dateofvisit);
      var difference = date1.getTime() - date2.getTime();
      var days = Math.ceil(difference / (1000 * 3600 * 24));

      var compliant = 'yes'
      if (days > 5) {
        if (authcode !== undefined) {
          if (aloneorpeople == null) { //they did not get to this section
            compliant = 'no'
          }
        }
      }
      if (compliant === 'yes') {
        complianceArray.totalcompliant++
        //totalcompliant++
      }
      else {
        //totalnoncompliant++
        complianceArray.totalnoncompliant++
      }
    })
    return complianceArray
  }


  exports.WorkWithCountsCalculations = function(allArray) {
    var oResult = {
      totalworkwith0: 0,
      totalworkwith1to3: 0,
      totalworkwith4to10: 0,
      totalworkwith11to25: 0,
      totalworkwithmorethan25: 0
    }
    allArray.forEach(o => {
      var x = o['numworkwith']
      switch(true){
        case (x === ''):
          break
        case (x === 0):
          oResult['totalworkwith0']++
          break
        case (x < 4):
          oResult['totalworkwith1to3']++
          break
        case (x < 11):
          oResult['totalworkwith4to10']++
          break
        case (x < 26):
          oResult['totalworkwith11to25']++
          break
        default:
          oResult['totalworkwithmorethan25']++
          break
      }
    })

    oResult['percentworkwith0'] = ((oResult['totalworkwith0'] / allArray.length)*100).toFixed(2)
    oResult['percentworkwith1to3'] = ((oResult['totalworkwith1to3'] / allArray.length)*100).toFixed(2)
    oResult['percentworkwith4to10'] = ((oResult['totalworkwith4to10'] / allArray.length)*100).toFixed(2)
    oResult['percentworkwith11to25'] = ((oResult['totalworkwith11to25'] / allArray.length)*100).toFixed(2)
    oResult['percentworkwithmorethan25'] = ((oResult['totalworkwithmorethan25'] / allArray.length)*100).toFixed(2)

    return oResult
  }

  exports.WorkAssignmentsCalculations = function(allArray) {
    var daysArray = {}
    allArray.forEach(o => {
      if (daysArray[o['dateofvisit']] === undefined) {
        daysArray[o['dateofvisit']] = 1
      }
      else {
        daysArray[o['dateofvisit']] = daysArray[o['dateofvisit']] + 1
      }
    })

    var firstArray = []
    for (const [key, value] of Object.entries(daysArray)) {
      var a = {label: key, value: value}
      firstArray.push(a)
    }
    const sortedArray = firstArray.sort((a, b) => new Date(a.label) - new Date(b.label))

    return sortedArray





    //return daysArray
  }

  exports.MeasuresCalculations = function(allArray) {
    var num_responses = allArray.length
    var precision = 2

    var totalsocialdistancing = allArray.filter(response => response['socialdistancing'] === true).length
    var totalfacecoverings = allArray.filter(response => response['facecoverings'] === true).length
    var totaltracingplan = allArray.filter(response => response['tracingplan'] === true).length
    var totalhealthsafetyplan = allArray.filter(response => response['healthsafetyplan'] === true).length
    var totalemployeehealth = allArray.filter(response => response['employeehealth'] === true).length
    var totalvisitorhealth = allArray.filter(response => response['visitorhealth'] === true).length
    var totalothermeasures = allArray.filter(response => response['othermeasures'] === true).length

    var percentsocialdistancing = ((totalsocialdistancing/num_responses)*100).toFixed(precision)
    var percentfacecoverings = ((totalfacecoverings/num_responses)*100).toFixed(precision)
    var percenttracingplan = ((totaltracingplan/num_responses)*100).toFixed(precision)
    var percenthealthsafetyplan = ((totalhealthsafetyplan/num_responses)*100).toFixed(precision)
    var percentemployeehealth = ((totalemployeehealth/num_responses)*100).toFixed(precision)
    var percentvisitorhealth = ((totalvisitorhealth/num_responses)*100).toFixed(precision)
    var percentothermeasures = ((totalothermeasures/num_responses)*100).toFixed(precision)

    var o = {
      totalsocialdistancing,
      totalfacecoverings,
      totaltracingplan,
      totalhealthsafetyplan,
      totalemployeehealth,
      totalvisitorhealth,
      totalothermeasures,
      percentsocialdistancing,
      percentfacecoverings,
      percenttracingplan,
      percenthealthsafetyplan,
      percentemployeehealth,
      percentvisitorhealth,
      percentothermeasures,
    }
    return o
  };

  exports.CorrectionsCalculations = function(allArray) {
    var num_responses = allArray.length
    var precision = 2

    var totalmorephysicaldistance = allArray.filter(response => response['morephysicaldistance'] === true).length
    var totalaskforchange = allArray.filter(response => response['askforchange'] === true).length
    var totaladdedppe = allArray.filter(response => response['addedppe'] === true).length
    var totaldidnotgointoarea = allArray.filter(response => response['didnotgointoarea'] === true).length
    var totalrescheduledvisit = allArray.filter(response => response['rescheduledvisit'] === true).length
    var totalothercorrections = allArray.filter(response => response['othercorrections'] === true).length

    var percentmorephysicaldistance = ((totalmorephysicaldistance/num_responses)*100).toFixed(precision)
    var percentaskforchange = ((totalaskforchange/num_responses)*100).toFixed(precision)
    var percentaddedppe = ((totaladdedppe/num_responses)*100).toFixed(precision)
    var percentdidnotgointoarea = ((totaldidnotgointoarea/num_responses)*100).toFixed(precision)
    var percentrescheduledvisit = ((totalrescheduledvisit/num_responses)*100).toFixed(precision)
    var percentothercorrections = ((totalothercorrections/num_responses)*100).toFixed(precision)

    var o = {

  totalmorephysicaldistance,
  totalaskforchange,
  totaladdedppe,
  totaldidnotgointoarea,
  totalrescheduledvisit,
  totalothercorrections,
  percentmorephysicaldistance,
  percentaskforchange,
  percentaddedppe,
  percentdidnotgointoarea,
  percentrescheduledvisit,
  percentothercorrections,
    }
    return o
  }

  exports.ComfortLevelCalculations = function(allArray) {
    var num_responses = allArray.length
    var precision = 2

    var totalcomfortable = allArray.filter(response => response['comfortable'] === "Yes").length
    var totalnotcomfortable = allArray.filter(response => response['comfortable'] === "No").length

    var percentcomfortable = ((totalcomfortable/num_responses)*100).toFixed(precision)
    var percentnotcomfortable = ((totalnotcomfortable/num_responses)*100).toFixed(precision)

    var o = {
      totalcomfortable,
      totalnotcomfortable,
      percentcomfortable,
      percentnotcomfortable,
    }
    return o
  }

  exports.AuthorizationsCalculations = function(allArray) {
    //var num_responses = allArray.length
    var precision = 2

    var totalassignments = allArray.filter(response => response['authorized'] !== null).length
    var totalauthorized = allArray.filter(response => response['authorized'] === "Yes").length
    var totalnotauthorized = allArray.filter(response => response['authorized'] === "No").length

    var percentauthorized = ((totalauthorized / totalassignments)*100).toFixed(precision)
    var percentnotauthorized = ((totalnotauthorized / totalassignments)*100).toFixed(precision)

    var o = {
      totalassignments,
      totalauthorized,
      totalnotauthorized,
      percentauthorized,
      percentnotauthorized,
    }
    return o
  }

  exports.HealthQuestionsAllCalculations = function(allArray) {
    //var num_responses = allArray.length
    //var precision = 0

    var totalcurrentlysick= allArray.filter(response => response['currentlysick'] === "Yes").length
    var totalhadcontact= allArray.filter(response => response['hadcontact'] === "Yes").length
    var totalsymptoms= allArray.filter(response => response['symptoms'] === "Yes").length
    var totalsymptomsnh= allArray.filter(response => response['symptomsnh'] === "Yes").length
    var totalcovidcontactnh= allArray.filter(response => response['covidcontactnh'] === "Yes").length
    var totalnonessentialtravelnh= allArray.filter(response => response['nonessentialtravelnh'] === "Yes").length
    var totalpreventmask= allArray.filter(response => response['preventmask'] === "Yes").length

    var o = {
      totalcurrentlysick,
      totalhadcontact,
      totalsymptoms,
      totalsymptomsnh,
      totalcovidcontactnh,
      totalnonessentialtravelnh,
      totalpreventmask,
    }
    return o
  }



  exports.HealthQuestionsCalculations = function(allArray) {
    //var num_responses = allArray.length
    //var precision = 0

    var totalcurrentlysick= allArray.filter(response => response['currentlysick'] === "Yes").length
    var totalhadcontact= allArray.filter(response => response['hadcontact'] === "Yes").length
    var totalsymptoms= allArray.filter(response => response['symptoms'] === "Yes").length
    var totalpreventmask= allArray.filter(response => response['preventmask'] === "Yes").length

    var o = {
      totalcurrentlysick,
      totalhadcontact,
      totalsymptoms,
      totalpreventmask,
    }
    return o
  }

  exports.HealthQuestionsNHCalculations = function(allArray) {
    //var num_responses = allArray.length
    //var precision = 0

    var totalsymptomsnh= allArray.filter(response => response['symptomsnh'] === "Yes").length
    var totalcovidcontactnh= allArray.filter(response => response['covidcontactnh'] === "Yes").length
    var totalnonessentialtravelnh= allArray.filter(response => response['nonessentialtravelnh'] === "Yes").length

    var o = {
      totalcurrentlysick,
      totalhadcontact,
      totalsymptoms,
      totalsymptomsnh,
      totalcovidcontactnh,
      totalnonessentialtravelnh,
      totalpreventmask,
    }
    return o
  }


  })(typeof exports === 'undefined'? this['calcmodule']={}: exports);