module.exports=(sequelize,DataTypes)=>{
    const bcrypt = require('bcrypt');
    const User=sequelize.define('User',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:{ msg:'Name is required'}
            }
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                isEmail:true
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[6,20]
            }
        }
    },
    {    
        hooks: {
            beforeCreate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            },
            beforeUpdate:async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            }
        },
        instanceMethods: {
            validPassword: (password) => {
                return bcrypt.compareSync(password, this.password);
            }
        }
    });
    User.prototype.validPassword = async (password, hash) => {
        return await bcrypt.compareSync(password, hash);
    }
    User.associate=(models)=>{
        User.hasMany(models.Message,{
            foreignKey:'user_id'
        });
        User.hasMany(models.Message,{
            foreignKey:'message_id'
        });
        User.hasMany(models.UserGroup,{
            foreignKey:'user'
        });
    }
    return User;
};


