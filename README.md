# G-Escola

Um projeto de um mini gerenciador de escolas. Implementado a partir do [desafio da Via Maker](https://github.com/vitorric/viamaker-desafio-vuejs), este projeto contém uma dashboard para super admins poderem gerenciar suas escolas, turmas e alunos. Foi implementado um sistema simples de login para habilitar apenas o acesso as áreas restritas por usuários com o role 0 (super admin). 

Foi utilizado o Firebase como banco de dados e serviço de autenticação, e o site pode ser visto na implementação do hosting em [https://viamaker-challenge.web.app/](https://viamaker-challenge.web.app/).

### O que pode melhorar 

- Implementação completa de um sistema de roles baseado no access_level de cada usuário, possibilitando adição de novos tipos de usuário como administrador de escola e de turmas.
- Auto login
- Melhorar usabilidade. Talvez alguns usuários fiquem perdidos, seria preciso estudar e talvez modifciar a navegação entre páginas
- Substituir os mock texts (famoso lorem ipsum) por dados mais realistas

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
