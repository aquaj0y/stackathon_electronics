//We only need this once!
const { response } = require('express')
const { Computer } = require('../models')
//const { json } = require('body-parse')

const getAllComputer = async (req, res) => {
    try {
        const computers = await Computer.find()
        res.json(computers)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getComputersById = async (req, res) => {
    try {
        const { id } = req.params
        const computers = await Computer.findById(id)
        if (computers) {
            return res.json(computers)
        }
        return res.status(404).send('Computer with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getComputersByBrandName = async (req, res) => {
    try {
        const request_route = req.query
        console.log("============")
        console.log(request_route)
        // const { id } = req.params
        // const computers = await Computer.findById(id)
        // if (computers) {
        //     return res.json(computers)
        // }
        return res.status(404).send('Computer with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createComputer = async (req, res) => {
    try {
        const computers = await new Computer(req.body)
        await computers.save()
        return res.status(201).json({
            computers
        })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateComputer = async (req, res) => {
    try {
        let { id } = req.params;
        let update_computer = await Computer.findByIdAndUpdate(id, req.body, { new: true })
        if (update_computer) {
            return res.status(200).json(update_computer)
        }
        throw new Error("Computer not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteComputer = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Computer.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Computer item deleted")
        }
        throw new Error("Computer item not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
    getAllComputer,
    getComputersById,
    createComputer,
    updateComputer,
    deleteComputer,
    getComputersByBrandName
}