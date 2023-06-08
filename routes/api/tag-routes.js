const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
router.get('/api/tags', (req, res) => {
  res.send('endpoint')
});

router.get('/api/tags', async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [{ model: Product}],
      })
      res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const oneTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!oneTag) {
      res.status(404).json({ message: 'No Tag found!' });
      return;
    }

    res.status(200).json(oneTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create({
       id: req.body.id,
       name: req.body.name,
     })
     res.status(200).json(newTag)
   } catch (err) {
     res.status(400).json(err);
   }
});

router.put('/:id', async (req, res) => {
  try{
    const updateTag = await Category.put({
    id: req.body.id,
    name: req.body.name
  });
  res.status(200).json(updateTag)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Category.destroy({
      where: {
        id: req.params.id,
      }
    })
    if (!deleteTag) {
      res.status(404).json({message: 'no category found with that id'})
      return;
    }
    res.status(200).json(deleteTag);
    } catch (err) {
      res.status(500),json(err)
    }
});

module.exports = router;
