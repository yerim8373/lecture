const dgram = require('dgram');
const buf1 = Buffer.from('I am Alice');
const buf2 = Buffer.from(' Or Bob');
const client = dgram.createSocket('udp4');

client.send([buf1, buf2], 41234, '172.31.119.7', (err) => {
    if(err){
        console.log(err)
    }
    client.close();
});