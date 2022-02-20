import Delete from "./Delete";
import Get from "./Get";
import Put from "./Put";
import Post from "./Post";

const updateUser = (data,id) => Put ('users/${id}',data);
const getUser = () => Get ('users');
const deleteUser = (id) => Delete ('users/${id}');
const postUser = (data) => Post ('users',data);

const updateMenu = (data,id) => Put ('menus/${id}',data);
const getMenu = () => Get ('menus');
const deleteMenu = (id) => Delete ('menus/${id}');
const postMenu = (data) => Post ('menus',data);

const API={
    getUser,
    deleteUser,
    postUser,
    updateUser,

    updateMenu,
    getMenu,
    deleteMenu,
    postMenu,

}

export default API;