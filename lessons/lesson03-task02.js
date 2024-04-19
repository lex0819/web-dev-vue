// Создайте компонент списка дел, в котором можно добавлять и удалять элементы. Каждый элемент списка должен иметь кнопку удаления, при нажатии на которую элемент списка будет удаляться.

Vue.component('todos', {
    props: ['todos'],
    data() {
        return {
            id: 0,
            newTodo: '',
        };
    },
    methods: {
        addTodo() {
            this.todos.push({
                id: this.id++,
                title: this.newTodo,
            });
            this.newTodo = '';
        },
        removeTodo(todo) {
            this.todos = this.todos.filter((it) => it !== todo);
            //provide data up to the parent component
            this.$emit('gotoparent', this.todos);
        },
    },
    // mounted() {
    //     this.id = this.todos.length;
    // },
    created() {
        this.id = this.todos.length;
    },
    computed: {},
    template: `
    <div class="todos mb-5">
        <div class="row">
            <div class="col-9">
                <input 
                    type="text" 
                    v-model="newTodo" 
                    name="title" 
                    class="form-control"/>
            </div>
            <div class="col-3">
                <button 
                    @click="addTodo" 
                    class="btn btn-primary mb-3">
                    Add todo
                </button>
            </div>
        </div>
        <ul class="list-group mt-3">
            <li 
                v-for="todo in todos" 
                :key="todo.id"
                class="list-group-item">
                <div class="row">
                    <div class="col-9">
                        <span class="col-6">{{todo.title}}</span>
                    </div>
                    <div class="col-3">
                        <button 
                            @click="removeTodo(todo)" 
                            class="btn btn-danger">
                            delete
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    `,
});
