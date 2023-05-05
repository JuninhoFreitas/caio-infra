module.exports = {
  execute: async (user, sorteio, valor_rifa) => {
    const cotas = valor_rifa / sorteio.valor_cota;
    const isAmountOfQuotesValid = cotas < sorteio.cotas_disponiveis;
    if (!isAmountOfQuotesValid) {
        throw ErrorBusiness('Quotes Exceeded');
    }
    const rifa = await storeRifaService.execute(user, sorteio, cotas);
    return {
      ...rifa,
      status: "APPROVED",
    };
  },
};