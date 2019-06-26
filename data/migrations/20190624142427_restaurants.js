
exports.up = function (knex, Promise) {
    return knex.schema.createTable('restaurants', restaurants => {
        restaurants.increments()

        restaurants
            .string('name', 300)
            .notNullable()
            .unique()

        restaurants
            .string('city', 300)
            .notNullable()

        restaurants
            .string('address', 300)
            .notNullable()

        restaurants
            .string('description', 500)
            .notNullable()

        restaurants
            .integer('city_id')
            .unsigned()
            .references('id')
            .inTable('cities')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('restaurants')
};
