describe("BowlingCalculator", function() {

  describe("calculates", function() {
    describe("one frame", function(){
      it("if player knocks less the 10 pins", function() {
        var bowling = new BowlingCalculator
        expect(bowling.shots(1,2,3)).toBe(5)
      });

      it("if player knocks 10 pins in first roll", function() {
        var bowling = new BowlingCalculator
        expect(bowling.shots(1,10)).toBe(10)
      });

      it("and then knocks 5, 4 and in roll1 and roll2 of the next frame", function() {
        var bowling = new BowlingCalculator
        bowling.shots(1,10)
        bowling.shots(2,5,4)
        expect(frames[1]["result"]).toBe(19)
      });
    });

  });


});