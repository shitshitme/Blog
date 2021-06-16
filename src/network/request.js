import Axios from "axios";

async function request(config) {
    // 1.创建实例
    const instance = await Axios.create({
        baseURL: "https://localhot:8888",
        timeout: 5000,
    });

    // 创建拦截器
    await instance.interceptors.request.use(
        (config) => {
            console.log(config);
            return config;
        },
        (err) => {
            console.log(err);
        }
    );

    await instance.interceptors.response.use(
        (res) => {
            console.log(res);
            return res;
        },
        (err) => {
            console.log(err);
        }
    );
    // 发送真正的网络请求
    return instance(config);
}

export { request };
