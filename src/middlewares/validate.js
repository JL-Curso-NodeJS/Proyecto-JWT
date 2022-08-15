module.exports = (scheme) => {

    return (req, res, next) => {
        let result = scheme.validate(req.body) 

        if (result.error) { 
            next(result.error) 
        } else { 
            next() 
        }
    }

}

