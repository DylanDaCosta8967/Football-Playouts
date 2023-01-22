export interface sceneNode {
  type?: string;
  id?: string;
  text?: string;
  x?: string;
  y?: string;
  fillStyle?: string;
  src?: string;
  width?: string;
  scale?: string;
  repeatX?: string;
  depth?: number;
  distance?: number;
  index?: number;
  children?: sceneNode[];
  parent?: sceneNode;
}