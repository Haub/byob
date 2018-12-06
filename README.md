# BYOB
  
## URL: `/api/v1/countries/`

#### Methods:

  `GET`
  
##### Required URL Params:
  None

#### Success Response:

  **Code:** 200 <br />
  **Content:** 
    `{
        "id": 37,
        "dest_country": "Argentina",
        "grand_total": "105",
        "created_at": "2018-12-05T23:53:01.403Z",
        "updated_at": "2018-12-05T23:53:01.403Z"
    },`
 
#### Error Response:

  None

#### Method:

  `POST`
  
#### Required URL Params:
  
  * `dest_country`
  * `grand_total`

##### Success Response:

  **Code:** 200 <br />
  **Content:** 
    `{message: New country with id of 43 inserted successfully.}`
 
#### Error Response:

  **Code:** 422 <br />
  **Content:** `{ error: Expected format: { dest_country: <String>, grand_total: <Number> }. You're missing a property.}`

## URL: '/api/v1/countries/:id'

#### Method:

  `GET`
  
#### URL Params:

  **Required:**

  `id=[integer]`

#### Success Response:

  **Code:** 200 <br />
  **Content:** 
    `{
        "id": 37,
        "dest_country": "Argentina",
        "grand_total": "105",
        "created_at": "2018-12-05T23:53:01.403Z",
        "updated_at": "2018-12-05T23:53:01.403Z"
    },`
 
#### Error Response:

  **Code:** 404 <br />
  **Content:** `{ error: Could not find countries with id 15}`
  
 #### Method:

  `PUT`
  
#### URL Params:

   **Required:**

  `id=[integer]`


#### Success Response:

  **Code:** 202 <br />
  **Content:** 
    `{ message: Country with id of 12 changed successfully. }`
 
#### Error Response:

  **Code:** 404 <br />
  **Content:** 
    `{ error: Could not find countries with id 15 }`

## URL: '/api/v1/demographics/'

#### Method:
  
  `GET`
  
#### URL Params**

  **Required:**

  None

#### Success Response:

  **Code:** 200 <br />
  **Content:** 
    `{
        "id": 37,
        "origin_country": "El Salvador",
        "individual_total": "1005",
        "total_minors": "340",
        "dest_country_id": "43""
        "created_at": "2018-12-05T23:53:01.403Z",
        "updated_at": "2018-12-05T23:53:01.403Z"
    },`
 
#### Error Response:

  None

#### Method:

  `POST`
  
#### Data Params

  **Required:
 
  * `origin_country`
  * `individual_total`
  * `total_minors`
  * `dest_country_id`


#### Success Response:

  **Code:** 201 <br />
  **Content:** 
    `{ message: New demograpics with id of 4 inserted successfully. }`
 
#### Error Response:

  **Code:** 422 <br />
  **Content:** `{ error: Expected format: { origin_country: <String>, individual_total: <String>, total_minors: <String>, dest_country_id: <String> }. You're missing a required parameter property.}`
  
## URL: '/api/v1/demographics/:id'

#### Method:

  `GET`
  
#### URL Params

  **Required:**

  `id=[integer]`


#### Success Response:

  **Code:** 200 <br />
  **Content:** 
    `{
        "id": 37,
        "origin_country": "El Salvador",
        "individual_total": "1005",
        "total_minors": "340",
        "dest_country_id": "43""
        "created_at": "2018-12-05T23:53:01.403Z",
        "updated_at": "2018-12-05T23:53:01.403Z"
    },`
 
#### Error Response:

  **Code:** 404 <br />
  **Content:** `{ error: Could not find demographics entry with id 15}`

#### Method:

  `PUT`
  
#### URL Params
  
  **Required:**
 
  `id=[integer]`

### Success Response:

  **Code:** 202 <br />
  **Content:** 
    `{message: Demographics entry with id of 12 changed successfully.}`
 
### Error Response:**

  **Code:** 404 <br />
  **Content:** `{ error: Could not find countries with id 15}`
