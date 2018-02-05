angular.module('starter.services', [])

.service('FilhosService', function() {
  
  let filhos = [
    {
      nome: 'Marina',
      nascimento: '19/01/2010',
      anos: [],
      sexo: 'Feminino',
      imagem: 'img/chloe.jpg'
    }, 
    {
      nome: 'Enzo',
      nascimento: '15/06/2006',
      anos: [],
      sexo: 'Masculino',
      imagem: 'img/menino.jpg'
    }, 
    {
      nome: 'Valentina',
      nascimento: '19/01/2014',
      anos: [],
      sexo: 'não binário',
      imagem: 'img/menina1.jpg'
    }, 
    {
      nome: 'Lucas',
      nascimento: '24/02/2018',
      anos: [],
      sexo: 'Masculino',
      imagem: 'img/menino2.jpg'
    }]

    let servico = {};

    servico.listarFilhos = () => {
      return filhos;
    }

    let  filhoEscolhido = {};

    servico.escolherFilho = (filho) => {
      filhoEscolhido = filho;
    }

    servico.mostrarFilho = () => {
      return filhoEscolhido;
    }

    return servico;

})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
