import { request } from './request'

export function PostBlog() {
	return request({
		url: "/posts",
		method: "POST"
	})
}