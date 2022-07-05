import React from 'react';
import Header from '../components/Header';
import ShowTasks from '../components/ShowTasks';
import { useState, useEffect } from 'react';
// import data from '../helper/starterData';

const Home = () => {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [] );
  console.log(tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))    
  }, [tasks])

  return (
  <div className='container'>
    <Header tasks={tasks} setTasks={setTasks}/>
  
    <ShowTasks tasks={tasks} setTasks={setTasks} />
  </div>
  )
};

export default Home;
