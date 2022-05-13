import  {BaseDatabase}  from "./src/data/BaseDatabase"

export class Migrations extends BaseDatabase {

    migrations = async (

    ) => {
        await  this.connection
    .raw(`
    CREATE TABLE IF NOT EXISTS Banda_Lama (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        music_genre VARCHAR(255) NOT NULL,
        responsible VARCHAR(255) UNIQUE NOT NULL 
      );
      CREATE TABLE IF NOT EXISTS Show_Lama (
        id VARCHAR(255) PRIMARY KEY,
        week_day VARCHAR(255) NOT NULL,
        start_time INT NOT NULL,
        end_time INT NOT NULL,
        band_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(band_id) REFERENCES NOME_TABELA_BANDAS(id)
      );
      CREATE TABLE IF NOT EXISTS User_Lama (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(255) NOT NULL DEFAULT "NORMAL"
      );
    `)
    .then(console.log)
    .catch(console.log)
}
    connection: any
}