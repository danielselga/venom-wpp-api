import { Body, Controller, Post, Req } from "@nestjs/common";
import { Whatsapp } from "venom-bot";
import { VenomInstance } from "./Venom";

let venom: Promise<Whatsapp>;
@Controller('venom')
export class VenomController {
    @Post('init')
    async initVenom(@Req() @Body() req: VenomInstance): Promise<void> {
        try {
            const sessionName: string = req.sessionName
            venom = new VenomInstance(sessionName).client
        } catch (err) {
            console.log(err)
        }
    }

    @Post('message')
    async sendMessage(@Req() @Body() req: VenomInstance): Promise<void> {
        try {
            // (await venom).sendText('+5527999817892', 'Hi!')
            const client = await venom
            await client.sendText('5527997133409@c.us', 'Se fuder toma no seu cu! pedi franguinho pq vc e otaria.')
        } catch (err) {
            console.log(err)
        }
    }
}