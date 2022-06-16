module.exports=(sequelize,DataTypes)=>{
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
    });
    /*User.associate=(models)=>{
        User.hasMany(models.Chat,{
            foreignKey:'user_id'
        });
    }*/
    return User;
};