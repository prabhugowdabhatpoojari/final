var fs = require('fs');
fs.readFile('names.txt', function (err, data) {
                    if (err) throw err;

    console.log(String(data));
});