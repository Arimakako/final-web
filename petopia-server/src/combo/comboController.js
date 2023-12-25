const comboService = require('./comboService');

const getcombos = async (req, res) => {
    try {
        const combos = await comboService.getAllcombos();
        res.json(combos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getcombo = async (req, res) => {
    try {
        const combo = await comboService.getcombo(req.params.id);
        res.json(combo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createcombo = async (req, res) => {
    try {
        const combo = await comboService.addcombo(req.body);
        res.json(combo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update combo
const updatecombo = async (req, res) => {
    const comboId = req.params.id;  // Use the ID from the route
    const updateData = req.body;

    try {
        const updateResult = await comboService.updatecombo(comboId, updateData);
        if (!updateResult.modifiedCount) {
            return res.status(404).json({ message: "No combo found or no change made with the given ID" });
        }

        const updatedcombo = await comboService.getcombo(comboId);
        res.json(updatedcombo);
    } catch (error) {
        res.status(500).json({ message: "Error updating combo", error: error.message });
    }
};

// Delete combo
const deletecombo = async (req, res) => {
    const comboId = req.params.id;  // Use the ID from the route

    try {
        const comboToDelete = await comboService.getcombo(comboId);
        if (!comboToDelete) {
            return res.status(404).json({ message: "No combo found with the given ID" });
        }

        await comboService.deletecombo(comboId);
        res.json({ message: "combo successfully deleted", combo: comboToDelete });
    } catch (error) {
        res.status(500).json({ message: "Error deleting combo", error: error.message });
    }
};
module.exports = { getcombos, getcombo, createcombo, updatecombo, deletecombo };