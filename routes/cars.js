const { Router } = require('express')
const router = Router();

const cars = [];

router.post('/add', (req, res) => {
    const { car } = req.body;
    console.log(req.body);

    if (!car) {
        res.json({ status: false });
        return;
    }
    console.log(car);
    cars.push(JSON.parse(car));

    res.json({ status: true });
});

router.get('/', (req, res) => {
    res.render('cars.ejs', { cars });
});

module.exports = router;