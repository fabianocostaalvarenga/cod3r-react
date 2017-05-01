const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
// (new: true) = ao atualizar o node devolvera o registro atualizado, por padrão o node devolve o registro antigo
// (runValidators: true) = ao atualizar obriga o node a rodar as validações, pois por padrão ele não roda.
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo