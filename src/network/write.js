import { request } from "./request";

export function PostBlog() {
    return request({
        url: "/articleget",
        method: "GET",
    });
}
