const resettlementData = {
  destCountry: "Australia"
  grandTotal: null,
  originCountry: {
    name: "Afghanistan",
    individualTotal: 826,
    totalMinors: 366
  }
  originCountry: {
    name: "Syrian Arab Rep.",
    individualTotal: 81,
    totalMinors: 39
  }
}

exports.seed = function(knex, Promise) {
  return knex('demographics').del() 
    .then(() => knex('countries').del()) 

    .then(() => {
      return Promise.all([
        
        knex('countries').insert({
          dest_country: 'USA', grand_total: 20000
        }, 'id')
        .then(country => {
          return knex('demographics').insert([
            { 
              origin_country: 'Somalia', 
              individual_total: 20000, 
              total_minors: 8000, 
              dest_country_id: country[0] 
            }
            // { origin_country: 'Sudan', individual_total: 10000, total_minors: 4000, dest_country_id: country[0] }
          ])
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ]) 
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};