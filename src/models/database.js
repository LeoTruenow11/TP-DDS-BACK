import { Sequelize } from "sequelize";
import ProcesadorModel from "./procesadores.js";
import NotebookModel from "./notebook.js";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './notebooks.db'
}) 
/*
// Definición de modelos
const Procesador = sequelize.define('Procesador', ProcesadorModel.ProcesadoresAttributes, ProcesadorModel.ProcesadoresOptions);
const Notebook = sequelize.define('Notebook', NotebookModel.NotebooksAttributes, NotebookModel.NotebooksOptions);

// Definición de asociaciones
Notebook.belongsTo(Procesador, { foreignKey: 'IdProcesador' });
Procesador.hasMany(Notebook, { foreignKey: 'IdProcesador' });
*/

sequelize.define(
    'Procesadores',
    ProcesadorModel.ProcesadoresAttributes,
    ProcesadorModel.ProcesadoresOptions
)

sequelize.define(
    'Notebooks',
    NotebookModel.NotebooksAttributes,
    NotebookModel.NotebooksOptions
)

sequelize.models.Notebooks.belongsTo(sequelize.models.Procesadores,{
    foreignKey: 'IdProcesador'
})



async function initializeDatabase() {
    try {
        await sequelize.sync();
        console.log("Database synchronized successfully.");
    } catch (err) {
        console.error("Failed to synchronize database:", err.message);
    }
}

initializeDatabase()

export default sequelize