// comboService.js
const comboModel = require('./comboModel');

const getAllcombos = () => {
    return comboModel.findAll();
};

const getcombo = (id) => {
    return comboModel.findById(id);
};

const addcombo = (combo) => {
    return comboModel.create(combo);
};

const updatecombo = (id, combo) => {
    return comboModel.update(id, combo);
};

// Delete combo
const deletecombo = (id) => {
    return comboModel.remove(id);
};
module.exports = { getAllcombos, getcombo, addcombo, updatecombo, deletecombo };