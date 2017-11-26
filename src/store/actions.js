import API from '../libs/request';

// 用户登录
export const login = ({commit}, params) => {
    return API.post('login', params).then(data => {
        commit('login', data);
        return data;
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
    return API.post('addUser', params).then(data => {
        return data;
    })
}

// 查询后台用户
export const userList = ({commit}) => {
    return API.post('userList').then(data => {
        commit('userList', data);
        return data;
    })
}


// 用户修改密码
export const modifyUser = ({commit}, params) => {
    return API.post('modifyUser', params).then(data => {
        return data;
    })
}