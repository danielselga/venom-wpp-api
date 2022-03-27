const venom = require('venom-bot');
import { VenomInterface } from "./venom.interfaces";

export class VenomInstance {
    sessionName: string;
    constructor(sessionName: string) {
        this.sessionName = sessionName
        this.init()
    }

    async init() {
        try {
            venom
                .create(
                    //session
                    this.sessionName, //Pass the name of the client you want to start the bot
                    //catchQR
                    (base64Qrimg, asciiQR, attempts, urlCode) => {
                        console.log('Number of attempts to read the qrcode: ', attempts);
                        console.log('Terminal qrcode: ', asciiQR);
                        console.log('base64 image string qrcode: ', base64Qrimg);
                        console.log('urlCode (data-ref): ', urlCode);
                    },
                    // statusFind
                    (statusSession, session) => {
                        console.log('Status Session: ', statusSession); //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken || chatsAvailable || deviceNotConnected || serverWssNotConnected || noOpenBrowser
                        //Create session wss return "serverClose" case server for close
                        console.log('Session name: ', session);
                    },
                    // options
                    {
                        multidevice: false, // for version not multidevice use false.(default: true)
                        folderNameToken: 'tokens', //folder name when saving tokens
                        mkdirFolderToken: '', //folder directory tokens, just inside the venom folder, example:  { mkdirFolderToken: '/node_modules', } //will save the tokens folder in the node_modules directory
                        headless: true, // Headless chrome
                        devtools: false, // Open devtools by default
                        useChrome: true, // If false will use Chromium instance
                        debug: false, // Opens a debug session
                        logQR: true, // Logs QR automatically in terminal
                        browserWS: '', // If u want to use browserWSEndpoint
                        browserArgs: [''], //Original parameters  ---Parameters to be added into the chrome browser instance
                        puppeteerOptions: {}, // Will be passed to puppeteer.launch
                        disableSpins: true, // Will disable Spinnies animation, useful for containers (docker) for a better log
                        disableWelcome: true, // Will disable the welcoming message which appears in the beginning
                        updatesLog: true, // Logs info updates automatically in terminal
                        autoClose: 60000, // Automatically closes the venom-bot only when scanning the QR code (default 60 seconds, if you want to turn it off, assign 0 or false)
                        createPathFileToken: false, // creates a folder when inserting an object in the client's browser, to work it is necessary to pass the parameters in the function create browserSessionToken
                        chromiumVersion: '818858', // Version of the browser that will be used. Revision strings can be obtained from omahaproxy.appspot.com.
                        addProxy: [''], // Add proxy server exemple : [e1.p.webshare.io:01, e1.p.webshare.io:01]
                        userProxy: '', // Proxy login username
                        userPass: '' // Proxy password
                    },
                    // BrowserSessionToken
                    // To receive the client's token use the function await clinet.getSessionTokenBrowser()
                    {
                        WABrowserId: '"UnXjH....."',
                        WASecretBundle:
                            '{"key":"+i/nRgWJ....","encKey":"kGdMR5t....","macKey":"+i/nRgW...."}',
                        WAToken1: '"0i8...."',
                        WAToken2: '"1@lPpzwC...."'
                    },
                    // BrowserInstance
                    (browser, waPage) => {
                        // console.log('Browser PID:', browser.process().pid);
                        // waPage.screenshot({ path: 'screenshot.png' });
                    }
                )
        } catch (err) {
            console.log(err)
        }
    }
}


//   .then((client) => {
//     start(client);
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });