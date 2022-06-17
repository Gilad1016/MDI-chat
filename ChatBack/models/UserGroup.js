module.exports=(sequelize,DataTypes)=>{
    const userGroup=sequelize.define('userGroup',{
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
        participants_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:{ msg:'Participants id is required'}
            }
        }
    });
    userGroup.associate=(models)=>{
        userGroup.hasMany(models.User,{
            foreignKey:'participants_id'
        });
    }
    return userGroup;
}