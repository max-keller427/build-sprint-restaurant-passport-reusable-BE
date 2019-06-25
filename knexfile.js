
const productionDbConnection = process.env.DATABASE_URL;


module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/rp-db.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); //this may be an issue with heroku
      },
    },
  },

  production: {
    client: 'pg',
    connection: productionDbConnection,
    migrations: {
      directory: './data/migrations'
    },
    /* pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    }, */

  },


  /*  staging: {
     client: 'postgresql',
     connection: {
       database: 'my_db',
       user: 'username',
       password: 'password'
     },
     pool: {
       min: 2,
       max: 10
     },
     migrations: {
       tableName: 'knex_migrations'
     }
   }, */

  /* production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
*/
};
