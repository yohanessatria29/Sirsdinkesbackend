import { DataTypes, QueryTypes } from "sequelize"
// import { FOREIGNKEYS } from "sequelize/types/query-types.js"
// import database from "../config/Database.js"
import { databaseSIRS }  from "../config/Database.js"

export const jenisPelayanan = databaseSIRS.define('jenis_pelayanan', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    rl_id: {
        type: DataTypes.INTEGER
    },
    nama: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
})

export const RL = databaseSIRS.define('rl', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    nama: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
})


RL.hasMany(jenisPelayanan, {foreignKey:'id'})
jenisPelayanan.belongsTo(RL, {foreignKey:'rl_tiga_titik_satu_id'})
// export default jenisPelayanan;