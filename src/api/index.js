import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true
});

const request = async (method, url, data) => {
    const config = {
        method,
        url,
        data
    };

    if(data){
        if(method === 'get'){
            config.params = data
        } else {
            config.data = data;
        }
    }

    try{
        const result = await axiosInstance(config);
        // console.log('@@ result', result);
        return result;
    }catch (e) {
        if(e.response){
            if(e.response.status === 401){
                console.log('@@ 로그인실패로 이동');
            }
        }
    }
};

const API = {
    fetchPost: () => request('get', '/post'),
    composePost : (data) => request('post', '/post/add', data),
}

export default API