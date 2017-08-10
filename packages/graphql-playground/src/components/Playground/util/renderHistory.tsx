import * as React from 'react'
import * as ReactDOM from 'react-dom'
import HistoryHint from '../HistoryOption'

/**
 * Render an additional UI component for CodeMirror hint
 * that allows access to history submenu
 */
export default function appendHistory(cm, data) {
  const CodeMirror = require('codemirror')

  let hintsUl

  // When a hint result is selected, we augment the UI with history.
  CodeMirror.on(data, 'select', (ctx, el) => {
    // Only render the HistoryMenu once
    if (!hintsUl) {
      hintsUl = el.parentNode

      const reactHistory = hintsUl.firstChild
      const hintLeftOffset = reactHistory.offsetWidth

      ReactDOM.render(
        <HistoryHint hintLeftOffset={hintLeftOffset} />,
        reactHistory,
      )
    }
  })
}
