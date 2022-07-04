const db = require("./models");

module.exports = async () => {
  // Crear tablas:
  await db.sequelize.sync({ force: true });
  console.log("[Server] Inicializando archivos! NO NAVEGAR!!!");
  console.log("[Database] ¡Las tablas fueron creadas!");

  // Ejecutar seeders (datos de prueba):
  await require("./seeders/tagSeeder")();
  await require("./seeders/productSeeder")();
  await require("./seeders/imageSeeder")();
  await require("./seeders/userSeeder")();
  await require("./seeders/paymentSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
  console.log("[Server] Carga completada! Se puede navegar!");
};
