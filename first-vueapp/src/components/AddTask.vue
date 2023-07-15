<template>
    <form @submit="onSubmit" action="">
            <label for="">Task</label>
            <input type="text" v-model="text" name="text">

            <label for="">Day & Time</label>
            <input type="text" v-model="day" name="day">

        <div class="reminder">
            <p>Set Reminder</p>
            <input type="checkbox" name="reminder" v-model="reminder" id="" class="checkbox">
        </div>

        <!-- <button type="submit">save task</button> -->

        <input type="submit" value="save task">
    </form>
</template>

<script>

export default{
    name: 'AddTask',
    data() {
        return{
            text: '',
            day: '',
            reminder: false,
        }
    },
    methods: {
        onSubmit(e) {

            e.preventDefault()

            if (!this.text) {
                alert('Please add a task')
                return
            }

            const newTask = {
                id: Math.floor(Math.random() * 10000),
                text: this.text,
                day: this.day,
                reminder: this.reminder
            }

            
           this.$emit('add-task', newTask)

           this.text = '',
           this.day = '',
           this.reminder = ''
        
        }

    }
}

</script>


<style scoped>
form{
    display: flex;
    flex-direction: column;
}

input{
    height: 30px;
    margin-bottom: 30px;
    border-radius: 5px;
    border: 1px solid ;
    /* outline: none; */
}
.reminder{
    display: flex;
    gap: 1rem;
}
.checkbox{
    height: 20px;
    width: 30px;
}
</style>