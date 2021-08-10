const { argv } = require('yargs');
const path = require('path');
const Todo = require('./Todo');
const { saveFile, readfile } = require('./utils');
const { ADD, UPDATE, NEXT, DONE, FIND, LIST } = require('./commands');

const fileName = '../data.json';

const filePath = path.resolve(__dirname, fileName);

(function int() {
    const data = readfile(filePath) || []
    const todo = new Todo(data);
    const { _: baseCommand } = argv;

    switch (baseCommand[0]) {
        case ADD: {
            todo.addItem(argv.text);
            console.log('Todo Added');
            saveFile(todo.todoList, filePath);
            break;
        }

        case UPDATE: {
            todo.update(argv.id, argv.text);
            console.log('Todo updated');
            saveFile(todo.todoList, filePath);
        }

        case NEXT: {
            const item = todo.next()
            console.log(`${item.id} - ${item.text} [${item.created}]`);
            break;
        }

        case DONE:{
            todo.done()
            console.log('one item completed');
            saveFile(todo.todoList, filePath);
            break;
        }
        case FIND:{
            const item = todo.find(argv.term)
            if(item.length === 0){
                console.log('no item found');
            }
            for (let i = 0; i < item.length; i++) {
                console.log(`${item[i].id} - ${item[i].text} [${item[i].created}]`);
            }
            break;
        }

        case LIST:{
            if(todo.todoList.length === 0){
                console.log('empty list');
            }
            for (let i = 0; i < todo.todoList.length; i++) {
                console.log(`${todo.todoList[i].id} - ${todo.todoList[i].text} [${todo.todoList[i].created}]`);
            }
            break;
        }
        default:
            throw new Error("command not found")
    }

    console.log(argv)
})()