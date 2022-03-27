import { Body, Controller, Post, Req } from "@nestjs/common";
import { VenomInstance } from "./Venom";

let venom: VenomInstance;
@Controller('venom')
export class VenomController {
    @Post('init')
    async initVenom(@Req() @Body() req: VenomInstance): Promise<void> {
        try {
            const sessionName: string = req.sessionName
            venom = new VenomInstance(sessionName)
        } catch (err) {
            console.log(err)
        }
    }

    @Post('message')
    async sendMessage(@Req() @Body() req: VenomInstance): Promise<void> {
        try {
            venom.sendMessageOptions('000000000000@c.us', 'This is a reply!')
        } catch (err) {
            console.log(err)
        }
    }
}