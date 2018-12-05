// const resettlementData = require('.../resettlementData')

// const createcountry = (knex, country) => {
//   return knex('countries').insert({
//     dest_country: country.destCountry,
//     grand_total: country.grandTotal
//   }, 'id')
//   .then(countryId => {
//     let demographicPromises = [];

//     country.demographics.forEach(demographic => {
//       demographicPromises.push(
//         createdemographic(knex, {
//           origin_country: , 
//           individual_total: , 
//           total_minors: , 
//           dest_country_id: country[0] 
//         })
//       )
//     });

//     return Promise.all(demographicPromises);
//   })
// };

// const createdemographic = (knex, demographic) => {
//   return knex('demographics').insert(demographic);
// };

// exports.seed = (knex, Promise) => {
//   return knex('demographics').del() // delete demographics first
//     .then(() => knex('countries').del()) // delete all countries
//     .then(() => {
//       let countryPromises = [];

//       resettlementData.forEach(country => {
//         countryPromises.push(createcountry(knex, country));
//       });

//       return Promise.all(countryPromises);
//     })
//     .catch(error => console.log(`Error seeding data: ${error}`));
// };













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
          ])
        })
        .then(() => console.log('Seeding complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ]) 
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};