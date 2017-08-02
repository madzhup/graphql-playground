import { remote } from 'electron'
import * as dev from 'electron-is-dev'
import { join } from 'path'

export function createNewWindow() {
  const BrowserWindow = remote.BrowserWindow
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    titleBarStyle: 'hidden',
    icon: join(__dirname, 'assets/icons/png/64x64.png'),
    backgroundColor: '#273642',
  })
  win.loadURL(
    dev
      ? 'http://localhost:4040'
      : `file://${join(__dirname, '..', '/dist/index.html')}`,
  )
}
