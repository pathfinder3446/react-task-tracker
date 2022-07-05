import { useState } from "react";
import {TiTrash} from "react-icons/ti";

const ShowTasks = ({ tasks, setTasks }) => {

  const [done, setDone] = useState(true)

  const handleDelete = (id) => {
    console.log(id);
    setTasks(tasks.filter((item) => item.id !== id
    ));
  };

const handleDone = (e) => {
  if(done){
    e.target.classList.add('done')
    setDone(!done);
    console.log(e.target);
  } else {
    e.target.classList.remove('done')
    setDone(!done);
    console.log(e.target);
  }

}

  return (
   tasks?.map((item) => {
    const { id, task, day, isDone } = item;
    return(
    <div className="display-container" >
      <div key={id} className="display-tasks" onClick={handleDone} >
        <div className="task-row" >
          <h3>{task}</h3>
          <p>{day}</p>
        </div>
        <div className="btn-trash" onClick={()=> handleDelete(id)} style={{cursor:'pointer'}}>
          <TiTrash size={35}/>
        </div>
         
      </div>
    </div>
    )
    })
  );
};

export default ShowTasks;
