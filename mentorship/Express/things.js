const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // logic
    res.send("Get route on things");
});

// post 
router.post('/', (req, res) => {
    res.send("Post route on things");
});

// export router to be used in other files
module.exports = router;