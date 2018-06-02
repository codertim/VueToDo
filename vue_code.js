

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
    template: '<div style="margin-bottom: 1.1em;"><label style="background-color: indianred; border-left: 3px solid #0000ff; display:inline; margin-bottom: 0.1em; padding: 0.2em 3em;">Task: {{ mytask }}<span style="padding-left: 2em; padding-right: 0.3em;" v-on:click="handleClose()">&times;</span></label></div>',
    methods: {
        handleClose: function() {
            console.log("appList.handleclose");
            var i = taskData.indexOf(this.mytask);
            taskData.splice(i, 1);   // remove the item
        }
    }
});

var myAddTask = new Vue({
    el: "#add-task",
    data: {
        model1: 'Test Model 1'
    },
    methods: {
        handleEnter: function() { console.log("Handling Enter - To Be Implemented"); },
        handleControlAndEnter: function() { console.log("Handle Control and Enter"); }
    },
    watch: {
        model1: function(latest, orig) { 
            console.log("watch - model1 - latest:", latest, " - orig:", orig);
        }
    }
});

var myAppList = new Vue({
    el: "#the-list2",
    data: {
        myLink: "<a href='http://www.google.com'>Google</a>",
        instructions: "Enter task ...",
        isStyleOverride: true,
        allTasks: taskData,
        styleTest1: 'test1',
        styleTest2: 'test2',
        msg: "Tasks To do:",
    },
    methods: {
        testClickEvent: function() {
            alert("testClickEvent - starting");
        }
    }
});



function addTask() {
    // alert("Adding Task");
    var newTask = document.getElementById("input-add-task").value;
    console.log("New Task = " + newTask);
    appList.addNewTaskToList(newTask);
}


