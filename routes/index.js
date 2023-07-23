const router = require('express').Router();
const apiRoutes = require('./api');

// const Product = require('../Product');
// const Category = require('../Category');
// const Tag = require('../Tag');
// const ProductTag = require('../ProductTag');


router.use('/api', apiRoutes);

// Product.belongsTo(Category, {
//   foreignKey: 'category_id',
// });
// Category.hasMany(Product, {
//   foreignKey: 'product_id',
//   onDelete: 'CASCADE',
// });
// Product.belongsTo(Tag, {
//   foreignKey: 'tag_id',
// });
// Tag.belongsToMany(Product, {
//   foreignKey: 'product_id',
// });

router.get("*", (req, res) => {
    res.send("<h1>Hello!</h1>")
  });

module.exports = router;
// module.exports = {
//   Product, 
//   Category, 
//   Tag, 
//   ProductTag
// };