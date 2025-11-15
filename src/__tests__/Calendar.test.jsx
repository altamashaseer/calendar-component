import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // We import this to get access to helpful matchers like `.toBeInTheDocument()`

// Make sure our test file can find the component.
// The '../' path goes up from the '__tests__' directory into 'src', then into 'components'.
import Calendar from '../components/Calendar';

/**
 * This is our main test suite for the Calendar component.
 * A 'describe' block helps group related tests together, which is great for organization.
 */
describe('Calendar Component', () => {

  // Test Case 1: Checking against the first example given in the requirements (03/10/2022).
  // It's always a good idea to test the specific examples provided in the project brief.
  test('should render the calendar for October 3, 2022 correctly', () => {
    // First, we set up the data needed for this specific test.
    const testDate = new Date('2022-10-03');
    // Now, we render the component into a virtual DOM for testing.
    render(<Calendar date={testDate} />);

    // Assertion 1: Let's make sure the header is showing the right month and year.
    // `screen.getByText` is a query that finds an element by its visible text content.
    expect(screen.getByText('October 2022')).toBeInTheDocument();

    // Assertion 2: A quick sanity check to ensure the day headers are actually rendering.
    expect(screen.getByText('Su')).toBeInTheDocument();
    expect(screen.getByText('Mo')).toBeInTheDocument();
    expect(screen.getByText('Sa')).toBeInTheDocument();

    // Assertion 3: This is the core requirement – checking if the correct date is highlighted.
    // We find the element with the text '3' and then check if it has the 'highlighted' CSS class.
    const highlightedDay = screen.getByText('3');
    expect(highlightedDay).toBeInTheDocument(); // First, confirm it's on the screen...
    expect(highlightedDay).toHaveClass('highlighted'); // ...then check its class.

    // Assertion 4: A useful "negative" test. We want to ensure that *only* the target date is highlighted.
    // Let's grab another date on the calendar and confirm it does *not* have the highlight class.
    const anotherDay = screen.getByText('10');
    expect(anotherDay).not.toHaveClass('highlighted');
  });

  // Test Case 2: Checking against the second example from the requirements (23/03/2020).
  test('should render the calendar for March 23, 2020 correctly', () => {
    // Setting up the specific date for this scenario.
    const testDate = new Date('2020-03-23');
    render(<Calendar date={testDate} />);

    // Assertion 1: Verify the header is correct for this different date.
    expect(screen.getByText('March 2020')).toBeInTheDocument();

    // Assertion 2: Verify the date '23' is correctly highlighted.
    const highlightedDay = screen.getByText('23');
    expect(highlightedDay).toBeInTheDocument();
    expect(highlightedDay).toHaveClass('highlighted');
  });

  // Test Case 3: Good tests always check for edge cases or invalid input.
  // What happens if someone passes `null` instead of a valid Date object?
  test('should display an error message if the date prop is invalid or null', () => {
    // Here, we intentionally pass a bad value to the component.
    render(<Calendar date={null} />);

    // We expect the component to handle this gracefully instead of crashing.
    // We'll look for the specific error message we coded into the component's logic.
    expect(screen.getByText('Invalid date provided.')).toBeInTheDocument();
  });

});