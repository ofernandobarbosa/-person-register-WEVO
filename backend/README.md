# 🧱 Backend

A aplicação está de acordo com os requisitos indicados na proposta do teste. Utilizando Node.js para compor o backend, Typescript, MongoDB Atlas como banco de dados através da ORM Mogoose, Express.js foi utilizado para compor as rotas do Node.js.

Foram criadas 4 rotas para a api que através delas o frontend consegue se comunicar com o banco de dados.

```javascript
    // lista todos usuários
    router.get('/all-users', userController.getAll);
    // cria usuario
    router.post('/user', userController.create);
    // atualiza usuário
    router.put('/user/:id', userController.update);
    // deleta usuario
    router.delete('/user/:id', userController.delete);
```

# 🚀 Como testar a aplicaçao

Para rodar local utilizaremos do Docker como recurso, para isso basta seguir o processo abaixo:

### Clonar a branch do projeto

```
git clone https://github.com/ofernandobarbosa/-person-register-WEVO
```

### Entrar no repositório

```
cd person-register-WEVO/Docker
```

### Criando a imagem Docker e rodando o contêiner
```bash
$ docker build -f ./Dockerfile.back ../ -t back/cadastro && docker run -d -p 3000:3000 back/cadastro
```

<br><br>

# 👨‍💻 Autor

* [Fernando Oliveira Barbosa](https://github.com/ofernandobarbosa)
<br><br>