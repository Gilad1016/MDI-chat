module.exports=(sequelize,DataTypes)=>{
    const UserGroup=sequelize.define('UserGroup',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        user:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:{ msg:'User id is required'}
            }
        },
        group:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:{ msg:'Group id is required'}
            }
        }
    });
    UserGroup.associate=(models)=>{
        UserGroup.belongsTo(models.User,{
            foreignKey:'user'
        });
        UserGroup.belongsTo(models.Group,{
            foreignKey:'group'
        });
    }
    return UserGroup;
}