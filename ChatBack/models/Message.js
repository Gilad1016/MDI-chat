module.exports=(sequelize,DataTypes)=>{
    const message=sequelize.define('message',{
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
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
    });
    message.associate=(models)=>{
        message.belongsTo(models.direct_chat || group_chat,{
            foreignKey:'target_id'
        });
        message.belongsTo(models.User,{
            foreignKey:'user_id'
        });
    }
    return message;
}
