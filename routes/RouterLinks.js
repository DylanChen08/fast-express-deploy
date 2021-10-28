import Index from "../controller/common/indexList";
import Release from "../controller/common/releaseList";
import Preview from "../controller/common/previewList";
import Comments from "../controller/common/comments";
import TV from "../controller/common/tvSeries";
import Books from "../controller/common/books";
import varietyShows from "../controller/common/varietyShows";
let RouterLinks = [
    {path: '/index', controller: Index.indexMovieRender},
    {path: '/carousel', controller: Index.indexCarouselRender},
    {path: '/released', controller: Release.getALLReleased},
    {path: '/released/:page', controller: Release.releasedMovieRender},
    {path: '/preview', controller: Preview.getALLPreview},
    {path: '/preview/:page', controller: Preview.previewMovieRender},
    {path: '/movies/:movieId', controller: Release.getSpecificMovie},
    {path: '/movies/:movieId', controller: Preview.getSpecificMovie},
    {path: '/comments/:movieId', controller: Comments.getComments},
    {path: '/tv', controller: TV.getALLTvSeries},
    {path: '/tv/:tvId', controller: TV.getSpecificTvSeries},
    {path: '/books', controller: Books.getAllBooks},
    {path: '/books/:bookId', controller: Books.getSpecificBook},
    {path: '/shows', controller: varietyShows.getAllVarietyShows},
    {path: '/show/:showId', controller: varietyShows.getSpecificShow}
]


export default RouterLinks