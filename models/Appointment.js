module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define("appointment", {
        appointment_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        start_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
        },
        complaint: {
            type: DataTypes.STRING,
        },
        prescription: {
            type: DataTypes.STRING,
        },
    })

    Appointment.associate = (models) => {
        Appointment.hasOne(models.payment, {
            foreignKey: 'appointment_id',
        })
        Appointment.hasOne(models.surgery, {
            foreignKey: 'appointment_id'
        })
    }

    return Appointment;
}
