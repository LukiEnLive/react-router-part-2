import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/user.js'
import { createHash } from 'crypto'

export default class UsersController {

    public async findAll({response} : HttpContext){
        /*response.json([
            {
              id: 1,
              lastname: 'Doe',
              firstname: 'John',
              online: true,
            },
            {
              id: 2,
              lastname: 'Doe',
              firstname: 'Jane',
              online: false,
            },
          ])*/

        const users = await User.all()
        response.json(users)
    }

    public async insert({request, response}: HttpContext){
        const { firstname, lastname, login, password} = request.body()

        const hash = createHash("sha256")
        hash.update(password)

        User.create({
            firstname: firstname,
            lastname: lastname,
            login: login,
            password: hash.digest("hex")
        })

        response.ok("")
    }
}