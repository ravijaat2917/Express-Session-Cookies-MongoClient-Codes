function errorHandler(err, req, res, next){
    return res.status(500).json({error: error.message});
}