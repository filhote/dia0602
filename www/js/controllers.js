angular.module('starter.controllers', [])

    .controller('LoginCtrl', function ($scope) {

    })

    .controller('FilhosCtrl', function ($scope, FilhosService, $state) {

        $scope.filhote =  FilhosService.mostrarFilho();

        $scope.$on( "$ionicView.enter", function( scopes, states ) { 
            if( states.fromCache && states.stateName == 'filho' ) { 

                $scope.filhote =  FilhosService.mostrarFilho();
                
                console.log($scope.filhote);
            }
        });
    
        $scope.voltarDash = () =>{
            $state.go('tab.dash');
        }
    })

    .controller('DashCtrl', function ($scope,$state,FilhosService) {

        // $scope.hoje = Date.now();

        $scope.filhos = FilhosService.listarFilhos();

        $scope.selecionarPerfil = (filho) => {
            FilhosService.escolherFilho(filho);

            $state.go('filho');
  
        }

        for (let filho of $scope.filhos) {
            // let idade = hoje - filho.nascimento;
            filho.anos.push();
        }

        $scope.user = {
            name: 'Keylla'
          
        }
    })

    .controller('AgendaCtrl', function ($scope) {

        $scope.criacao = false;

        $scope.abrirCriador = () => {
            $scope.criacao = true;
        }

        let remove = false;

        $scope.compromissos = [{
            id: 1,
            titulo: 'Filho Escola',
            hora: '08:00',
            dia: 'Qui'
        }, {
            id: 2,
            titulo: 'Filho Piano',
            hora: '08:00',
            dia: 'Sex'
        }]

        $scope.itemClicked = (item) => {
            if (!remove) {
                console.log(item);
            }
            remove = false;
        }

        $scope.itemRemove = (item) => {
            remove = true;
            console.log('remove' + item);
        }
    })


    .controller('FotoCtrl', function ($scope) {

    })

    .controller('ArvoreCtrl', function ($scope) {

    })

    .controller('PerfilCtrl', function ($scope) {

    });

