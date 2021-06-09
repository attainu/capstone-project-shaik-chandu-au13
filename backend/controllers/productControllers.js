exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message:'this route will provide all the products'
    })
}