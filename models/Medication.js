module.exports = (sequelize, DataTypes) => {
    const Medication = sequelize.define("Medication", {
        medication_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        manufacturer: {
            type: DataTypes.STRING,
        },
        exp_date: {
            type: DataTypes.DATE,
        },
        route: {
            type: DataTypes.STRING,
        }
    }, {
        underscored: true,
    })

    return Medication;
}