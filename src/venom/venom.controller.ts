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
            await client.sendText('5527997133409@c.us', 'Oi, tudo bem?\n\nQuer ganhar qualidade de vida, saúde e emagrecer de vez ainda em 2022?\nMuito prazer, sou a Georgia, consultora da Clínica Bem Viver de Aracruz, e to aqui pra te ajudar. 😄\n\nA gente sabe que é difícil cuidar da saúde sozinho. Por isso mesmo, criamos um ambiente que reúne os melhores profissionais da Nutrição, Psicologia e Consultoria Fitness, todos em um mesmo local. 🩺💚\n\nGostou? Bora se cuidar? É simples, já me responde aqui para conhecer nossos Planos Promocionais e marcar seu horário! Estamos te esperando, agora só depende de você !')
        } catch (err) {
            console.log(err)
        }
    }
}