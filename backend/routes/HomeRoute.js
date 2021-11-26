
const { 
    getRentalsBasedOnProperties
    } = require('../controllers/HomeController');
router.get('/search', getRentalsBasedOnProperties)
