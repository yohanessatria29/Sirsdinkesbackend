import express from 'express'
import { getDataUser, insertDataUser, login, loginadmin, logout, logoutadmin } from '../controllers/UsersController.js'
import { verifyToken } from '../middleware/VerifyToken.js'
import { refreshToken } from '../controllers/RefreshToken.js'

import { getDataJenisPelayanan } from '../controllers/JenisPelayananController.js'
import { getDataJenisSpesialis } from '../controllers/JenisSpesialisController.js'
import { getDataJenisTindakan, getDataGroupJenisTindakan } from '../controllers/JenisGroupTindakanController.js'
import { getDataRumahSakit, getDataRumahSakitFilterbyKabKotaId } from '../controllers/RumahSakitController.js'
import { getDataJenisGolonganSebabPenyakit, getDataJenisGolonganSebabPenyakitB, getDataJenisGolonganSebabPenyakitBId } from '../controllers/JenisGolonganSebabPenyakitController.js'
import {  getDataJenisGolonganPenyakitB,  getDataJenisGolonganPenyakitBId} from '../controllers/JenisGolonganPenyakitController.js'

import {  getDataRLTigaTitikEnamIdTahun, getDataRLTigaTitikEnamId ,insertDataRLTigaTitikEnam, deleteDataRLTigaTitikEnamId, updateDataRLTigaTitikEnamId, getDataRLTigaTitikEnamKodeRSTahun } from '../controllers/RLTigaTitikEnamController.js'
import { deleteDataRLTigaTitikSembilanId, getDataRLTigaTitikSembilanId, getDataRLTigaTitikSembilanIdTahun, insertDataRLTigaTitikSembilan, updateDataRLTigaTitikSembilanId, getDataRLTigaTitikSembilanKodeRSTahun } from '../controllers/RLTigaTitikSembilanController.js'
import { insertDataRLEmpatBSebab, getDataRLEmpatBSebab, deleteDataRLEmpatBSebabId, getDataRLEmpatBSebabId,updateDataRLEmpatSebabId, getDataRLEmpatBSebabKodeRSTahun } from '../controllers/RLEmpatBSebabController.js'
import {  insertDataRLEmpatB, getDataRLEmpatB, deleteDataRLEmpatBId, getDataRLEmpatBId, updateDataRLEmpatId, getDataRLEmpatBKodeRSTahun } from "../controllers/RLEmpatBController.js";
import { getDataRLTigaTitikSatu, insertDataRLTigaTitikSatu } from '../controllers/RLTigaTitikSatuController.js'
import { getDataKabKota, getDataKabKotabyID } from '../controllers/KabKotaController.js'

const router = express.Router()

// Rumah Sakit
router.get('/apisirs/rumahsakit/:id', verifyToken, getDataRumahSakit)

// User
router.get('/apisirs/users', verifyToken, getDataUser)
router.post('/apisirs/users', insertDataUser)

// Token
router.post('/apisirs/login', login)
router.delete('/apisirs/logout', logout)

router.get('/apisirs/token', refreshToken)

// Jenis Pelayanan RL 3.1
router.get('/apisirs/jenispelayanan', verifyToken,
    getDataJenisPelayanan)

router.get('/apisirs/jenisspesialis', verifyToken,
    getDataJenisSpesialis)

router.get('/apisirs/jenisgrouptindakan', verifyToken, getDataGroupJenisTindakan)

router.get('/apisirs/jenistindakan', verifyToken,
    getDataJenisTindakan)

router.get('/apisirs/jenisgolongansebabpenyakit', verifyToken, getDataJenisGolonganSebabPenyakit)

// RL 3.1
router.post('/apisirs/rltigatitiksatu', verifyToken, insertDataRLTigaTitikSatu)
router.get('/apisirs/rltigatitiksatu', verifyToken, getDataRLTigaTitikSatu)

// RL 3.6
router.post('/apisirs/rltigatitikenam', verifyToken, insertDataRLTigaTitikEnam)
router.get('/apisirs/rltigatitikenam', verifyToken, getDataRLTigaTitikEnamIdTahun)
router.get('/apisirs/rltigatitikenam/update/:id', verifyToken, getDataRLTigaTitikEnamId)
router.patch('/apisirs/rltigatitikenam/:id', verifyToken, updateDataRLTigaTitikEnamId)
router.delete('/apisirs/rltigatitikenam/:id', verifyToken, deleteDataRLTigaTitikEnamId)


// RL 3.9
router.post('/apisirs/rltigatitiksembilan', verifyToken, insertDataRLTigaTitikSembilan)
// router.get('/apisirs/rltigatitiksembilan', getDataRLTigaTitikSembilan)
router.get('/apisirs/rltigatitiksembilan', verifyToken, getDataRLTigaTitikSembilanIdTahun)
router.get('/apisirs/rltigatitiksembilan/update/:id', verifyToken, getDataRLTigaTitikSembilanId)
router.patch('/apisirs/rltigatitiksembilan/:id', verifyToken, updateDataRLTigaTitikSembilanId)
router.delete('/apisirs/rltigatitiksembilan/:id', verifyToken, deleteDataRLTigaTitikSembilanId)


// RL 4 B SEBAB
router.post('/apisirs/rlempatbsebab', verifyToken, insertDataRLEmpatBSebab)
router.get('/apisirs/rlempatbsebab', verifyToken, getDataRLEmpatBSebab)
router.get('/apisirs/rlempatbsebab/penyakit', verifyToken, getDataJenisGolonganSebabPenyakitB)
router.get('/apisirs/rlempatbsebab/idpenyakit', verifyToken, getDataJenisGolonganSebabPenyakitBId)
router.delete('/apisirs/rlempatbsebab/:id', verifyToken, deleteDataRLEmpatBSebabId)
router.get('/apisirs/rlempatbsebab/update/:id', verifyToken, getDataRLEmpatBSebabId)
router.patch('/apisirs/rlempatbsebab/:id', verifyToken, updateDataRLEmpatSebabId)



// RL 4B 
router.post('/apisirs/rlempatb', verifyToken, insertDataRLEmpatB)
router.get('/apisirs/rlempatb', verifyToken, getDataRLEmpatB)
router.delete('/apisirs/rlempatb/:id', verifyToken, deleteDataRLEmpatBId)
router.get('/apisirs/rlempatb/penyakit', verifyToken, getDataJenisGolonganPenyakitB)
router.get('/apisirs/rlempatb/idpenyakit', verifyToken, getDataJenisGolonganPenyakitBId)
router.get('/apisirs/rlempatb/update/:id', verifyToken, getDataRLEmpatBId)
router.patch('/apisirs/rlempatb/:id', verifyToken, updateDataRLEmpatId)



// DINKES PROVINSI
router.post('/apisirsadmin/login', loginadmin)
router.delete('/apisirsadmin/logout', logoutadmin)
router.get('/apisirsadmin/token', refreshToken)

// Get Data Dinkes
router.get('/apisirs/apisirsadmin/:id', verifyToken, getDataRumahSakit)

// GET DATA KAB KOTA
router.get('/apisirsadmin/kabkota', verifyToken, getDataKabKota)

// GET DATA KABKOTA DINKES KAB
router.get('/apisirsadmin/kabkotaid', verifyToken, getDataKabKotabyID)

// GET DATA RS BY KAB KOTA
router.get('/apisirsadmin/rumahsakit/:kabkotaid', verifyToken, getDataRumahSakitFilterbyKabKotaId)

// DINKES KAB/KOTA

// GET DATA
router.get('/apisirsadmin/rltigatitikenam', verifyToken, getDataRLTigaTitikEnamKodeRSTahun)
router.get('/apisirsadmin/rltigatitiksembilan', verifyToken, getDataRLTigaTitikSembilanKodeRSTahun)
router.get('/apisirsadmin/rlempatb',verifyToken, getDataRLEmpatBKodeRSTahun)
// router.get('/apisirsadmin/rlempatb',verifyToken, getDataRLEmpatB)
router.get('/apisirsadmin/rlempatbsebab', verifyToken, getDataRLEmpatBSebabKodeRSTahun)
export default router