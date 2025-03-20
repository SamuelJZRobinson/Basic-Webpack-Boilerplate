export class Workspace{
  constructor(){
    this.projectList=[];
  }

  addProject(){
    let title = prompt("Project title:");
    this.projectList.push(new Project(title));

    console.log(this.projectList);
  }

  deleteProject(title){
    if (this.projectList.length > 0){
      this.projectList = this.projectList.filter(project => project.title !== title);
    }
    console.log(this.projectList);
  }
}

export class Project{
  constructor(title){
    this.title=title;
    this.taskList=[];
  }

  addTask(){
    const INDEX = this.taskList.length;
    this.taskList.push(new Task(INDEX,"a","b",Date,"high"));
    console.log(this.taskList);
  }

  deleteTask(index){
    if (this.taskList.length > 0){
      this.taskList.splice(index,1);
      console.log(this.taskList);
    }
  }
}

export class Task{
  constructor(title,desc,dueDate,priority){
    this.index=0;
    this.title=title;
    this.desc=desc;
    this.dueDate=dueDate;
    this.priority=priority;
    this.isChecked=false;
  }

  toggleCheck(){
  }

  editTask(){
    
  }
}