import { app, BrowserWindow, globalShortcut } from 'electron'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    fullscreen: true,
    autoHideMenuBar: true,
    kiosk: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      devTools: false,
      webSecurity: false,
    },
  })

  win.webContents.session.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': [
          "default-src 'self' 'unsafe-inline' data: https: http:"
        ]
      }
    })
  })

  win.webContents.on('context-menu', (e) => e.preventDefault())
  win.webContents.on('will-navigate', (e) => e.preventDefault())
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }))

  // ✅ Single merged CSS injection
  win.webContents.on('did-finish-load', () => {
    win.webContents.insertCSS(`
      ::-webkit-scrollbar { display: none !important; width: 0 !important; }
      body { scrollbar-width: none !important; -ms-overflow-style: none !important; }
    `)
  })

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  }
}

// ✅ Single whenReady — no duplicate
app.whenReady().then(() => {
  createWindow()

  globalShortcut.register('Escape', () => app.quit())
  globalShortcut.register('F5', () => {})
  globalShortcut.register('F11', () => {})
  globalShortcut.register('F12', () => {})
  globalShortcut.register('Control+R', () => {})
  globalShortcut.register('Control+Shift+I', () => {})
  globalShortcut.register('Control+W', () => {})
  globalShortcut.register('Alt+F4', () => {})

  // ✅ Prevent second window on Mac dock click
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})