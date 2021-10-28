import express from "express";
import RouterDistribution from "./RouterDistribution";
import RouterLinks from "./RouterLinks";

/*
* 数据渲染的主要路由
* 功能：1.渲染各个页面的数据
*      2.处理请求
* */

const router = express.Router();

//路由分发,链接数据集在 RouterLinks
RouterDistribution('get',RouterLinks)

export default router;
