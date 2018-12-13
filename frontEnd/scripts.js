

$('.all-countries').on('click', async () => {
  const all = await allCountries()
  $('.json').remove()
  all.forEach(country => {
    $('.response').append(`<p class='json'>${JSON.stringify(country)}</p>`)

  })
})

$('.one-country').on('click', async () =>  {
  const one = await oneCountry()
  $('.json').remove()
  $('.response').append(`<p class='json'>${JSON.stringify(one)}</p>`)
})

$('.all-demographics').on('click', async () => {
  const all = await allDemographics()
  $('.json').remove()
  all.forEach(demo => {
    $('.response').append(`<p class='json'>${JSON.stringify(demo)}</p>`)
  })
})

$('.one-demographic').on('click', async () => {
  const one = await oneDemographic()
  $('.json').remove()
  $('.response').append(`<p class='json'>${JSON.stringify(one)}</p>`)
})

const allCountries = async () => {
  const response = await fetch('https://byob-ch-mh.herokuapp.com/api/v1/countries')
  const data = await response.json()
  return await data
}

const oneCountry = async () => {
  let countryId = $('.country-id').val()
  const response = await fetch(`https://byob-ch-mh.herokuapp.com/api/v1/countries/${countryId || 1}`)
  const data = await response.json()
  return await data
}

const allDemographics = async () => {
  const response = await fetch('https://byob-ch-mh.herokuapp.com/api/v1/demographics')
  const data = await response.json()
  return await data
}

const oneDemographic = async () => {
  let demographicId = $('.demo-id').val()
  const response = await fetch(`https://byob-ch-mh.herokuapp.com/api/v1/demographics/${demographicId || 1}`)
  const data = await response.json()
  return await data
}