import IndexLists from '../../model/common/indexLists'

console.log(222222222222)
class IndexList {
    constructor() {
        this.indexMovieRender = this.indexMovieRender.bind(this)
        // console.log(this.indexMovieRender)
    }
    async indexMovieRender(req, res, next) {
        console.log(111111111111111);
        let index = IndexLists
        let results = await index.find({}, {})
        res.send(results)
    }
    async indexCarouselRender(req, res, next){
        let index = IndexLists
        let results = await index.find({}, {})
        res.send(results)
    }
}

console.log(333);
export default new IndexList();