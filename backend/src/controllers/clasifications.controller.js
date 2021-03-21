const clasifCtrl = {}

const Clasif = require('../models/clasifications')

clasifCtrl.getClasif = async (req, res) => {
    const clasif = await Clasif.find()
    res.json(clasif)
}

clasifCtrl.createClasif = async (req, res) => {
    const { id, name } = req.body
    const newClasif = new Clasif ({
        id: id,
        name: name,
    })
    await newClasif.save()
    res.json({message: 'Clasificación Agregada'})
}

clasifCtrl.getClasif1 = async (req, res) => {
    const clasif = await Clasif.findById(req.params.id)
    res.json(clasif)
}

clasifCtrl.updateClasif = async (req, res) => {
    const { id, name } = req.body
    await Clasif.findByIdAndUpdate(req.params.id, {
        id: id,
        name: name,
    })
    res.json({message: 'Clasificación Modificada'})
}

clasifCtrl.deleteClasif = async (req, res) => {
    const clasif = await Clasif.findByIdAndDelete(req.params.id)
    res.json({message: 'Clasificación Eliminada'})
}


module.exports = clasifCtrl