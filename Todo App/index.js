const taskArrayGlobal = [];
$(document).ready(function(){
    $("#add-task-button-id").click(function(){
        let textVal = $("#add-task-input-id").val();
        if(textVal){
            taskArrayGlobal.push(textVal);
            prepToDoList();
            $("#add-task-input-id").val('');
        }
    })
});
const prepListToDoHtml = (todoText) => {
    return taskArrayGlobal.map((val,i) => {
        return prepToDoHtml(val,i);
    }) 
}
const prepToDoHtml = (todoText,index) => {
    return `<div class="task-list">
            <div class="single-task"> 
                <div class="single-task-check">
                    <input type="checkbox" id="${index}">
                </div>
                <div class="single-task-text">
                    ${todoText}
                </div>
            </div> 
        </div>`
}
const addclickcheckbox = () => {
    $("#task-list-id input").click(function(){
        let index = $(this).attr('id');
        taskArrayGlobal.splice(index,1);
        prepToDoList();
    })
}
const prepToDoList =() => {
    let todoHtml = prepListToDoHtml();
    $("#task-list-id").html(todoHtml);
    addclickcheckbox();
}