module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("admin", {
        admin_id: {
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
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER,
        },
        address: {
            type: DataTypes.STRING,
        },
    })

    return Admin;
}
