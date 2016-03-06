
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('landmarks').del(),

    // Inserts seed entries
    knex('landmarks').insert({id: 1, image_link: 'https://pixabay.com/en/squirrel-digging-earth-balcony-box-1228610/', description: 'squirrel'}),
    knex('landmarks').insert({id: 1, image_link: 'rowValue', description: 'Image 2'}),
    knex('landmarks').insert({id: 1, image_link: 'rowValue', description: 'Image 3'}),
  );
};
