import { NestedTreeControl } from '@angular/cdk/tree'
import { MatTreeNestedDataSource } from '@angular/material/tree';
//import { DemoMaterialModule } from '../../../material-module';
import { Component, Input, ElementRef, SecurityContext, ViewChild } from '@angular/core';
import { sceneNode } from '../../scene';
import { SCENES } from '../../scene-manager';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-scene-tree',
  templateUrl: './scene-tree.component.html',
  styleUrls: ['./scene-tree.component.css']
})

export class SceneTreeComponent {
   @Input() title: string;
// public scene : sceneNode[] = SCENES;
public treeControl = new NestedTreeControl<sceneNode>(node => node.children);
public dataSource = new MatTreeNestedDataSource<sceneNode>();

  constructor(private sanitizer: DomSanitizer) {
    this.dataSource.data = SCENES;
    this.dataSource.data.forEach(node => {
     this.setParent(node, node);
     });
  }

  public hasChild = (_: number, node: sceneNode) =>
    !!node.children && node.children.length > 0;

    private setParent(node: sceneNode, parent: sceneNode) {
    node.parent = parent;
    if (node.children) {
     node.children.forEach(childNode => {
        this.setParent(childNode, node);
     });
    }
  }


}
