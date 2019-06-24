const router = require('express').Router();
const Cities = require('./cities-model');

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

router.get('/', (req, res) => { // pull from cities table - get a list of cities 
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



router.get('/:id/restaurants', (req, res) => { // object containing city with associated restaurants
    const { id } = req.params;
    Cities.getCityBy(id)
        .then(city => {
            Cities.getRestaurants(city.id)
                .then(actions => {
                    res.status(200).json({ 'id': city.id, "name": city.name, "restaurants": restaurants })
                })
                .catch(error => {
                    res.status(500).json(error)
                })
        })

});

//get individual restaurant here !!!!!!!!!!! just use restaurant id, no need for city id

// last endpoint /restaurants/:id - pulls using primary key for restaurants



module.exports = router;