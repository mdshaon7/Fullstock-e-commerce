

exports.isAuthorize = (req, res, next) => {
    if (req.session.user?.login) {
        next()
    } else {
        res.send({
            success: false,
            statusCode: 403,
            message: "try login first "
        })
    }
}