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
    await db.Employee.destroy({
        where: {
            id: req.params.id
        }
    });

    return res.send('Successfully Deleted')
});

router.put("/update/:id", async (req, res) => {
    const updateEmployee = await db.Employee.update({
        name: req.body.name,
        department: req.body.department
    },
        {
            where: {
                id: req.params.id
            }
        })
    return res.send('Updated!');
});





module.exports = router;