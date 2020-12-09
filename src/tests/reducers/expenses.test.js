import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';

test('should set up default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should add expense object', () => {
    const testExpense = {
        id: 1,
        description: 'test expense',
        note: '',
        amount: 1200,
        createdAt: 1000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: testExpense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, testExpense]);
});

test('should edit expense by id', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should  not edit expense if id is not found', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: -5,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 4
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});