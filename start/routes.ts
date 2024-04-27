/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ProdutosController from '#controllers/produtos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'eae viado de bosta',
  }
})

router.resource('/produtos', ProdutosController).apiOnly()
