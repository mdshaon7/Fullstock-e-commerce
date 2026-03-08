const categoryModel = require("../model/category.model")
const slugify = require('slugify')


exports.addCategoryController = async (req, res, next) => {
    try {
        let { filename } = req.file
        let slug = slugify(req.body.name, {
            replacement: '-',  // replace spaces with replacement character, defaults to `-`
            remove: undefined, // remove characters that match regex, defaults to `undefined`
            lower: false,     // language code of the locale to use
            trim: true         // trim leading and trailing replacement chars, defaults to `true`
        })
        let image = `${process.env.SERVER_URL}/${filename}`
        let category = new categoryModel({
            ...req.body, image, slug
        })
        await category.save()
        res.send({ success: true, statusCode: 201, message: "create successfull", data: category })
    } catch (error) {
        res.send({ success: false, statusCode: 404, message: error.message })

    }

}
exports.allCategoryController = async (req, res) => {
    try {
        let caregory = await categoryModel.find()
        res.send({ success: true, statusCode: 200, message: "create fatch successfull", data: caregory })

    } catch (error) {
        res.send({ success: false, statusCode: 404, message: error.message })

    }
}

exports.updateCategoryController = async (req, res) => {
    let { id } = req.params;
    let { name, } = req.body;
    let { filename } = req.file;
    if (req.file) {
        let category = await categoryModel.findOne({ _id: id });

        let filepath = category.image.split("/");
        let imagepath = filepath[filepath.length - 1];
        let oldpath = path.join(__dirname, "../uploads");
        fs.unlink(`${oldpath}/${imagepath}`, async (err) => {
            if (err) {
                res.send({ success: false, statusCode: 500, message: "error message", data: category })

            } else {
                let image = `${process.env.SERVER_URL}/${filename}`;
                category.image = image;
                await category.save();

                res.send({ success: true, statusCode: 200, message: "category img update", data: category })

            }
        });
    } else {
        let update = await categoryModel.findOneAndUpdate(
            { _id: id },
            { name },
            { new: true },
        );

        res.send({ success: true, statusCode: 200, message: "category update", data: update })

    }
}