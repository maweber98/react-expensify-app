import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should add up multiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114195);
});

test('should add up 0 expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

test('should add up a single expense', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
});