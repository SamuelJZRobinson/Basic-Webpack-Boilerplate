import "./styles.css";
import { Workspace, Project, Task } from "./todo";

let workspace = new Workspace();
workspace.addProject("test");
workspace.deleteProject("a");