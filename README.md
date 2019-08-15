# Restaurant Passport

_Delpoyed URL:_ [https://build-restaurant-passport.herokuapp.com](https://build-restaurant-passport.herokuapp.com)

## Models

#### users

```
{
	id: integer, do not send this is automatically generated
	username: string, required
	password: string, required
	email: string, required
}
```

#### cities

```
{
	id: integer, do not send this is automatically generated
	name: string
}
```

#### restsurants

```
{
    	name: string, required
    	city: string, required
    	address: string, required
   	description: string, required
    	city_id integer, required, references id of city
}
```

## End Points

### Auth Routes

| Method | Endpoint          | Token Required | Description                                                                                                  |
| ------ | ----------------- | -------------- | ------------------------------------------------------------------------------------------------------------ |
| POST   | `/users/register` | no             | Registers a new user <br> Required: username, password, and department. <br>Returns id, username, and email. |
| POST   | `/users/login`    | no             | Signs in user and returns a token.<br> Required: username and password.<br> Returns a token and UserId       |

### Cities Routes

| Method | Endpoint                  | Token Required | Description                                                                                |
| ------ | ------------------------- | -------------- | ------------------------------------------------------------------------------------------ |
| GET    | `/cities`                 | yes            | Returns all cities                                                                         |
| POST   | `/cities/`                | yes            | Reqires: name <br> Adds a city to the database                                             |
| POST   | `/cities/restaurants`     | yes            | Requires: name. city, address, description, city_id <br> Adds a restaurant to the database |
| GET    | `/cities/:id/restaurants` | yes            | Returns name and id of restaurants in a city by city id                                    |
| GET    | `/cities/restaurants/:id` | yes            | Returns a restaurant by id                                                                 |
