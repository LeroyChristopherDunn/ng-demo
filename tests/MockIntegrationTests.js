var async = require('async')
var assert = require('chai').assert;

// begin a test suite of one or more tests
describe('Mock Integration Test Suite 1', function() {

    // test a functionality
    it('should do something 1', function() {
      // add an assertion
      assert.equal(5, 5);
    })

    it('should do something 2', function() {
      assert.equal(5, 5);
    })

    it('should do something 3', function() {
      assert.equal(5, 5);
    })

    it('should do something 4', function() {
      assert.equal(5, 5);
    })
    
  })

  var N = 5000; 
  const range = Array.apply(null, {length: N}).map(Number.call, Number)
  var M = 10; 
  const range2 = Array.apply(null, {length: M}).map(Number.call, Number)

  async.each(range, function(itemNumber, callback) {
    describe('Generated Mock Integration Test Suite # ' + itemNumber, function () {

      for (var x in range2)
      it('Generated Mock Integration Test # ' + x, function() {
        assert.equal(5, 5);
      })

    });
  callback()
  });

  