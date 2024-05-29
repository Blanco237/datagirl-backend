module.exports = (sequelize, DataTypes) => {
    const Case = sequelize.define("case", {
        case_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        patient_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATE,
        },
        end_date: {
            type: DataTypes.DATE,
        },
        class: {
            type: DataTypes.STRING,
        }
    }, {
        underscored: true,
    })

    return Case;
}