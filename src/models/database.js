import { Sequelize } from "sequelize";
import ProcesadorModel from "./procesadores.js";
import NotebookModel from "./notebook.js";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './notebooks.db'
}) 

sequelize.define(
    'Procesador',
    ProcesadorModel.ProcesadoresAttributes,
    ProcesadorModel.ProcesadoresOptions
)

sequelize.define(
    'Notebook',
    NotebookModel.NotebooksAttributes,
    NotebookModel.NotebooksOptions
)


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