var knex = require('../db/knex')

var db = {

  Landmarks: function() {
    return knex('landmarks');
  },

  insertLandmark: function(landmark) {
    return Landmarks().insert(landmark);
  },

  landmark: function(id) {
    return Landmarks().where('id', id)
  },

  updateLandmark: function(id, landmark) {
    return Landmarks().where('id', id).update(landmarks);
  },

  deleteLandmark: function(id) {
    return Landmarks().where('id', id).del();
  }

}

module.exports = db;
