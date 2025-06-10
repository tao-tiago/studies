import { Body, Controller, Post } from '@nestjs/common';
import { JogadorDTO } from './interfaces/jogador.interface';

@Controller('api/v1/jogadores')
export class JogadoresController {
  @Post()
  async criarAtualizarJogador(@Body() { name, email, phone }: JogadorDTO) {
    return {
      name: `My name is ${name}`,
      email: email,
      phone: phone,
    };
  }
}
