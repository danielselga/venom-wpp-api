const venom = require('venom-bot');
export class VenomInstance {
    sessionName: string;
    sendMessageOptions: Function;
    constructor(sessionName: string) {
        this.sessionName = sessionName
        this.init()
    }

    async init() {
        try {
            await venom
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
                    }
                )
        } catch (err) {
            console.log(err)
        }
    }
}