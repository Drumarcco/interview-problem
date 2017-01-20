var Stairs = require('../src/stairs'),
    expect = require('chai').expect;

describe('Stairs', function() {
  var stairs;

  describe('constructor', function() {
    it('should throw error on 0 or less rungs', function() {
      expect(function() {
        stairs = new Stairs(0);
      }).to.throw(Error);

      expect(function() {
        stairs = new Stairs(-5);
      }).to.throw(Error);
    });

    it('should initialize stairs rungs count on constructor', function() {
      stairs = new Stairs(4);
      expect(stairs.rungs).to.be.equal(4);
    });
  });

  describe('count all the different ways of escalating the stairs in one or two steps', function() {
    it('should return 1 when stairs have 1 rung', function() {
      stairs = new Stairs(1);
      var count = stairs.countDifferentWaysToReachTop();
      expect(count).to.be.equal(1);
    });

    it('should return 2 when stairs have 2 rungs', function() {
      stairs = new Stairs(2);
      var count = stairs.countDifferentWaysToReachTop();
      expect(count).to.be.equal(2);
    });

    it('should return 5 when stairs have 4 rungs', function() {
      stairs = new Stairs(4);
      var count = stairs.countDifferentWaysToReachTop();
      expect(count).to.be.equal(5);
    });
  });
});
