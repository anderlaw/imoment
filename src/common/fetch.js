import axios from 'axios'

let service = axios.create({
  //baseURL:'https://www.easy-mock.com/mock/5a38c603868e781a07345785/example',
  timeout:7000,
});
//添加请求拦截器
service.interceptors.request.use(function (config) {
  return config;
}, function (err) {
  return Promise.reject(err);
});

//添加相应拦截器
service.interceptors.response.use(function (res) {
  if(typeof res.data === 'object'){
    return res.data;
  }
}, function (error) {
  //let msg = error.response;
  //console.log(JSON.stringify(error));
  //全局处理异常
  return Promise.reject(error);
});
export default service;
