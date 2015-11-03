var parser = require('../../lib/parser')
var helper = require('../helper.js')

var testData = require('../data')
var sampleOutput = testData.sampleOutput

describe('The parser', function () {
  var lineParser

  describe('when passing --keepLineOnly', function () {

    beforeEach(function (done) {
      lineParser = parser(sampleOutput, {keepLineOnly: true})
      done()
    })

    it('outputs the log line without adding container information', function (done) {
      var lineOnly = true;
      helper.expectData(lineParser, [testData.inputLine], done, lineOnly)
      helper.writeChunks(lineParser, [helper.buildBuffer(testData.inputLine + '\n')])
    })
  })
})