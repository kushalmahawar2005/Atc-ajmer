import assert from 'node:assert/strict';
import test from 'node:test';
import { grade, indiaDate, validDate, validateQuestions, type Question } from '../src/lib/quiz/validation';

function questions(): Question[] {
  return Array.from({ length: 5 }, (_, i) => ({
    text: `Practice question ${i + 1}`,
    options: ['Jaipur', 'Ajmer', 'Jodhpur', 'Udaipur'],
    correct: i % 4,
    explanation: 'An explanation of the correct answer.',
  }));
}

test('accepts a complete five-question quiz and rejects incomplete or malformed question sets', () => {
  assert.equal(validateQuestions(questions()), true);
  for (const value of [null, {}, 'quiz', [], questions().slice(0, 4), [...questions(), questions()[0]]]) {
    assert.equal(validateQuestions(value), false);
  }
  for (const question of [null, {}, { ...questions()[0], text: '  ' }, { ...questions()[0], text: 9 }, { ...questions()[0], text: 'x'.repeat(2001) }]) {
    assert.equal(validateQuestions([question, ...questions().slice(1)]), false);
  }
});

test('requires four distinct nonempty options, a valid answer, and a useful explanation', () => {
  const invalidFields: Record<string, unknown>[] = [
    { options: ['a', 'b', 'c'] }, { options: ['a', 'b', 'c', 'd', 'e'] },
    { options: ['a', ' a ', 'c', 'd'] }, { options: ['a', '', 'c', 'd'] },
    { options: ['a', null, 'c', 'd'] }, { options: ['a', 2, 'c', 'd'] },
    { options: ['a', 'b', 'c', 'x'.repeat(501)] },
    { correct: -1 }, { correct: 4 }, { correct: 1.5 }, { correct: '0' },
    { explanation: '' }, { explanation: '   ' }, { explanation: null },
    { explanation: 'x'.repeat(4001) },
  ];
  for (const fields of invalidFields) {
    assert.equal(validateQuestions([{ ...questions()[0], ...fields }, ...questions().slice(1)]), false, JSON.stringify(fields).slice(0, 100));
  }
});

test('validates actual calendar dates rather than rollover dates or loose date formats', () => {
  for (const value of ['2024-02-29', '2026-09-09', '2026-12-31']) assert.equal(validDate(value), true);
  for (const value of ['', '2026-02-29', '2026-02-30', '2026-04-31', '2026-13-01', '2026-00-10', '2026-09-00', '2026-9-9', '09/09/2026', '2026-09-09T00:00:00Z']) assert.equal(validDate(value), false, value);
});

test('daily publication switches at midnight in India, including year boundaries', () => {
  assert.equal(indiaDate(new Date('2026-09-09T18:29:59.999Z')), '2026-09-09');
  assert.equal(indiaDate(new Date('2026-09-09T18:30:00.000Z')), '2026-09-10');
  assert.equal(indiaDate(new Date('2026-12-31T18:30:00.000Z')), '2027-01-01');
});

test('grades a mixed attempt and preserves selected answers with answer explanations', () => {
  const result = grade(questions(), [0, 2, null, 3, null]);
  assert.deepEqual({ correct: result.correct, attempted: result.attempted, incorrect: result.incorrect, skipped: result.skipped, accuracy: result.accuracy }, { correct: 2, attempted: 3, incorrect: 1, skipped: 2, accuracy: 67 });
  assert.equal(result.questions[1].selected, 2);
  assert.equal(result.questions[1].correct, 1);
  assert.equal(result.questions[2].selected, null);
  assert.equal(result.questions[0].explanation, questions()[0].explanation);
});

test('handles fully correct, fully wrong, and fully skipped submissions', () => {
  const allCorrect = grade(questions(), [0, 1, 2, 3, 0]);
  assert.equal(allCorrect.correct, 5);
  assert.equal(allCorrect.accuracy, 100);
  const allWrong = grade(questions(), [1, 2, 3, 0, 1]);
  assert.equal(allWrong.incorrect, 5);
  assert.equal(allWrong.accuracy, 0);
  const skipped = grade(questions(), [null, null, null, null, null]);
  assert.equal(skipped.attempted, 0);
  assert.equal(skipped.skipped, 5);
  assert.equal(skipped.accuracy, 0);
});

test('rejects invalid submission shape and out-of-range or noninteger selections', () => {
  for (const answers of [null, {}, 'answers', [], [0, 1, 2, 3], [0, 1, 2, 3, 0, 1], [0, 1, 2, 3, -1], [0, 1, 2, 3, 4], [0, 1, 2, 3, 0.5], [0, 1, 2, 3, '0'], [0, 1, 2, 3, false], [0, 1, 2, 3, {}]]) {
    assert.throws(() => grade(questions(), answers), /valid answers/);
  }
});
