const fs = require('fs-extra');
const sha1 = require('sha1');
const FormData = require('form-data');

module.exports = {

    decodeFrase(frase, casas){

        var abc = 'abcdefghijklmnopqrstuvwxyz';
        var abcArray = abc.split('');
        var fraseArray = frase.split('');

        var decoded = fraseArray.map((el, i)=>{

                var letra = abcArray.indexOf(el)

                if(letra != -1){

                    var ind = letra - casas;
                    
                    if (ind < 0) return el = abcArray[abcArray.length + ind]

                    else return el = abcArray[letra - casas]
               }
               else return el 
        })
        return decoded.join('')
    },

    record(conteudo){

        var json = JSON.stringify(conteudo); 
        return fs.writeFileSync('answer.json', json); 
             
    },

    readAnsewr(){
        console.log(fs.readFileSync("answer.json"))
        return fs.readFileSync("answer.json")
    },

    createFormData(){
        let form = new FormData();
        form.append('answer', fs.readFileSync("answer.json"));
        // console.log(fs.createReadStream('answer.json'))
        return form;
    },

    codeSha1(frase){
        return sha1(frase);
    }

}