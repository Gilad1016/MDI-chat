module.exports=(sequelize,DataTypes)=>{
    const Message=sequelize.define('Message',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        message:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:{ msg:'Message is required'}
            }
        },
        user_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:{ msg:'User id is required'}
            }
        },
        target_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:{ msg:'Target id is required'}
            }
        },
        target_type:{ 
            type:DataTypes.BOOLEAN,
            allowNull:false,
            validate:{
                notEmpty:{ msg:'Target type is required'}
            }
        }
    });
    Message.associate=(models)=>{
        Message.belongsTo(models.User,{
            foreignKey:'user_id'
        });
        Message.hasOne(models.User || models.UserGroup,{
            foreignKey:'target_id'
        });
    }
    return Message;
}
