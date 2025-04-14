/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const UsersController = () => import("#controllers/users_controller")

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/users', [UsersController, "findAll"])

router.post('/users', [UsersController, "insert"])