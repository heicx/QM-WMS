import API from '../libs/request';

// 用户登录
export const login = ({commit}, params) => {
    return API.post('login', params).then(ret => {
        commit('login', ret);
        return ret;
    })
}

// 校验登录状态
export const isLogin = ({commit}) => {
    return API.get('isLogin', {
        params: {async: true}
    }).then(data => {
        commit('login', data);
        return data;
    })
}

// 添加后台用户
export const addUser = ({commit}, params) => {
    return API.post('addUser', params).then(ret => {
        return ret;
    })
}

// 查询后台用户
export const userList = ({commit}) => {
    return API.get('userList').then(ret => {
        commit('userList', ret);
    });
}


// 用户修改密码
export const modifyUser = ({commit}, params) => {
    return API.post('modifyUser', params).then(ret => {
        return ret;
    })
}