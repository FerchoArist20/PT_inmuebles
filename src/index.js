import app from "./app.js"
import {sequelize} from "./database/database.js";

//import './models/inmueble.js'

async function main(){
    try {
        await sequelize .sync({force:false});
        console.log("Conexion establecida correctamente.");
        app.listen(4000);
        console.log("server is listening on port", 4000);
    } catch (error) {
        console.error("No fue posible realizar la conexion.", error);
    }
}

main();
