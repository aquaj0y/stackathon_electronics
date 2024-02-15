const { SmartHome } = require('../models')

const getAllSmartHomes = async (req, res) => {
    try {
      const smartHomes = await SmartHome.find({})
        res.json(smartHomes)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getAllSmartHomesById = async (req, res) => {
    try {
        const { id } = req.params
        const smartHomes = await SmartHome.findById(id)
        if (smartHomes) {
            return res.json(smartHomes)
        }
        return res.status(404).send('SmartHome item with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createSmartHome = async (req, res) => {
    try {
        const smartHomes = await new SmartHome(req.body)
        await smartHomes.save()
        return res.status(201).json({
          smartHomes
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateSmartHome = async (req, res) => {
    try {
        let { id } = req.params;
        let smartHomes = await SmartHome.findByIdAndUpdate(id, req.body, { new: true })
        if (smartHomes) {
            return res.status(200).json(smartHomes)
        }
        throw new Error("SmartHome item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteSmartHome = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await SmartHome.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("SmartHome item deleted")
        }
        throw new Error("SmartHome item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
  getAllSmartHomes,
  getAllSmartHomesById,
  createSmartHome,
  updateSmartHome,
  deleteSmartHome
}