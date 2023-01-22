import { Component, Input } from '@angular/core';
import { sceneNode } from '../../scene';
import { SCENES } from '../../scene-manager';

@Component({
  selector: 'app-scene-tree',
  templateUrl: './scene-tree.component.html',
  styleUrls: ['./scene-tree.component.css']
})
export class SceneTreeComponent {
   @Input() title: string;
 public scene : sceneNode[] = SCENES;
 


  constructor() {
     this.scene = SCENES;
    // this.scene.forEach(node => {
     //   this.setParent(node, null);
    // });
   // this.dataSource.data.forEach(node => {
  //    this.setParent(node, null);
  //  });
  }


}
