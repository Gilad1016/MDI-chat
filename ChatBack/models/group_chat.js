module.exports=(sequelize,DataTypes)=>{
    const group_chat=sequelize.define('group_chat',{
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
        group_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:{ msg:'Group id is required'}
            }
        },
    });
    group_chat.associate=(models)=>{
        group_chat.belongsTo(models.userGroup,{
            foreignKey:'target_id'
        });
        group_chat.hasMany(models.message,{
            foreignKey:'message_id'
        });
    }
    return group_chat;
}
