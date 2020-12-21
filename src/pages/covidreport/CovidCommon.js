export function getFilters (responsesFiltered, filters) {
  //console.log(responsesFiltered)
  if (filters.divisions !== '') {
    responsesFiltered = responsesFiltered.filter(response => response['jobrole'] === filters.divisions)
  }
  //console.log(responsesFiltered)
  if (filters.countries !== '' && filters.countries !== undefined) {
    console.log('here')
    responsesFiltered = responsesFiltered.filter(response => response['countryofvisit'] === filters.countries)
  }
  //console.log(responsesFiltered)
  if (filters.startdate !== '' && filters.startdate !== undefined) {
    //console.log(new Date(response['dateofvisit']))
    console.log(new Date(filters.startdate))
    responsesFiltered = responsesFiltered.filter(response => new Date(response['dateofvisit']) >= new Date(filters.startdate))
  }
  //console.log(responsesFiltered)
  if (filters.enddate !== '' && filters.enddate !== undefined) {
    responsesFiltered = responsesFiltered.filter(response => new Date(response['dateofvisit']) <= new Date(filters.enddate))
  }
  //console.log(responsesFiltered)

  var numCompleteArray = responsesFiltered.filter(response => response['status'] === "Complete")
  return numCompleteArray
}
