<template>
  <div class="container">
    <!-- <img :src="vueLogo" alt="vueLogo"> -->
    <Header @btn-click="toggleAddtask" :showAddTask="showAddTask" title="Task Tracker" />

    <div v-if="showAddTask">
      <AddTask @add-task="addTask"/>
    </div>

    <Tasks @toggle-reminder = "toggleReminder" @delete-task = "deleteTask" :tasks="tasks"></Tasks>

    <!-- <Test/> -->
  </div>
</template>

<script>
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
// import Test from './components/test';
// import logo from './assets/logo.png';
export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
    // Test
  },
  data(){
    
    return {
      tasks: [],
      showAddTask: false
      // vueLogo: logo
    } 
  }, 
  methods: {
    toggleAddtask(){
      this.showAddTask = !this.showAddTask
    },
    async addTask(task){
      // this.tasks = [...this.tasks, task]
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type' : 'application/json',
        },
        body: JSON.stringify(task)

      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
    },

   async deleteTask(id) {
      if (confirm('Are you sure?')) {
        this.tasks = this.tasks.filter((task) => task.id !== id)

        const res = await fetch(`api/tasks/${id}`, {method: 'DELETE' 
          
      })

       const data = await res.json()
       
       return data

      }
    },
    toggleReminder(id){
     this.tasks = this.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)

    }, 
    async fetchTasks() {
      const res = await fetch('api/tasks')

      const data = await res.json()

      return data

    },
    // async (id) {
    //   const res = await fetch(`api/tasks/${id}`)

    //   const data = await res.json()

    //   console.log(data);


    //   return data

    // }
  },
  
  async created() {
        this.tasks = await this.fetchTasks()
    }

}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

img{
  display: flex;
  text-align: center;
  margin-inline: auto;
}

</style>
