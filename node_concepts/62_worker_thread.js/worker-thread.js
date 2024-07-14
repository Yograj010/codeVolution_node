const { parentPort } = require("worker_threads");

let j=0;
for(let i=0; i<6000000000; i++){
    j++;
}

parentPort.postMessage(j);  //returnin gthe value of j as message to the parent worker thread i.e, wehre path of this file is written