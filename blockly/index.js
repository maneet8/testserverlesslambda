var fs = require('fs')
var minimist = require('minimist');

const argv = minimist(process.argv.slice(2), {
    string: ['name'],
    stopEarly: true,
    unknown: function() {
        invalidArgument();
    }
});

fs.readFile('test.js', 'utf8', function(err1, data1) {
    if (err1) {
        return console.log(err1);
    }
    //var result = data.replace(/#TOBEREPLACEDWITHCODE/g, 'replacement');

    fs.readFile('handler.js', 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        var result = data.replace(/#TOBEREPLACEDWITHCODE/g, data1).replace(/hello/g, argv.name);

        fs.writeFile('handler.js', result, 'utf8', function(err) {
            if (err) return console.log(err);
        });
    });
});

fs.readFile('serverless.yml', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.replace(/hello/g, argv.name);

    fs.writeFile('serverless.yml', result, 'utf8', function(err) {
        if (err) return console.log(err);
    });
});