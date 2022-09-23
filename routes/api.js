const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Song = require('../models/song');
const Video = require('../models/video');

router.get('/', (req, res) => {
 return res.json({name:"ade on fire"});
});

router.post('/song',(req, res, next) =>{
  Song.create(req.body)
  .then((data) => res.json(data))
  .catch((error)=> console.log(error))
});

router.get("/song/:id", (req,res)=>{
  Song.findOne({_id:req.params.id})
  .then((data) => res.json(data))
})

router.get('/songs', (req, res, next) => {
  Song.find({})
  .then((data) => res.json(data))
  .catch(next);
});


router.delete("/song/:id", (req, res, next) => {
  // delete placeholder
  Song.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});


router.get("/videos", (req, res, next) => {
  Video.find({})
  .then((data) => res.json(data))
  .catch(next);
});

router.post('/video',(req, res, next) =>{
  Video.create(req.body)
  .then((data) => res.json(data))
  .catch((error)=> console.log(error))
});

router.get("/video/:id", (req,res)=>{
  Video.findOne({_id:req.params.id})
  .then((data) => res.json(data))
})



router.delete("/video/:id", (req, res, next) => {
  Video.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});







// router.post('/todos', (req, res, next) => {
//   // post placeholder
//   if (req.body.action) {
//     Todo.create(req.body)
//       .then((data) => res.json(data))
//       .catch(next);
//   } else {
//     res.json({
//       error: 'The input field is empty',
//     });
//   }
// });

// router.delete('/todos/:id', (req, res, next) => {
//   // delete placeholder
//   Todo.findOneAndDelete({ _id: req.params.id })
//     .then((data) => res.json(data))
//     .catch(next);
// });

// router.put('/todos/:id', (req, res, next) => {
//     // delete placeholder
//     Todo.findOneAndDelete({ _id: req.params.id })
//       .then((data) => res.json(data))
//       .catch(next);
//   });

//   router.patch('/todos/:id', (req, res, next) => {
//     // delete placeholder
//     Todo.findOneAndDelete({ _id: req.params.id })
//       .then((data) => res.json(data))
//       .catch(next);
//   });


module.exports = router;