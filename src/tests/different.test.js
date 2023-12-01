
import {screen} from '@testing-library/dom'
import { expect, test } from 'vitest'
// import '@testing-library/jest-dom';

test('uses jest-dom', () => {
  document.body.innerHTML = `
    <span data-testid="not-empty">some text<span data-testid="empty"></span></span>
    <div data-testid="visible">Visible Example</div>
  `

  // expect(screen.getByText('some text')).toMatchSnapshot()
  // expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement()
  expect(screen.getByText('Visible Example')).toBeVisible()
})