import { app, BrowserWindow, globalShortcut } from 'electron'
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
    kiosk: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.mjs'),
      devTools: false,
      webSecurity: false,   // 👈 allows external images/resources
    },
  })
  // Allow images from any source
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
  // Block right click context menu
  win.webContents.on('context-menu', (e) => {
    e.preventDefault()
  })

  // Block navigation (stops accidental page changes)
  win.webContents.on('will-navigate', (e) => {
    e.preventDefault()
  })

  // Block new windows opening
  win.webContents.setWindowOpenHandler(() => {
    return { action: 'deny' }
  })

  // Hide scrollbar via CSS injection
  win.webContents.on('did-finish-load', () => {
    win.webContents.insertCSS(`
      ::-webkit-scrollbar { display: none !important; }
    `)
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

// Block ALL keyboard shortcuts except app-defined ones
app.whenReady().then(() => {
  createWindow()

  // Only allow Escape to quit (or remove this too for full lock)
  globalShortcut.register('Escape', () => app.quit())

  // Block common shortcuts
  globalShortcut.register('F5', () => { })           // refresh
  globalShortcut.register('F11', () => { })          // fullscreen toggle
  globalShortcut.register('F12', () => { })          // devtools
  globalShortcut.register('Control+R', () => { })    // reload
  globalShortcut.register('Control+Shift+I', () => { }) // devtools
  globalShortcut.register('Control+W', () => { })    // close tab
  globalShortcut.register('Alt+F4', () => { })       // close app
})
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})