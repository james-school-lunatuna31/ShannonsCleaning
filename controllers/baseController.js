const baseController = {};

baseController.loadDefaults = function (req, res) {
    res.render('index', {
        title: 'About Me'
    });
};

module.exports = baseController;
