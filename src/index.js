const { getInfo, sendInfo } = require('./utils/apiCodenation.js');

getInfo()
    .then(()=>{
        sendInfo();
});

 