const chai = require('chai')
const chaiHttp = require('chai-http')
const router = require('../routes/UserDetail')

chai.use(chaiHttp)
chai.should()
describe('testing', () => {
    describe('test api twitter', () => {
        it('success to hit api twitter', async (done) => {
            this.timeout(1000)
            chai.request(router)
                .get('/twitter')
                .end((err, res) => {
                    console.log(res);
                    res.should.have.status(200)
                    done();
            })
        })
    })
})

