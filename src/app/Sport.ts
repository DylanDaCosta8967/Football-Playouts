
export interface SportsBase {
  gameTimeMs: number;
  numberOfPlayers: number;
  numberOfBreaks: number;
  numberOnBench: number;
  court: string
}

export interface Hockey extends SportsBase {
  stickBrand: string;
}

export interface Soccer extends SportsBase {
  ballpattern: string;
}

export interface NetBall extends SportsBase {
  NetHight: number;
}