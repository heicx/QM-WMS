// 用户列表
export const userList = state => {
    return state.userSearchList.map(user => {
        if(user.roleId == 2) {
            user.roleName = '管理员';
        }

        if(user.status == 1) {
            user.status = '正常使用';
        }else {
            user.status = '已禁用';
        }

        return user;
    });
}

export const getUsers = state => (name) => {
    return state.userSearchList;
}  

// 查找用户
export const searchUsers = state => (name) => {
    return state.userList.filter(user => user.userName == name);
}

export const getAdminUser = state => {
    return state.adminUser;
}