const express = require('express');
const app = express();
const Persona = require('../model/Persona');
const { Success, Error } = require('../helper/Respuesta');

app.get('/Persona/GetAll', async (req, res) => {
    try {
        const personas = await Persona.find();

        return Success(res, personas);
    } catch (error) {
        return Error(error);
    }
});

app.post('/Persona/Create', async (req, res) => {
    try {
        const person = new Persona({
            ...req.body
        });

        await person.save();

        return Success(res, person, 201);
    } catch (error) {
        return Error(error);
    }
})

app.get('/Persona/GetById/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const persona = await Persona.findById(id);

        if (persona) {
            Success(res, persona);
        } else {
            Error(res, { message: "La persona que buscaste no existe" }, 404);
        }
    } catch (error) {
        return Error(error);
    }
})

app.put('/Personas/Update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const cambios = req.body;

        const update = await Persona.findByIdAndUpdate(id, cambios);

        return Success(res, update, 201);
    } catch (error) {
        return Error(error);
    }
})

app.delete('/Persona/Delete/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const eliminar = await Persona.findByIdAndDelete(id);

        return Success(res, eliminar);
    } catch (error) {
        return Error(error);
    }
})

module.exports = app;