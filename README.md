# 🕹️ Loja de Games - API

API desenvolvida com NestJS para gerenciar uma loja de games, incluindo funcionalidades de autenticação, categorias, jogos, pedidos e mais.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **TypeORM**
- **PostgreSQL**
- **JWT (Autenticação)**
- **BCrypt**
- **Render (Hospedagem)**
- **.env (Configurações)**

- ### 🔷 Diagrama do Banco de Dados (UML)
![UML](https://ik.imagekit.io/50n5k5wmb/Diagrama%20ER%20com%20entidades%20coloridas%20(nota%C3%A7%C3%A3o%20UML)%20(1).png?updatedAt=1747430418834)


## 📦 Funcionalidades

- Cadastro e autenticação de usuários
- CRUD de jogos, categorias e plataformas
- Cadastro de pedidos e itens do pedido
- Relacionamento entre usuários e pedidos
- Proteção de rotas com JWT
- Busca por nome, e-mail e número do pedido


### 🔷 Teste de Requisição
![Requisição no Insomnia](https://ik.imagekit.io/50n5k5wmb/insominia.PNG)


## 🧠 O que eu aprendi

- Gerenciamento de entidades e relacionamentos no TypeORM
- Boas práticas de estruturação com NestJS
- Autenticação segura com JWT e Bcrypt
- Uso de variáveis de ambiente (.env) com `ConfigModule`
- Deploy no Render com banco de dados PostgreSQL em produção

## 🛠️ Desafios enfrentados

- Configuração do ambiente de produção no Render
- Manipulação de relacionamentos entre entidades (`@ManyToOne`, `@OneToMany`)
- Organização modular da aplicação no NestJS
- Integração entre entidades e autenticação

- ## 📸 Imagens do Projeto
- ![Swagger](https://ik.imagekit.io/50n5k5wmb/insominia.PNG](https://ik.imagekit.io/50n5k5wmb/swagger.PNG?updatedAt=1747430474016)


## 📌 Implementações Futuras

- Separar usuários comuns de administradores
- Funcionalidade de carrinho de compras
- Validação avançada com `class-validator`
- Dashboard para administradores
- Pagamento simulado via integração com APIs externas (ex: Stripe ou Mercado Pago)
- Histórico de pedidos por usuário
- Upload de imagens de jogos com Cloudinary ou S3

## 🤝 Contribuições

Contribuições são **muito bem-vindas**! Se você encontrou algum bug, tem sugestões de melhorias ou gostaria de adicionar uma nova funcionalidade, sinta-se à vontade para colaborar.

### 📌 Como contribuir

1. **Fork** este repositório
2. Crie uma **branch** com sua feature ou correção: `git checkout -b minha-contribuicao`
3. Faça os commits necessários
4. Envie um **pull request**
5. Aguarde o review! 💬

---

## 🛡️ Licença

Este projeto está licenciado sob a **Licença MIT**.  
Você pode usá-lo, modificá-lo e distribuí-lo com liberdade, desde que mantenha os devidos créditos.  
[Veja a licença completa aqui.](https://opensource.org/licenses/MIT)

---

💡 **Dica**: Mesmo que você não programe, seu feedback, ideias ou sugestões já são uma grande contribuição. Comente, compartilhe, ou abra uma issue!


📫 Me chama se quiser conversar mais sobre o projeto ou tecnologia:  
**Wellerson - Desenvolvedor Backend | Full Stack em construção 🚀**


