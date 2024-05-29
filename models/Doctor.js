module.exports = (sequelize, DataTypes) => {
    const Doctor = sequelize.define("doctor", {
        doctor_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
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
        specialty: {
            type: DataTypes.STRING,
        },
    })

    Doctor.associate = (models) => {
        Doctor.hasMany(models.patient, {
            foreignKey: 'doctor_id',
        })
        Doctor.hasMany(models.appointment, {
            foreignKey: 'doctor_id'
        })
        Doctor.hasMany(models.surgery, {
            foreignKey: 'doctor_id'
        })
    }

    return Doctor;
}
