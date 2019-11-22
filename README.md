# Passo a passo IONIC 4 no Linux

Criar um repositório no GitHub para o app: projeto_app.  <br>
Adicionar o usuário "alexcamargoweb" como colaborador. <br>
Fazer o clone do projeto em /home/aluno/

### Instalação

$ npm install -g ionic <br>
$ ionic -v

### Criação do app e layout

$ ionic start app sidemenu --type=angular

### Inicialização

$ cd app <br>
$ ionic serve

### Implementação do projeto

Criando as novas página: <br>

$ ionic g page listar-noticias <br>
$ ionic g page listar-usuarios <br><br>

$ ionic g page cadastrar-noticia <br>
$ ionic g page cadastrar-usuario <br><br>

Criando o cadastro de notícias: <br>

Alterar o arquivo "home.page.html": deixar somente o "content" <br>
Incluir um card de conteúdo <br>
Criar um diretório para as imagens em "app/src/assets/" <br>
Incluir uma imagem no card criado <br> 

