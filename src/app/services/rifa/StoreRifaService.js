module.exports = {
  execute: async (user, sorteio, cotas) => {
    logger("Step: Storing Rifas StoreRifaService#execute");
    await SorteioRepository.bookQuotes(cotas);
    return await RifaRepository.create(user, sorteio, cotas);
  },
};
