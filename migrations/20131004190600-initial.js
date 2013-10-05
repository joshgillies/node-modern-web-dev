var dbm = require('db-migrate');
var type = dbm.dataType;
var async = require('async');

exports.up = function(db, callback) {
  async.series([
    db.createTable.bind(db, 'Polls', {
      id: { type: 'int', primaryKey: true },
      created: { type: 'datetime', notNull: true },
      last_voted : { type: 'datetime', notNull: true },
      question: { type: 'string' }
    }),
  ], callback);
};

exports.down = function(db, callback) {
  async.series([
    db.dropTable.bind(db, 'events_handles'),
    db.dropTable.bind(db, 'htmlrequests')
  ], callback);
};
