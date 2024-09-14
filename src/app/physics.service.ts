import { Injectable } from '@angular/core';
import * as Matter from 'matter-js';

@Injectable({
  providedIn: 'root'
})
export class PhysicsService {
  engine: Matter.Engine;
  world: Matter.World;

  constructor() {
    this.engine = Matter.Engine.create();
    this.world = this.engine.world;
  }

  startSimulation() {
    Matter.Engine.run(this.engine);
  }

  // Add more methods as per your physics simulation requirements
}
