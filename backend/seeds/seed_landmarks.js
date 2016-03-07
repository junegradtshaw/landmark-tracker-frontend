
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('landmarks').del(),

    // Inserts seed entries
    knex('landmarks').insert({image_link: 'backend/public/images/columbine_64.jpg', description: 'Columbine flower'}),
    knex('landmarks').insert({image_link: 'backend/public/images/gargoyle_64.jpg', description: 'Gargoyle Notre Dame'})
  );
};
