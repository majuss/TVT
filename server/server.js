const http = require('http');
const url = require('url');

let pathName;
const util = require('util');
const exec = util.promisify(require('child_process').exec);


http.createServer(function (request, response) {
    if (url.parse(request.url).pathname != "/favicon.ico") {
        pathName = url.parse(request.url).pathname;
    }
    let command = 'streamlink https://www.twitch.tv' + pathName + ' best --stream-url --twitch-disable-hosting'

    ls(command, response)

    console.log(pathName);

}).listen(8002);



async function ls(command, response) {
    const { stdout, stderr } = await exec(command);
    console.log(stdout)
    response.writeHead(200, {   'Content-type': 'text/plain',
                                'Access-Control-Allow-Origin': '*'
                            });
    response.write('' + stdout);
    response.end();
}
