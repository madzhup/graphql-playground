import * as React from 'react'
import HistoryHint from './HistoryHint'

export interface Props {
  hintLeftOffset: number
}

class HistoryOption extends React.Component<Props, {}> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <style jsx={true}>{`
          .history-options {
            display: none;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            position: absolute;
            z-index: 1;
            top: 0;
          }

          /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
          .show {
            display: block;
          }
        `}</style>
        <div>
          History
          <div
            id="history-menu"
            className="history-options"
            style={{ left: `${this.props.hintLeftOffset}px` }}
          >
            <HistoryHint content="Test" />
          </div>
        </div>
      </div>
    )
  }
}

export default HistoryOption
