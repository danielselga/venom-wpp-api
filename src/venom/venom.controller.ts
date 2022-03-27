import { Body, Controller, Post, Req } from "@nestjs/common";
import { VenomInterface } from "./venom.interfaces";
import { VenomInstance } from "./Venom";

@Controller('init')
export class VenomController {
    @Post('venom')
    async initVenom(@Req() @Body() req: VenomInterface): Promise<void> {
        try {
            const sessionName: string = req.sessionName
            const venom = new VenomInstance(sessionName)
            console.log(venom)
        } catch (err) {
            console.log(err)
        }
    }
}