const { Payment } = require("../models");

module.exports = async () => {
  const payments = [
    {
      name: "MercadoPago",
    },
    {
      name: "Tarjeta de Crédito",
    },
    {
      name: "Transferencia Bancaria",
    },
  ];
  await Payment.bulkCreate(payments);
};
