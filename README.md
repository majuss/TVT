# TVT
Twitch for any smart TV, primarly for LG's webOS. It bundles PatrickRorth's Twitch.TV app.

## To get this running on your TV...
1. Connect to your Raspberry Pi and install nodejs and nginx
2. Run `sudo -H pip install streamlink` to install streamlink, the app which will get us the m3u stream-urls
3. Edit the Twitch API key in `html/bundle.js` at line 6 and line 59 to match your Raspberries IP
4. Move the `html` directory to the nginx serving directory
5. Run `screen` and then run `node server/server.js` to start the serving webserver
6. Open the browser on your smart TV and browse to the IP of your Pi, enjoy Twitch on the big screen!
