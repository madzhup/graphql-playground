import * as React from 'react'

export interface Props {
  content: string
}

class HistoryHint extends React.Component<Props, {}> {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="history-hint">
        <style jsx={true}>{`
          .history-hint {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
          }

          .history-hint:hover {
            background-color: #f1f1f1;
          }
        `}</style>
        {this.props.content}
      </div>
    )
  }
}

export default HistoryHint
