import Scrabble from 'scrabble';

describe("Scrabble", function() {

  describe('score', function() {
    it('should score a given word', function() {
      var testScrabble = new Scrabble();
      expect(testScrabble.score('word')).toEqual(8);
    });

    it('should throw an error when given an integer', function() {
      var testScrabble = new Scrabble();
      expect(function() {testScrabble.score(9)} ).toThrow(new Error("Can Only Score Words"));
    });

    it('should throw an error when not passed null', function() {
      var testScrabble = new Scrabble();
      expect(function() {testScrabble.score()} ).toThrow(new Error("Can Only Score Words"));
    });
  });

  describe('highestScoreFrom', function() {
    it('should give the highest score in array', function() {
      var testScrabble = new Scrabble();
      expect(testScrabble.highestScoreFrom(["cat", "aaaaa"])).toEqual('cat');
    });

    it('should return a seven letter word if there is a tie', function() {
      var testScrabble = new Scrabble();
      expect(testScrabble.highestScoreFrom(["aaaaad", "aaaaaaa"])).toEqual('aaaaaaa');
    });

    it('should return the smaller word if there is a tie and neither is seven letters', function() {
      var testScrabble = new Scrabble();
      expect(testScrabble.highestScoreFrom(["cat", "aaaaa"])).toEqual('cat');
    });

    it('should return No High Score if string is empty', function() {
      var testScrabble = new Scrabble();
      expect(testScrabble.highestScoreFrom(["", ""])).toEqual('No High Score');
    });

    it('should throw an error when passed array of integers', function() {
      var testScrabble = new Scrabble();
      expect(function() {testScrabble.highestScoreFrom([1, 2, 3])} ).toThrow(new Error("Can Only Score Words"));
    });
  });

});
