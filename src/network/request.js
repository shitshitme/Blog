import axios from 'axios'

// export function request(config, success, failure) {
// 	// 1.创建实例
// 	const instance = axios.create({
// 		baseURL: 'https://jsonplaceholder.typicode.com',
// 		timeout: 5000
// 	})

// 	// 发送真正的网络请求
// 	instance(config)
// 		.then(res => {
// 			// console.log(res);
// 			success(res);
// 		})
// 		.catch(err => {
// 			// console.log(err);
// 			failure(err);
// 		})
// }

// export function request(config) {
// 	// 1.创建实例
// 	const instance = axios.create({
// 		baseURL: 'https://jsonplaceholder.typicode.com',
// 		timeout: 5000
// 	})

// 	// 发送真正的网络请求
// 	instance(config.baseConfig)
// 		.then(res => {
// 			// console.log(res);
// 			config.success(res);
// 		})
// 		.catch(err => {
// 			// console.log(err);
// 			config.failure(err);
// 		})
// }

// export function request(config) {
// 	return new Promise((resolve, reject) => {
// 		// 1.创建实例
// 		const instance = axios.create({
// 			baseURL: 'https://jsonplaceholder.typicode.com',
// 			timeout: 5000
// 		})

// 		// 发送真正的网络请求
// 		instance(config)
// 			.then(res => {
// 				// console.log(res);
// 				resolve(res);
// 			})
// 			.catch(err => {
// 				// console.log(err);
// 				reject(err);
// 			})
// 	})

// }


export function request(config) {
	// 1.创建实例
	const instance = axios.create({
		baseURL: 'https://jsonplaceholder.typicode.com',
		timeout: 6000,
	})

	// 创建拦截器
	instance.interceptors.request.use(config => {
		// console.log(config);
		// config.headers.token = localStorage.getItem("token");
		return config;
	}, err => {
		console.log(err);
	})

	instance.interceptors.response.use(res => {
		// console.log(res);
		return res;
	},
		err => {
			console.log(err);
		}
	);


	// 发送真正的网络请求
	return instance(config)

}