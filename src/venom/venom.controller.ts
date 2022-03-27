import { Controller, Get } from "@nestjs/common";
import venom from 'venom-bot'

@Controller('/init/venom')
export class VenomController {
    @Get()
    async initVenom(): Promise<void> {
        try {
            venom.create({
                session: 'session-name', //name of session
                multidevice: false // for version not multidevice use false.(default: true)
              })
        } catch (err) {
            console.log(err)
        }
    }
}