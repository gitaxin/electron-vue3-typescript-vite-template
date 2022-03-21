// main.js
// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow, protocol } = require('electron');
const path = require('path');
import { myAdd } from './module/module';


function createWindow() {
    // 创建浏览器窗口
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
        // preload: path.join(__dirname, 'preload.js')
        }
    });
    if (app.isPackaged) {
        //加载 VUE构建后的index.html，electronr打包时会将index.html同目录的文件一同打到包中
        // 当前ts文件编译后，按照配置会编译到dist/main目录下，以dist/main目录来查找要加载的文件，
        mainWindow.loadFile(path.join(__dirname, '../render/index.html')); //__dirname:当前main.ts文件的目录
    }
    else {
        mainWindow.loadURL('http://localhost:3000/');
    }
    // 打开开发工具
    mainWindow.webContents.openDevTools();
    console.log('------------------------');
    console.log(myAdd(1,2));
}
// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
    // protocol.registerFileProtocol('file', (request, callback) => {
    //   const url = request.url.substr(8)
    //   let path = decodeURI(url.split('?')[0])
    //   callback({ path: path })
    // })
    createWindow();
    app.on('activate', function () {
        // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
        // 打开的窗口，那么程序会重新创建一个窗口。
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        app.quit();
});
// 在这个文件中，你可以包含应用程序剩余的所有部分的代码，
// 也可以拆分成几个文件，然后用 require 导入。
//# sourceMappingURL=main.js.map