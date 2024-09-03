const { createApp } = Vue

  const app = createApp({
    data() {
      return {
        todos: [

            {
                text: 'Lavorare',
                done: false
            },
            {
                text: 'Sistemare la camera',
                done: false
            },
            {
                text: 'Finire Esercizi',
                done: false
            },
            {
                text: 'Andare in banca',
                done: true
            },
            {
                text: 'Palestra',
                done: false
            },
            {
                text: 'Pulire Casa',
                done: true
            }
        ],
        newToDo: ''
      };
    },
    methods: {
        addToDo (){
            const cleanToDo = this.newToDo.trim();

            if(cleanToDo != '') {
                this.todos.push({
                    text: cleanToDo,
                    done: false // in questo caso di base sarà false perché la task deve essere ancora fatta
                });

                this.newToDo = '';
            }
        },
        removeToDo(i) {
            this.todos.splice(i, 1); // metodo splice serve per rimuovere un item che prende l'indice dove bisogna rimuovere (i) e quanti ne bisogna rimuovere (1)
        }
    }
  }).mount('#app');