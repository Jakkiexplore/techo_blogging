const User = require('./User');
const MyBlog = require('./MyBlog');

User.hasMany(MyBlog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

MyBlog.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, MyBlog };
