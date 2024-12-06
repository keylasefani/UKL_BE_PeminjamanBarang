import express from 'express'
import {
   getAllBarang,
   getBarangById,
   addBarang,
   updateBarang,
   deleteBarang
} from '../controllers/barang_controllers.js'

const app = express()
import { authenticate,authorize } from '../controllers/auth_controllers.js'
import { IsAdmin, IsMember } from '../middleware/role_validation.js'


app.get('/',  getAllBarang)
app.get('/:id', getBarangById)
app.post('/',authorize,[IsAdmin], addBarang)
app.put('/:id', authorize, [IsMember], updateBarang)
app.delete('/:id', deleteBarang)

export default app