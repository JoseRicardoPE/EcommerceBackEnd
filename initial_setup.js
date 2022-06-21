const db = require("./models");

module.exports = async () => {
  // Crear tablas:
  await db.sequelize.sync({ force: true });
  console.log("[Server] Inicializando archivos! NO NAVEGAR!!!");
  console.log("[Database] ¡Las tablas fueron creadas!");

  // Ejecutar seeders (datos de prueba):
  await require("./seeders/tagSeeder")();
  await require("./seeders/productSeeder")();
  await require("./seeders/userSeeder")();
  console.log("[Database] ¡Los datos de prueba fueron insertados!");
  console.log("[Server] Carga completada! Se puede navegar!");
};