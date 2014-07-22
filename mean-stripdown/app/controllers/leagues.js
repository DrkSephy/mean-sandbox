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

exports.show = function(req, res){
    res.jsonp(req.league);
}

exports.league = function(req, res, next, id){
    var League = mongoose.model('League')

    League.load(id, function (err, league){
        if (err) return next(err);
        if (!league) return next(new Error('Failed to load league ' + id));
        req.league = league;
        next();
    })
}