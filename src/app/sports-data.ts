import {SportsBase} from  './Sport'
import {Hockey} from  './Sport'
import {Soccer} from  './Sport'
import {NetBall} from  './Sport'

export const HOCKEY: Hockey = {
  gameTimeMs: 60000,
  numberOfPlayers: 12,
  numberOfBreaks: 1,
  numberOnBench: 6,
  court: 'Ice',
  stickBrand: 'Addidas'
}

export const SOCCER: Soccer = {
  gameTimeMs: 90000,
  numberOfPlayers: 11,
  numberOfBreaks: 1,
  numberOnBench: 4,
  court: 'grass',
  ballpattern: 'hexagonal'
}

export const NETBALL: NetBall = {
  gameTimeMs: 70000,
  numberOfPlayers: 10,
  numberOfBreaks: 1,
  numberOnBench: 8,
  court: 'sand',
  NetHight: 5
}