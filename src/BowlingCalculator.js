function BowlingCalculator() {

};

var frames = {
              1: {roll1: null, roll2: null, result: null},
              2: {roll1: null, roll2: null, result: null},
              3: {roll1: null, roll2: null, result: null},
              4: {roll1: null, roll2: null, result: null},
              5: {roll1: null, roll2: null, result: null},
              6: {roll1: null, roll2: null, result: null},
              7: {roll1: null, roll2: null, result: null},
              8: {roll1: null, roll2: null, result: null},
              9: {roll1: null, roll2: null, result: null},
             10: {roll1: null, roll2: null, roll3: null, result: null}
            };

var shot1
var shot2

// BowlingCalculator.prototype.setFrames = function(frame, shot1, shot2) {
//   shot1 = typeof shot1 !== 'undefined' ? shot1 : 0;
//   shot2 = typeof shot2 !== 'undefined' ? shot2 : 0;
//   frames[frame]["roll1"] = shot1
//   frames[frame]["roll2"] = shot2
  // frames[frame]["result"] = shot1+shot2

// BowlingCalculator.prototype.Strike = function(frame) {
//   frames[frame-1]["roll1"] === 10
// };

// BowlingCalculator.prototype.Spare = function(frame) {
//   frames[frame-1]["result"] === 10 && frames[frame-1]["roll2"] !== 0
// };

// BowlingCalculator.prototype.Calculation = function(frame) {
//   if(frame-1>0) {
//     frames[frame]["result"] += frames[frame-1]["result"]
//   };
// };

BowlingCalculator.prototype.shots = function(frame, shot1, shot2, shot3) {
  shot1 = typeof shot1 !== 'undefined' ? shot1 : 0;
  shot2 = typeof shot2 !== 'undefined' ? shot2 : 0;
  shot3 = typeof shot3 !== 'undefined' ? shot3 : 0;
  frames[frame]["roll1"] = shot1
  frames[frame]["roll2"] = shot2
  frames[frame]["result"] = shot1+shot2+shot3

  // if(frame===10 && frames[frame]["result"] === 10){
  //   if shot1 === 10
  // }

  if(frame>=3) {
    if(frames[frame-2]["roll1"] === 10 && frames[frame-1]["roll1"] === 10) {
      frames[frame-2]["result"] += shot1
      frames[frame-1]["result"] += shot1
    };
  };

  if(frame-1>0) {

    if(frames[frame-1]["roll1"] === 10) {
      frames[frame-1]["result"] += shot1+shot2
    };

    if(frames[frame-1]["roll1"] + frames[frame-1]["roll2"] === 10 && frames[frame-1]["roll2"] !== 0) {
      frames[frame-1]["result"] += shot1
    };

    frames[frame]["result"] += frames[frame-1]["result"]

  };

  return frames[frame]["result"]
};


