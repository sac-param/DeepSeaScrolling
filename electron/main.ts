import { app, BrowserWindow } from 'electron'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,          // 👈 removes title bar & borders
    fullscreen: true,      // 👈 opens in true fullscreen
    autoHideMenuBar: true, // 👈 hides the menu bar (File, Edit, View...)
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
    },
  })
  // 👇 Add this - injects CSS to hide scrollbar in Electron
  win.webContents.on('did-finish-load', () => {
    win.webContents.insertCSS(`
      ::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
      }
      body {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }
    `)
  })

  // In dev, load Vite dev server. In prod, load built files.
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})