'use strict';

import {DataTypes, Model} from 'sequelize';
import {sequelize} from '../../loaders/sequelize.js';
import SocialLogin from './socialLogin.js';
import Follow from './follow.js';
import FollowHistory from './followHistory.js';

class User extends Model {}

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      birthday: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gender: {
        type: DataTypes.ENUM('male', 'female', 'other'),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'user',
    },
);

User.hasMany(SocialLogin, {
  foreignKey: 'user_id',
  as: 'SocialLogin',
});
// // 사용자와 팔로우 기록간의 관계 설정
// User.hasMany(FollowHistory, {
//   foreignKey: 'user_id',
//   as: 'followHistory',
// });


export default User;
