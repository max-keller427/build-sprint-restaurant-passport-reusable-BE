const router = require('express').Router();
const Cities = require('./cities-model');
const { authenticate } = require('../users/restrict-middleware')

/* router.post('/', (req, res) => {
    if (req.body.username && req.body.password && req.body.email) {
        Users.addUser(req.body)
            .then(ids => {
                res.status(200).json(ids)
            })
            .catch(error => {
                res.status(500).json(error)
            })
    } else {
        res.status(422).json({ error: "Please Complete All Forms" })
    }
}); */

// !!!!!!!********!*!*!*!*!*!*!*! still have to add restrict middleware to routes!!!!!!

router.get('/', /* authenticate, */(req, res) => { // pull from cities table - get a list of cities 
    Cities.getCities()
        .then(cities => {
            res.status(200).json(cities)
        })
        .catch(error => {
            res.status(500).json(error)
        });
});

router.post('/', (req, res) => { // posts to cities
    Cities.addCity(req.body)
        .then(ids => {
            res.status(200).json(ids)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post('/restaurants', (req, res) => { // posts to restaurants
    Cities.addRestaurant(req.body)
        .then(ids => {
            res.status(200).json(ids)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})



router.get('/:id/restaurants', /* authenticate, */(req, res) => { // object containing city with associated restaurants
    const { id } = req.params;
    Cities.getCityById(id)
        .then(city => {
            console.log('city', city)
            Cities.getRestaurants(city.id)
                .then(restaurants => {
                    console.log(restaurants)
                    res.status(200).json({ 'id': city.id, "name": city.name, "restaurants": restaurants })
                })
                .catch(error => {
                    res.status(500).json(error)
                })
        })

});

router.get('/restaurants/:id', /* authenticate, */(req, res) => {
    const id = req.params.id
    Cities.getRestaurantById(id)
        .then(restaurant => {
            res.status(200).json(restaurant)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

//get individual restaurant here !!!!!!!!!!! just use restaurant id, no need for city id

// last endpoint /restaurants/:id - pulls using primary key for restaurants



module.exports = router;