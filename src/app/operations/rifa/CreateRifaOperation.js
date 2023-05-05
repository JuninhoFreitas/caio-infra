module.exports = async ( sorteio_id, id_user, valor_rifa ) => {
    const user = getUserByIdService.execute(id_user);
    const sorteio = getSorteioByIdService.execute(sorteio_id);

    return createRifaService.execute(user, sorteio, valor_rifa)   
}