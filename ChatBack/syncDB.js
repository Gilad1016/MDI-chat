const User = require('../models').User;
const direct_chat = require('../models').direct_chat;
const group_chat = require('../models').group_chat;
const models = require('../models').message;
const userGroup = require('../models').userGroup;

User.sync();
userGroup.sync();
direct_chat.sync();
group_chat.sync();
models.sync();