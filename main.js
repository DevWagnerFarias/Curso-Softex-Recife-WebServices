/*Nesse exercício vou fazer uma consulta rápida ao site ViaCEP, que é um webservice onde entrego o 
número de um CEP, e ele me retorna o endereço*/

//Vamos utilizar o axios, que é um cliente HTTP baseado-em-promessas para o node.js e para o navegador.
//Dentro da classe Api, vamos criar um método estático getAdress
/*Vamos usar o async/await, pois estamos numa programação assíncrona, já que temos que esperar a resposta da
nossa requisição chegar*/
 
import axios from 'axios';

class Api{

    static async getAdress (cep){
       const response = await axios.get(`https://viacep.com.br/ws/${cep}/xml/`);
       console.log('reponse: ', response);
    }
}
Api.getAdress('50100060');