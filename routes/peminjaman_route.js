import express from 'express'

import {
   addPeminjaman,
   getAllPeminjaman,
   getPeminjamanById,
   pengembalianBarang,
   getUsageAnalysis,
   analyzeItems
} from '../controllers/peminjaman_controllers.js'



const app = express()

import { authorize } from '../controllers/auth_controllers.js'
import { IsAdmin } from '../middleware/role_validation.js'

app.get('/borrow', getAllPeminjaman)
app.get('/borrow/:id',  getPeminjamanById)
app.post('/borrow',  addPeminjaman)
app.post('/return',  pengembalianBarang)
app.post('/usage-report',authorize,[IsAdmin], getUsageAnalysis)
app.post('/borrow-analysis', authorize,[IsAdmin], analyzeItems)

export default app
