//Como consultar um CEP
const {consultarCep} = require ('correios-brasil');
let cep = '50100060';

consultarCep(cep).then (response => {
    console.log(response)
});

//Como consultar o preço e o prazo de entrega de uma encomenda
const {calcularPrecoPrazo} = require ('correios-brasil')
let args = {
    // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
    sCepOrigem: '50100060',
    sCepDestino: '58051820',
    nVlPeso: '1',
    nCdFormato: '1',
    nVlComprimento: '20',
    nVlAltura: '20',
    nVlLargura: '20',
    nCdServico: ['04014', '04510'], //Array com os códigos de serviço
    nVlDiametro: '0',
  };

  calcularPrecoPrazo(args).then(response =>{
    console.log(response);
  });
  

