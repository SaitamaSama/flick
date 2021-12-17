import { BrowserWindow, app } from "electron";

function createWindow(): BrowserWindow {
  const window = new BrowserWindow({
    width: 1500,
    height: 800,
    frame: false,
    // transparent: true,
    webPreferences: {},
  });

  window.loadURL("http://localhost:8080");

  return window;
}

function main() {
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on("ready", () => {
    createWindow();
  });
}

main();
