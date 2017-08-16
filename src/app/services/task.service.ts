import { Injectable } from '@angular/core';
import { Task } from '../Task'
@Injectable()
export class TaskService {

  constructor() { }

  getTasks() {
    const tasks: Task[] = [];

   
    return tasks;
  }

}
