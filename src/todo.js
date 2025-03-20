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
  }

  deleteTask(){

  }
}

export class Task{
  constructor(title,desc,dueDate,priority,isChecked){
    this.title=title;
    this.desc=desc;
    this.dueDate=dueDate;
    this.priority=priority;
    this.isChecked=isChecked;
  }

  toggleCheck(){

  }

  editTask(){
    
  }
}