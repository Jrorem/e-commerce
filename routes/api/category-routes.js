const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/api/categories', (req, res) => {
  res.send('endpoint')
});

router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      include: [{ model: Product}],
      })
      res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err)
  }
  });

router.get('/:id', async (req, res) => {
  try {
    const oneCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!oneCategory) {
      res.status(404).json({ message: 'No category found!' });
      return;
    }

    res.status(200).json(oneCategory);
  } catch (err) {
    res.status(500).json(err);
  }
  });

router.post('/', async (req, res) => {
  try {
 const newCategory = await Category.create({
    
    category_name: req.body.category_name,
  })
  res.status(200).json(newCategory)
} catch (err) {
  res.status(400).json(err);
}
});

router.put('/:id',  (req, res) => {

    Category.update(req.body, {
      where: { id: req.params.id},
    })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err))
    
  
  });

router.delete('/:id', async (req, res) => { 
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      }
    })
    if (!deleteCategory) {
      res.status(404).json({message: 'no category found with that id'})
      return;
    }
    res.status(200).json(deleteCategory);
    } catch (err) {
      res.status(500).json(err)
    }
});

module.exports = router;
