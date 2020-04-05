const axios = require('axios');
const { decodeFrase, record, codeSha1, readAnsewr, createFormData } = require('./utils/decoder.js');

async function getInfo(){

    await axios.get('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=9683a50837fdf8b7d107196a64983d37016a7286')                     
                        .then((response)=>{
                            let data = response.data;
                            data.decifrado = decodeFrase(response.data.cifrado, response.data.numero_casas);
                            data.resumo_criptografico = codeSha1(data.decifrado);
                            record(data);
                        });
}
// async function postInfo(){

//     await axios.post('https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=SEU_TOKEN',)
// }
getInfo();
createFormData()

console.log(createFormData())
 