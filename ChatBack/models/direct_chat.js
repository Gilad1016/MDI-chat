module.exports=(sequelize,DataTypes)=>{
    const direct_chat=sequelize.define('direct_chat',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        message_id:{
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
    });
    direct_chat.associate=(models)=>{
        direct_chat.hasOne(models.User,{
            foreignKey:'user_id'
        });
        direct_chat.hasOne(models.User,{
            foreignKey:'target_id'
        });
        direct_chat.hasMany(models.message,{
            foreignKey:'message_id'
        });
    }
    return direct_chat;
}
