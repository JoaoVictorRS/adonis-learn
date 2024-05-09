/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CargosController from '#controllers/cargos_controller'
import ClientesController from '#controllers/clientes_controller'
import ComandasController from '#controllers/comandas_controller'
import FormaPagamentosController from '#controllers/forma_pagamentos_controller'
import FuncionariosController from '#controllers/funcionarios_controller'
import IgredientesController from '#controllers/igredientes_controller'
import ProdutoIgredientesController from '#controllers/produto_igredientes_controller'
import ProdutosController from '#controllers/produtos_controller'
import TiposController from '#controllers/tipos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'eae viado de bosta',
  }
})

//Tudo relacionado com produtos
router.resource('/produtos', ProdutosController).apiOnly()
router.resource('/tipos', TiposController).apiOnly()
router.resource('/igredientes', IgredientesController).apiOnly()
router.resource('/produto_igredientes', ProdutoIgredientesController).apiOnly()

//Tudo relacionado com funcionarios
router.resource('/funcionarios', FuncionariosController).apiOnly()
router.resource('/cargos', CargosController).apiOnly()

//Comanda e seu pagamento
router.resource('/comandas', ComandasController).apiOnly()
router.resource('/formas_de_pagamento', FormaPagamentosController).apiOnly()

//Clientes
router.resource('/clientes', ClientesController).apiOnly()