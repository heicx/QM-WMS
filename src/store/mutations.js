
export const login = (state, ret) => {
    if(ret && ret.status) {
        state.isLogin = true;
        state.adminUser = ret.data;
    }else {
        state.isLogin = false;
        state.adminUser = {};
    }
}

export const userList = (state, ret) => {
    if(ret && ret.status) {
        state.userList = ret.data;
        state.userSearchList = ret.data;
    }else {
        state.errMsg = ret.errMsg || '请求异常，请稍后再试！';
    }
}

// 账户查询
export const searchUsers = (state, name) => {
    if(!name) {
        state.userSearchList = state.userList;
    }else {
        state.userSearchList = state.userList.filter(user => (user.userName.indexOf(name) > -1));
    }
}