const CreateRifaOperation = require("../../../app/operations/rifa/CreateRifaOperation");
const RifaSerializer = require("./RifaSerializer");

module.exports = {
  createPost: async (req, res) => {
    const { sorteio_id, id_user, valor_rifa } = req.body;
    
    const rifa = await CreateRifaOperation(sorteio_id, id_user, valor_rifa);
    const serializedRifa = RifaSerializer.serialize(rifa);

    return res.json(serializedRifa);
  },
};
