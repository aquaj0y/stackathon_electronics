//We only need this once!
// const Model1 = require('../models/model1')

const getAllModel1 = async (req, res) => {
    try {
        const model1 = await Model1.find()
        res.json(model1)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getModel1ById = async (req, res) => {
    try {
        const { id } = req.params
        const model1 = await Model1.findById(id)
        if (model1) {
            return res.json(model1)
        }
        return res.status(404).send('Model1 item with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createModel1 = async (req, res) => {
    try {
        const model1 = await new Model1(req.body)
        await model1.save()
        return res.status(201).json({
            model1
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateModel1 = async (req, res) => {
    try {
        let { id } = req.params;
        let model1 = await Model1.findByIdAndUpdate(id, req.body, { new: true })
        if (model1) {
            return res.status(200).json(model1)
        }
        throw new Error("Model1 item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteModel1 = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Model1.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Model1 item deleted")
        }
        throw new Error("Model1 item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
    getAllModel1,
    getModel1ById,
    createModel1,
    updateModel1,
    deleteModel1
}