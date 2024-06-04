const fs = require('fs');
const path = require('path');

class ViewHandler {
    constructor(imageDirectory) {
        this.imageDirectory = imageDirectory;
    }

    getImageList(req, res, next) {
        fs.readdir(this.imageDirectory, (err, files) => {
            if (err) {
                console.error('Error reading image directory:', err);
                return next(err);
            }
            const imagePaths = files.map(file => {
                // Construct the path and replace backslashes with forward slashes
                let filePath = path.join('/images/header/slideshow', file);
                return filePath.replace(/\\/g, '/');
            });
            res.locals.imageList = imagePaths;
            next();
        });
    }
}

module.exports = ViewHandler;
