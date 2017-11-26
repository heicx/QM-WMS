
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
    }else {
        state.errMsg = ret.errMsg || '请求异常，请稍后再试！';
    }
}

// 账户查询
export const searchUsers = (state, ret) => {
    state.userList = ret;
}