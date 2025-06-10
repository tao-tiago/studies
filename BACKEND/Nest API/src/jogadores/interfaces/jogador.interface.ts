export interface Jogador {
  readonly _id: string;
  readonly phone: string;
  readonly email: string;
  name: string;
  ranking: string;
  positionRanking: number;
  urlPhotoJogador: string;
}

export type JogadorDTO = Pick<Jogador, 'name' | 'email' | 'phone'>;
