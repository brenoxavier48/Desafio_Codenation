const axios = require('axios');
const { decodeFrase, record, codeSha1, createFormData } = require('./utils.js');

module.exports = {

    async getInfo(){
    
        console.log('getInfo initiated')
        await axios.get('https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=****************************************')                     
                .then((response)=>{
                    let data = response.data;
                    data.decifrado = decodeFrase(response.data.cifrado, response.data.numero_casas);
                    data.resumo_criptografico = codeSha1(data.decifrado);
                    record(data);
                    console.log('Json file created')
                    console.log('getInfo finished')
                })
                .catch((err) => {console.log(err)})
    },
    
    async sendInfo(){
    
        const form = createFormData();
        console.log('sendInfo initiated')
        console.log(form.getHeaders()['content-type'])
        await axios.post('https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=****************************************', form, {
            headers:{
                'Content-type': form.getHeaders()['content-type']
            }
        })
        .then((response)=>{
            console.log('sendInfo finished')
            console.log(response)
        })
        .catch((err)=>{
            console.log(err);
        });
    }
}