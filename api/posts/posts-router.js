// implement your posts router here
const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.json('It works')
})
router.get('/:id', (req, res)=>{

})
router.post('/', (req, res)=>{

})
router.delete('/', (req, res)=>{

})
router.put('/:id', (req, res)=>{

})
router.get('/:id/comments', (req, res)=>{

})
module.exports = router;