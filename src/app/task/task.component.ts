import { Component, OnInit } from '@angular/core';
import {Task} from '../Task'
import { TaskService } from "../services/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers:[TaskService]
})
export class TaskComponent implements OnInit {
  tasks: Task[] = []
  
  constructor( private dataSerive: TaskService) { 
    this.tasks = dataSerive.getTasks();
  }

  ngOnInit() {

  }

  //completeAll(checked:boolean) {
   // this.tasks.forEach( task => task.setCompleted(checked))
 // }

  //removeTask(task: Task) {
    //this.tasks = this.tasks.filter(  t => t !== task);
  //}

  addNewTask(description: string,num: string){
    this.tasks=[];
    this.tasks.push(new Task(description, num));

   if (description=="sony" && num!='')

     this.tasks[0].price = parseInt(num)*2000;
             
       else if (description=="samsung" && num!='')
            this.tasks[0].price = parseInt(num)*3000; 
            
                else  if (description=="htc" && num!='')
  
                     this.tasks[0].price = parseInt(num)*4000;
  else   
  {
    this.tasks[0].errror="please select from table above and enter number required"
   } 
  }


  calc(){
  
  this.tasks.forEach(task =>task.calculate(task.description,task.num) );


}

 
}
