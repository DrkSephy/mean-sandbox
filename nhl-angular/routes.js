module.exports = function(router, request){
    // The Router handles any requests within this endpoint
    // depending on where router is used. 
    router.get('/hello', function(req, res){
        var url = 'http://nhlwc.cdnak.neulion.com/fs1/nhl/league/teamroster/PIT/iphone/clubroster.json';
        request(url, function(error, response, body){
            if(!error && response.statusCode === 200){
                res.send(body);
            }
        });
    });
}