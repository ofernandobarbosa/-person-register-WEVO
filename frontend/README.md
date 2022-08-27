# 💻 Frontend

O Frontend foi desenvolvido no Angular conforme sugerido na documentação.

Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 14.2.0.

## Telas
### Tela principal
![tela-principal](/assets/tela-principal.png)
### Tela cadastro de usuário
![tela-cadastro](/assets/tela-cadastro-usuario.png)
### Tela editar usuário
![tela-cadastro](/assets/tela-editar-usuario.png)

# 🚀 Como testar a aplicaçao

Para rodar local utilizaremos do Docker como recurso, para isso basta seguir o processo abaixo:

### Clonar a branch do projeto

```
git clone https://github.com/ofernandobarbosa/-person-register-WEVO
```

### Entrar no repositório

```
cd -- -person-register-WEVO/Docker
```

### Criando a imagem Docker e rodando o contêiner
```bash
$ docker build -f ./Dockerfile.front ../ -t front/cadastro && docker run -d -p 4200:4200 front/cadastro
```
<br><br>

# 👨‍💻 Autor

* [Fernando Oliveira Barbosa](https://github.com/ofernandobarbosa)
