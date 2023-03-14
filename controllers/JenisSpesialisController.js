import { jenisSpesialis } from "../models/JenisSpesialis.js";

export const getDataJenisSpesialis = (req, res) => {
    jenisSpesialis.findAll({
        attributes: ['id', 'nama'],
        where: {
            rl_id: req.query.rlid
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