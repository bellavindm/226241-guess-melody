import {assert} from 'chai';
import {countScore} from './count-score';

describe(`Count score`, () => {
  describe(`Correct answers`, () => {
    it(`should return right score`, () => {
      assert.strictEqual(countScore(
          [
            {correct: true, time: 29},
            {correct: false, time: 30},
            {correct: false, time: 30},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: true, time: 30},
            {correct: true, time: 30}
          ], 3
      ), 10);
      assert.strictEqual(countScore(
          [
            {correct: true, time: 29},
            {correct: false, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: true, time: 29}
          ], 3
      ), 14);
      assert.strictEqual(countScore(
          [
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 29},
            {correct: true, time: 29},
            {correct: false, time: 31},
            {correct: false, time: 31}
          ], 3
      ), 6);
    });
  });

  describe(`Too mach incorrect answers`, () => {
    it(`should return -1`, () => {
      assert.strictEqual(countScore(
          [
            {correct: true, time: 31},
            {correct: true, time: 31},
            {correct: true, time: 31},
            {correct: true, time: 31},
            {correct: true, time: 31},
            {correct: false, time: 31},
            {correct: false, time: 31},
            {correct: false, time: 31},
            {correct: false, time: 31},
            {correct: false, time: 31}
          ], 3
      ), -1);
      assert.strictEqual(countScore(
          [
            {correct: false, time: 31},
            {correct: true, time: 30},
            {correct: false, time: 31},
            {correct: true, time: 30},
            {correct: false, time: 31},
            {correct: false, time: 31},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: false, time: 31},
            {correct: false, time: 31}
          ], 3
      ), -1);
    });
  });

  describe(`Input errors`, () => {
    it(`too few lives, should return -1`, () => {
      assert.strictEqual(countScore(
          [
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30}
          ], 0
      ), -1);
    });
    it(`too mach lives, should return -1`, () => {
      assert.strictEqual(countScore(
          [
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30}
          ], 4
      ), -1);
    });
    it(`too few player answers, should return -1`, () => {
      assert.strictEqual(countScore(
          [
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30},
            {correct: true, time: 30}
          ], 1
      ), -1);
    });
  });
});
