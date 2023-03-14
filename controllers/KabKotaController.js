// import {}
import { Sequelize } from "sequelize";
import { kabKota, propinsi} from "../models/KabKota.js";
import joi from "joi"
const Op = Sequelize.Op;

export const getDataKabKota = (req, res) => {
  const count = req.user.rsId.length;
  if(count > 2){
    kabKota.findAll({
      where: {
        id: req.user.rsId
      }
    })
    .then((results) => {
          res.status(200).send({
            status: true,
            message: "data found",
            data: results,
          });
      })
      .catch((err) => {
          res.status(422).send({
            status: false,
            message: err,
          });
          return;
        });
  } else if (count == 2){
    kabKota.findAll({
        where: {
            provinsi_id: req.user.rsId
        }
    })    
    .then((results) => {
        res.status(200).send({
          status: true,
          message: "data found",
          data: results,
        });
    })
    .catch((err) => {
        res.status(422).send({
          status: false,
          message: err,
        });
        return;
      });
  }
    // console.log(req.user.rsId.length)
}

export const getDataKabKotabyID = (req, res) => {
  kabKota.findOne({
    where: {

    }
  })
}