import { Body, Controller, Post, Req } from "@nestjs/common";
import { Request } from 'express';
import venom from 'venom-bot'

@Controller('init')
export class VenomController {
    @Post('venom')
    async initVenom(@Req() @Body() req: Request): Promise<void> {
        try {
            const sessionName : string = 'session-name'
            
            // venom.create({
            //     session: sessionName, //name of session
            //     multidevice: false // for version not multidevice use false.(default: true)
            //   })
            console.log(req)
        } catch (err) {
            console.log(err)
        }
    }
}