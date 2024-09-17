import * as Matter from 'matter-js';

import { Injectable } from '@angular/core';

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

  /**
   * Starts the physics simulation by running the Matter.js engine.
   */
  startSimulation(): void {
    Matter.Engine.run(this.engine);
  }

  // Add more methods as per your physics simulation requirements
}
