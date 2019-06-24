
exports.up = function (knex, Promise) {
    return knex.schema.createTable('manyToMany', manyToMany => {
        manyToMany.increments()

        manyToMany
            .integer('city_id')
            .unsigned()
            .references('id')
            .inTable('cities')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

        manyToMany
            .integer('restaurant_id')
            .unsigned()
            .references('id')
            .inTable('restaurants')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })

};

exports.down = function (knex, Promise) {

};
