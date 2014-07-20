var mongoose = require('mongoose'),
    async = require('async'),
    League = mongoose.model('League'),
    _ = require('underscore')

exports.create = function(req, res){
    var league = new League(req.body);
    league.commissioner = req.user;
    league.save();
    res.jsonp(league);
}