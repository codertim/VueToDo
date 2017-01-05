


var taskData = ["Testing"];

var appList = new Vue({
    el: "#the-list",
    data: {
        taskList: taskData
    },
    methods: {
        addNewTaskToList: function(myTask) {
            console.log("applist - Adding: ", myTask); 
            this.taskList.push(myTask);
            document.getElementById("input-add-task").value = '';
        }
    }
});

Vue.component('single-task', {
    props: ['mytask'],
    // data: function () { //     return { propMytask: this.mytask }; // },
    template: '<div style="margin-bottom: 0.1em;"><label style="background-color: indianred; display:inline; margin-bottom: 0.1em;">Task: {{ mytask }}<span style="padding-left: 2em; padding-right: 0.3em;" v-on:click="handleClose()">&times;</span></label></div>',
    methods: {
        handleClose: function() {
            console.log("appList.handleclose");
            var i = taskData.indexOf(this.mytask);
            taskData.splice(i, 1);   // remove the item
        }
    }
});


var myAppList = new Vue({
    el: "#the-list2",
    data: {
        allTasks: taskData
    }
});



function addTask() {
    // alert("Adding Task");
    var newTask = document.getElementById("input-add-task").value;
    console.log("New Task = " + newTask);
    appList.addNewTaskToList(newTask);
}

