/**
 * Created by cliftoncraig on 12/30/16.
 */
var twitter = require('twitter');

var client = new twitter({
    consumer_key: 'eWUK1Y1Z2SJkIo2HDp2JXSRFd',
    consumer_secret: 'XqxmrS35Ehu7kRfCYfu9QRkqL4JrF3SQCoSTut5zmF8O9Q73Es',
    access_token_key: '166554503-bzT4CWTSS41vqzBvsD3A7eDdSOYKgpOCK3ST4luV',
    access_token_secret: '65UWstqOTkPU98CZTe9qTrOsBf1Wqj3e101517mI6CYhT'
});

var stream = client.stream('statuses/filter', {track: '#100DaysOfCode'});
stream.on('data', function(event) {
    console.log("Event ", event.text, "\n", event);
});

stream.on('error', function(error) {
    throw error;
});
