
exports.up = function (knex, Promise) {
    return knex.schema.createTable('cities', cities => {
        cities.increments();

        cities
            .string('name', 300)
            .notNullable()
            .unique()

        cities
            .string('description', 300)

        //
    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('cities')
};
