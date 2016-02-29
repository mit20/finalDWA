module.exports = function(express){
    
    //This is the router
    var router = express.Router();
    
    router.get('/v1', function(req, res){
        //Static object data
        res.json({"Hello": "World"}); 
    });
    
    return router;
}