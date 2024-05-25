const baseController = {};

baseController.loadDefaults = function (req, res) {
    res.render('index', {
        title: 'Home Page'
    });
};

module.exports = baseController;
