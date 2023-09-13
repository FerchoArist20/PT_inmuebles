import Sequelize from "sequelize"

export const sequelize = new Sequelize (
    "datos_inmuebles",
    "postgres", 
    "Fercho2023!",
    {
      host:"localhost",
      dialect: "postgres",
    }
);