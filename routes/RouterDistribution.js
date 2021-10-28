import express from "express";

const router = express.Router();
function RouterDistribution(method, data) {
    function r_d_() {
        if (method === 'get' && typeof data === 'object') {
            data.map((current, index, array) => {
                router.get(current.path, current.controller);
            })
        }
    }

    return r_d_()

}

export default RouterDistribution

