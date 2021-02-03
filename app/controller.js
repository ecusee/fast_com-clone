const FastSpeedTest = require('fast-speedtest-api');

exports.getInternetSpeed = async (req,res) => {
    try {
       let speedtest = new FastSpeedTest({
           token: "your_app_token", // required
           verbose: false, // default: false
           timeout: 10000, // default:
           https: true, // default: 5000
           urlCount: 5, // default: true
           bufferSize: 8, // default: 5
           unit: FastSpeedTest.UNITS.Mbps // default: Bps
       });

       speedtest.getSpeed()
            .then(s => {
                console.log(`Speed: ${s} Mbps`);
                res.status(200).send({ speed: Math.round(s)});
            })
            .catch(err => {
                res.status(400).send(err.message);
            })
    } catch (err) {
        res.status(400).send(err.message)
    }
}