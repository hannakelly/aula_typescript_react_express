import React from 'react'

// interfaces
import {ITask} from  '../interfaces/Task'

//CSS
import Styles from './TaskList.module.css'

interface Props {
  taskList: ITask[];
  handleDelete(id: number) : void;
  handleEdit(task: ITask): void;
}

const taskList = ({taskList , handleDelete , handleEdit}: Props) => {
  return (
    <>
    {taskList.length > 0? (
      taskList.map((task) => (
        <div  key={task.id} className={Styles.task}>
          <div className={Styles.details}>
            <h4>{task.title}</h4>
            <p>Dificuldade : {task.difficulty}</p>
          </div>
          
          <div className={Styles.actions}>
            <i className="bi bi-pencil" onClick={() => handleEdit(task)}></i>
            <i className="bi bi-trash"
               onClick={() => {handleDelete(task.id);
               }}>
            </i>
          </div>
          <p>{task.title}</p>
        </div>
      ))
    ) : (
       <p>Não há tarefas cadastradas</p>
    )}
    </>
  )
}

export default taskList