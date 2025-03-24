vamos ter dois tipos de Usuario o "Admin" e o "Usúario comun"

            Funcionalidades

    1- O Admin poderar cadastrar jogos e categoria 
    2- O usúario comun poderá comprar e gerenciar o seu carrinho de compras  

            Autenticação e Autorização

    1- O sistema deve permitir que usuários façam login e logout.
    2- O sistema deve ter controle de acesso, garantindo que apenas admins possam cadastrar jogos e categorias.
    3- O sistema contará com JWT e Bcript para criar uma lógica de segurança


            Entidades Principais
    
    1- Usuario
    2- Jogos
    3- Categoria
    4- Plataforma
    5- estoque
    6- Avaliações do produto

            Relacionamento
    
    Usuário e Pedido (1:N)
    Usuário e Carrinho de Compras (1:1)
    Usuário e Avaliação: Relacionamento (1:N)

    Jogo e Categoria (1:N)
    Jogo e Avaliação (1:N)
    jogo e plataforma (1:N)
    jogo e estoque (1:N)


    estoque tabela junção entre plataforma e jogos relacionamento ( Jogo ← (1:N) → Estoque ||  Plataforma ← (1:N) → Estoque).