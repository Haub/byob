const resettlementData = require('../../../resettlementData.js');

const createCountry = (knex, country) => {
  return knex('countries').insert({
    dest_country: country.dest_country,
    grand_total: country.grand_total
  }, 'id')
  .then(countryId => {
    let demographicPromises = [];

    country.origin_countries.forEach(origin_country => {
      demographicPromises.push(
        createDemographic(knex, {
          origin_country: origin_country.name, 
          individual_total: origin_country.individual_total, 
          total_minors: origin_country.total_minors, 
          dest_country_id: countryId[0] 
        })
      )
    });

    return Promise.all(demographicPromises);
  })
};

const createDemographic = (knex, demographic) => {
  return knex('demographics').insert(demographic);
};

exports.seed = (knex, Promise) => {
  return knex('demographics').del()
    .then(() => knex('countries').del())
    .then(() => {
      let countryPromises = [];

      resettlementData.forEach(country => {
        countryPromises.push(createCountry(knex, country));
      });

      return Promise.all(countryPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};









// exports.seed = function(knex, Promise) {
//   return knex('demographics').del() 
//     .then(() => knex('countries').del()) 

//     .then(() => {
//       return Promise.all([
        
//         knex('countries').insert({
//           dest_country: 'USA', grand_total: 20000
//         }, 'id')
//         .then(country => {
//           return knex('demographics').insert([
//             { 
//               origin_country: 'Somalia', 
//               individual_total: 20000, 
//               total_minors: 8000, 
//               dest_country_id: country[0] 
//             }
//           ])
//         })
//         .then(() => console.log('Seeding complete!'))
//         .catch(error => console.log(`Error seeding data: ${error}`))
//       ]) 
//     })
//     .catch(error => console.log(`Error seeding data: ${error}`));
// };