import { databaseSIRS } from '../config/Database.js'
import { rlTigaTitikSatuHeader, rlTigaTitikSatuDetail, jenisPelayanan } from '../models/RLTigaTitikSatu.js'
import Joi from 'joi'

export const getDataRLTigaTitikSatu = (req, res) => {
    rlTigaTitikSatuHeader.findAll({
        attributes: ['id','tahun'],
        where:{
            rs_id: req.user.rsId,
            tahun: req.query.tahun
        },
        include:{
            model: rlTigaTitikSatuDetail,
            include: {
                model: jenisPelayanan
            }
        }
    })
    .then((results) => {
        res.status(200).send({
            status: true,
            message: "data found",
            data: results
        })
    })
    .catch((err) => {
        res.status(422).send({
            status: false,
            message: err
        })
        return
    })
}

export const insertDataRLTigaTitikSatu =  async (req, res) => {
    const schema = Joi.object({
        tahun: Joi.number().required(),
        data: Joi.array()
            .items(
                Joi.object().keys({
                    jenisPelayananId: Joi.number().required(),
                    jumlahPasienAwalTahun: Joi.number().required(),
                    jumlahPasienMasuk: Joi.number().required(),
                    pasienKeluarHidup: Joi.number().required(),
                    kurangDari48Jam: Joi.number().required(),
                    lebihDariAtauSamaDengan48Jam: Joi.number().required(),
                    jumlahLamaDirawat: Joi.number().required(),
                    jumlahPasienAkhirTahun: Joi.number().required(),
                    jumlahHariPerawatan: Joi.number().required(),
                    kelasVVIP: Joi.number().required(),
                    kelasVIP: Joi.number().required(),
                    kelas1: Joi.number().required(),
                    kelas2: Joi.number().required(),
                    kelas3: Joi.number().required(),
                    kelasKhusus: Joi.number().required()
                }).required()
            ).required()
    })

    const { error, value } =  schema.validate(req.body)
    if (error) {
        res.status(404).send({
            status: false,
            message: error.details[0].message
        })
        return
    }

    let transaction
    try {
        transaction = await databaseSIRS.transaction()
        const resultInsertHeader = await rlTigaTitikSatuHeader.create({
            rs_id: req.user.rsId,
            tahun: req.body.tahun,
            user_id: req.user.id
        }, { transaction })

        const dataDetail = req.body.data.map((value, index) => {
            return {
                rl_tiga_titik_satu_id: resultInsertHeader.id,
                jenis_pelayanan_id: value.jenisPelayananId,
                jumlah_pasien_awal_tahun: value.jumlahPasienAwalTahun,
                jumlah_pasien_masuk: value.jumlahPasienMasuk,
                pasien_keluar_hidup: value.pasienKeluarHidup,
                kurang_dari_48_Jam: value.kurangDari48Jam,
                lebih_dari_atau_sama_dengan_48_jam: value.lebihDariAtauSamaDengan48Jam,
                jumlah_lama_dirawat: value.jumlahLamaDirawat,
                jumlah_pasien_akhir_tahun: value.jumlahPasienAkhirTahun,
                jumlah_hari_perawatan: value.jumlahHariPerawatan,
                kelas_VVIP: value.kelasVVIP,
                kelas_VIP: value.kelasVIP,
                kelas_1: value.kelas1,
                kelas_2: value.kelas2,
                kelas_3: value.kelas3,
                kelas_khusus: value.kelasKhusus,
                user_id: req.user.id
            }
        })

        const resultInsertDetail = await rlTigaTitikSatuDetail.bulkCreate(dataDetail, { transaction })
        await transaction.commit()
        res.status(201).send({
            status: true,
            message: "data created",
            data: {
                id: resultInsertHeader.id
            }
        })
    } catch (error) {
        console.log(error)
        if (transaction) {
            await transaction.rollback()
        }
    }
}