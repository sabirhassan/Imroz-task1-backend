
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {fullname: "Sabir Hassan", email: 'sabir@gmail.com', password: '123456', gender:'male'},
        {fullname: "Irfan Mustafa", email: 'irfan@gmail.com', password: '123456', gender:'male'},
      ]);
    });
};
