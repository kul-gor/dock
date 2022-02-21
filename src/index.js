const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = 8045;


app.get('/var/igor/:name', (req, res) => {
    const {params: {name}} = req;

    fs.access(`${name}`, function (error) {
        if (error) {
            if (!name.endsWith('.var')) {
                res.send(`<div style="text-align: center; margin-top: 60px; font-family: sans-serif">
                                    <h1 style="color: red; font-size: 50px">Error 502</h1>
                                    <h2>Wrong file extension, make sure the file extension is .log</h2>
                               </div>
`)
            } else {
                res.send(`     <div style="text-align: center; margin-top: 60px; font-family: sans-serif">
                                    <h1 style="color: red; font-size: 50px">Error 404</h1>
                                    <h2>This log file does not exist</h2>
                                 </div>
`)
            }
        } else {
            const readLog = () => {
                return fs.readFileSync(
                    path.join('/var/var/igor/', `${name}`),
                    'utf-8',
                    (err, data) => {
                        if (err) {
                            throw err;
                        }
                        return data;
                    }
                );
            }
            const fullTime = readLog()
                .toString()
                .match(/resptime:".*((\d+.\d*)*)"/gi)
                .map(item => {
                    return item.replace(/\w+:"/gi, '')
                        .replace(/"/gi, '')
                        .replace(/-/gi, '0')
                        .split(',')
                        .reduce((sum, current) => sum + Number(current), 0)
                })
                .reduce((sum, current) => sum + Number(current), 0)
            ;

            res.send(` <div style="text-align: center; margin-top: 60px; font-family: sans-serif">
                                  <h1 style="font-size: 50px">Total time: <span style="color: red; font-size: 50px">${fullTime}</span> seconds</h1>
                            </div>`)
        }

    });

});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})