var expect = require('chai').expect;

describe("#repeat-array", function () {

  var repeat

  it("should load module", function () {
    repeat = require('../');
    expect(repeat).to.exist;
  })

  it("should repeat array of 3 numbers 3 times", function () {
    expect(repeat([1,2,3],3))
    .to.deep.equal([1,2,3,1,2,3,1,2,3])
  })

  it("should repeat array of 6 strings 2 times", function () {
    expect(repeat(['ab','cd','ef','h','i','j'],2))
    .to.deep.equal(['ab','cd','ef','h','i','j','ab','cd','ef','h','i','j'])
  })

  it("should do 8 repeats of 1 item 2 times for total length of 256", function () {
    expect(repeat(repeat(repeat(repeat(repeat(repeat(repeat(repeat([0],2),2),2),2),2),2),2),2),2)
    .to.have.length(256)
  })

  it("should do 8 repeats of a function", function () {
    var i = 0
    expect(repeat(function () { return i++ },8))
    .to.deep.equal([0,1,2,3,4,5,6,7])
  })

})
