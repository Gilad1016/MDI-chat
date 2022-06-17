module.exports=(sequelize,DataTypes)=>{
    const UserGroup=sequelize.define('Group',{
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
        }
    });
    UserGroup.associate=(models)=>{
        UserGroup.hasMany(models.User,{
            foreignKey:'group_id'
        });
    }
    return UserGroup;
}