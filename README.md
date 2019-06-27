# rp_backend_Jared-Parrish
Back-end for Restaurant-Passport

Endpoints used in app:

GET / Cities:

It returns the primary key and name of the city from the ‘cities’ table.
The deployed endpoint is at: https://rp-backend-web19.herokuapp.com/cities
A successful GET will result in a 200 status code.
If an error occurs on the GET, a 500 status code will be returned.
The shape of the data returned is:


[
    
        "id": 1,
        "name": "D.C."
    
]


GET /cities/:id/restaurants:

It returns the primary key and name of a city along with the primary key and name of restaurants within that city from both the ‘cities’ and ‘restaurants’ table.
https://rp-backend-web19.herokuapp.com/cities/1/restaurants
A successful GET will result in a 200 status code.
If an error occurs on the GET, a 500 status code will be returned.
The shape of the data returned is:


{
    "id": 1,
    "name": "D.C.",
    "restaurants": [
        
            "restID": 1,
            "restName": "Smoothie Hut"
        },
        
            "restID": 2,
            "restName": "Candy Palace"
        
    
}


GET/cities/restaurants/:id

It returns the primary key,name, city, address, and description of a particular restaurant from the ‘restaurants’ table.
The deployed endpoint is at: https://rp-backend-web19.herokuapp.com/cities/restaurants/1
A successful GET will result in a 200 status code.
If an error occurs on the GET, a 500 status code will be returned.
The shape of the data returned is:


{
    "id": 1,
    "name": "Smoothie Hut",
    "city": "New York",
    "address": "334 fake st",
    "description": "Smoothietacular",
    "city_id": 1
}


GET/manyToMany:

User_id foreign key, city, restaurant id primary key, and name of a restaurant associated with a particular user. This information comes from the ‘manyToMany’ table, which is a table which holds a primay key and a foreign key for both ‘users’ and restaurants’. This allows us to see which users have visited which particular restaurants.
The deployed endpoint is at: https://rp-backend-web19.herokuapp.com/manyToMany/5
A successful GET will result in a 200 status code.
If an error occurs on the GET, a 500 status code will be returned.
The shape of the data returned is:


[
    
        "user_id": 5,
        "city": "New York",
        "restId": 2,
        "name": "Candy Palace"
    },
    
        "user_id": 5,
        "city": "New York",
        "restId": 1,
        "name": "Smoothie Hut"
    
]


POST/users:

Accepts “username”, “password”, and “email” strings which are all required. The information is posted to the ‘users’ table.
If POST is successful, user primary key, username, hashed password, and email strings are returned.
The deployed endpoint is at: https://rp-backend-web19.herokuapp.com/users
A successful POST will result in a 200 status code.
If an error occurs on the POST, a 500 status code will be returned.
If an input missing, a 422 status code and error: ‘please complete all forms’ will be returned’ 
The shape of the data returned is:


{
    "id": 7,
    "username": "y",
    "password": (hashed password),
    "email": "y"
}


POST/users/login:

Accepts “username” and “password” strings which are all required. 
If POST is successful, message: “User (username) logged in”, user primary key, and a token will be returned.
The deployed endpoint is at: https://rp-backend-web19.herokuapp.com/users/login
A successful POST will result in a 200 status code.
If an error occurs on the POST, a 500 status code will be returned.
If an username or password are missing, a 400 status code and message: 'Submit both username and password when logging in!' will be returned.
If username or password do not match an entry in the ‘users’ table,
a 400 status code and message: 'Submit both username and password when logging in!' will be returned.

The shape of the data returned is:

{
    "message": "User y logged in",
    "userId": "7",
    "token": “(token)”
}

POST/manyToMany:

Accepts “user_id” and “restaurant” strings which are all required. This information is posted to the ‘manyToMany’ table where they serve as forein keys connecting the ‘users’ and ‘restaurants table’. This allows us to keep track of when a user visits a restaurant.
If POST is successful,an array holding the primary key of the entry to the ‘manyToMany’ table is returned..
The deployed endpoint is at: https://rp-backend-web19.herokuapp.com/manyToMany
A successful POST will result in a 200 status code.
If an error occurs on the POST, a 500 status code will be returned.
The shape of the data returned is:


[
    11
]




