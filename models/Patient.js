module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define("patient", {
        patient_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contact: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        blood_group: {
            type: DataTypes.STRING,
        },
        genotype: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
    })

    Patient.associate = (models) => {
        Patient.belongsTo(models.doctor, {
            foreignKey: 'doctor_id'
        })
        Patient.hasMany(models.payment, {
            foreignKey: 'patient_id',
        })
        Patient.hasMany(models.appointment, {
            foreignKey: 'patient_id'
        })
    }

    return Patient;
}
