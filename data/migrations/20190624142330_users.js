
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', users => {
        users.increments();

        users
            .string('username', 300)
            .notNullable()
            .unique();

        users
            .string('password', 300)
            .notNullable();

        users
            .string('email', 300)
            .notNullable();
    });

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('users')

};
