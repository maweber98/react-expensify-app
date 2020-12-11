import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should correctly render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={0.99}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with 2 expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={2} expenseTotal={1.98}/>);
    expect(wrapper).toMatchSnapshot();
});