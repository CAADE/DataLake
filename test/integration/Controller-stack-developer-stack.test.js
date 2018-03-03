// const request = require('supertest-as-promised');
// const taction = require('../../api/controllers/stack-developer/stack');

describe('Controller stack-developer  Test Cases', function () {
  describe('Primary Controller stack-developer stack Test Case', function () {
    // Requires an environment and stack be created first.
    it('Primary Controller stack-developer stack Good Path', function (done) {
      return done();
  /*    let url = '/stack-developer/stack?';
      let params = [];
      _.each(Object.keys(taction.inputs), function (key) {
        if (key !== 'mode') {
          params.push(key + '=' + taction.inputs[key].type);
        }
        else {
          params.push('mode=json');
        }
      });
      url += params.join('&');
      request(sails.hooks.http.app)
        .get(url)
        .expect('Content-Type', /json/)
        .end(function (err, res) {
          if (err) {
            return done(err);
          }
          else {
            console.log(res.body);
            return done();
          }
        });
        */
    });
  });
});
