
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("Employee", {

     
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Employee;
}