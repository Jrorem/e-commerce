const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
router.get('/api/tags', (req, res) => {
  res.send('endpoint')
});

router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [{ model: Product}],
      })
      res.status(200).json(allTags);
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
       tag_name: req.body.tag_name,
     })
     res.status(200).json(newTag)
   } catch (err) {
     res.status(400).json(err);
   }
});

router.put('/:id',  (req, res) => {
  
    Tag.update(req.body, {
      where: {id: req.params.id }
    
  })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(400).json(err))
  
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      }
    })
    if (!deleteTag) {
      res.status(404).json({message: 'no tag found with that id'})
      return;
    }
    res.status(200).json(deleteTag);
    } catch (err) {
      res.status(500).json(err)
    }
});

module.exports = router;
