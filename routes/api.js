const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();
const db = require("../models");
const employee = require("../models/employee");

router.get("/all", async (req, res) => {
    const allEmployees = await db.Employee.findAll();
    return res.send(allEmployees);
});
router.get("/find/:id", async (req, res) => {
    const idEmployee = await db.Employee.findAll({
        where: {
            id: req.params.id
        }
    });
    if (idEmployee == 0)
        return res.send('ID not found')

    return res.send(idEmployee);
});
router.post("/addEmployee", async (req, res) => {
    const newData = await db.Employee.create({
        name: req.body.name,
        department: req.body.department
    });
    return res.send(newData);
})

router.delete("/delete/:id", async (req, res) => {
    const deleteID = await db.Employee.destroy({
        where: {
            id: req.params.id
        }
    });
    if (deleteID == 0)
        return res.send('ID not found')
    return res.send('Successfully Deleted')
});

router.put("/update/:id", async (req, res) => {
    const updateID = await db.Employee.update({
        name: req.body.name,
        department: req.body.department
    },
        {
            where: {
                id: req.params.id
            }
        })
    if (updateID == 0)
        return res.send('ID not found')

    return res.send('Updated!');
});





module.exports = router;