module.exports = {
    mode: "生产模式",
    serve: 'http://127.0.0.1:5000',
    keys: ['some secret hurr'],
    session: {
        key: 'koa:sess'
    }
}