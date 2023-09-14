import {inmueble} from '../models/inmueble.js'

export const getinmuebles = async (req, res) => {
    try {
        const inmuebles_get1 = await inmueble.findAll()
        res.json(inmuebles_get1);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getinmueble = async (req, res) => {
    try {
        const {id} = req.params;
        const inmueble_get1 = await inmueble.findOne({
            where:{
                id,
            },
        });

        if(!inmueble_get1) 
            return res.status(404).json({menssage:'Proyecto no existe'});

        res.json(inmueble_get1);
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
};

export const createinmueble = async (req, res) => {
    const {nombre, descripcion, direccion, precio} = req.body;
    try {
        const newinmueble = await inmueble.create({
            nombre,
            descripcion,
            direccion,
            precio
        });
        res.json(newinmueble);
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }


  
    
};

export const updateinmueble = async (req, res) =>{

    try {

    const {id} =req.params;
    const {nombre, descripcion, direccion, precio} = req.body;
    const inmueble_up1 = await inmueble.findByPk(id);
    inmueble_up1.nombre = nombre;
    inmueble_up1.descripcion = descripcion;
    inmueble_up1.direccion = direccion;
    inmueble_up1.precio = precio;
    await inmueble_up1.save();
    res.json(inmueble_up1);

    } catch (error) {

    return res.status(500).json({message: error.message});
    
    }
};

export const deleteinmueble = async (req, res) =>{
    try {
        const { id } = req.params;
        const inmuebleeliminado = await inmueble.destroy({
            where:{
                id,
            },
        });
        const mensaje = {
            mensaje: 'Inmueble eliminado correctamente',
          };
          
        if (inmuebleeliminado === 0) {
            return res.status(404).json({ message: "Inmueble no encontrado" });
        }
        res.json(mensaje); 

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};