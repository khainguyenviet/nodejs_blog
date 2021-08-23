
class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }
    show(req, res) {
        res.send('NEW DETAIL!!!');
    }
    // [GET] /news/:slug
}

module.exports = new NewsController;