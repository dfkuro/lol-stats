import { buildApi, get, post, patch, destroy } from "redux-bees";

const apiEndpoints = {
  getChampions: { method: get, path: "/champion.json" }
  // getPost: { method: get, path: "/posts/:id" },
  // createPost: { method: post, path: "/posts" },
  // updatePost: { method: patch, path: "/posts/:id" },
  // destroyPost: { method: destroy, path: "/posts/:id" },
  // getCategory: { method: get, path: "/categories/:id" },
  // getComments: { method: get, path: "/posts/:postId/relationships/comments" },
  // createComment: { method: post, path: "/posts/:postId/relationships/comments" }
};

const config = {
  baseUrl: "http://ddragon.leagueoflegends.com/cdn/9.17.1/data/en_MX/"
};

export default api = buildApi(apiEndpoints, config);
