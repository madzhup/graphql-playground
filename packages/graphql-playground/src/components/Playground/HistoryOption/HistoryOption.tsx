import * as React from 'react'
import HistoryHint from './HistoryHint'
import { $v, Icon } from 'graphcool-styles'

export interface Props {
  hintLeftOffset: number
}

/**
 * historyItems would be of type Session[]
 * I used any to mock up some additional functionality
 */
export interface State {
  historyItems: any
  selectedItem?: any
}

/**
 * Including dummy history items until fetching is in place
 */
const historyItemsArr = [
  {
    id: 1,
    query: '{\n' + '  allPosts{\n' + '    id\n' + '  }\n' + '}',
  },
  {
    id: 2,
    query: 'mutation{\n' + '  createFile{\n' + '    \n' + '  }\n' + '}',
  },
]

class HistoryOption extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      historyItems: [],
      selectedItem: {},
    }
  }

  /**
   * Mock data fetching would be replaced
   * with async fetch of history items
   */
  componentDidMount() {
    Promise.resolve().then(() => {
      this.setState({
        historyItems: historyItemsArr,
      })
    })
  }

  render() {
    const { historyItems } = this.state
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

          .show {
            display: block;
          }

          .history {
            @inherit: .f14, .fw6, .pv10, .ph16, .bgBlue, .flex, .br2,
              .itemsCenter, .pointer;
          }
          .history-text {
            @inherit: .mr6, .white;
          }
        `}</style>
        <div>
          <div className="history">
            <div className="history-text">History</div>
            <Icon
              src={require('../../../assets/icons/arrowRight.svg')}
              color={$v.white}
              stroke={true}
              width={13}
              height={13}
            />
          </div>
          <div
            id="history-menu"
            className="history-options"
            style={{ left: `${this.props.hintLeftOffset}px` }}
          >
            {historyItems.map(item =>
              <HistoryHint key={item.id} content={item.query} />,
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default HistoryOption
