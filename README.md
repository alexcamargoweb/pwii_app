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

Criando o cadastro de notícias conteúdo: <br>

Alterar o arquivo "home.page.html": deixar somente o "content" <br>
Incluir um card de conteúdo <br>
Criar um diretório para as imagens em "app/src/assets/" <br>
Incluir uma imagem no card criado <br> 

### Executar app (via USB no dispositivo)

$ ionic platform add android <br>
$ npm i -g cordova@latest <br>
$ ionic cordova platform rm android <br>
$ ionic cordova platform add android <br><br>

Alterar as linhas 73 e 75 de "diretorio_do_app/app/platforms/android/gradlew.sh" para: <br>

        JAVACMD="$JAVA_HOME" 
    else 
        JAVACMD="$JAVA_HOME" 

$ ionic cordova build android --device <br>
$ ionic cordova run android --device (confirmar a permissão de execução no dispositivo) <br>


### Compilar app (criar APK)

$ sudo apt-get install gradle <br><br>

Alterar as linhas 73 e 75 de "/usr/share/gradle/bin/gradle.sh" para: <br>

        JAVACMD="$JAVA_HOME" 
    else 
        JAVACMD="$JAVA_HOME" 

Escolher a versão padrão do Java instalada (Java 8): <br><br>

$ sudo update-alternatives --config java <br>
$ sudo update-alternatives --config javac <br><br>

Configurar o JAVA_HOME (adicionar no final de ~/.bashrc): <br><br>

export JAVA_HOME="/usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java" <br>
export ANDROID_SDK_ROOT="~/android-sdk" <br>
export PATH=$PATH:$ANDROID_SDK_ROOT/tools <br><br>

Fechar e abrir o terminal, depois testar: <br><br>

$ echo $JAVA_HOME <br>
$ echo $ANDROID_SDK_ROOT <br><br>

Configurar o JAVA_HOME (adicionar no final de "/etc/environment"): <br><br>

JAVA_HOME="/usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java" <br>
ANDROID_SDK_ROOT="~/android-sdk" <br><br>

Fechar e abrir o terminal <br><br>

Baixar o SDK  em "Command line tools only" (funciona somente no Java 8): https://developer.android.com/studio/ <br><br>

Criar um diretório para o sdk: <br><br>

$ mkdir ~/android-sdk <br><br>

Extrair o arquivo baixado em "~/android-sdk/": <br><br>

$ cd ~/android-sdk/tools <br><br>

Alterar as linhas 73 e 75 de "sdkmanager.sh" e "avdmanager.sh" para: <br><br>

        JAVACMD="$JAVA_HOME" 
    else 
        JAVACMD="$JAVA_HOME" 

Instalar as ferramentas de build: <br><br>

$ ./sdkmanager "build-tools;19.1.0" <br>
$ ./sdkmanager --licenses <br><br>

Para testar as configurações: <br><br>

$ ./avdmanager list avd <br><br>

Para verificar as configurações finais do projeto: <br><br>

$ ionic info <br><br>

Executar no diretório do aplicativo dentro do projeto: <br><br>

$ npm i -g cordova <br>
$ cordova telemetry on <br>
$ ionic platform add android <br><br>

Alterar as linhas 73 e 75 de "/usr/share/gradle/bin/gradle" e "diretorio_do_app/platforms/android/gradlew.sh" para: <br><br>

        JAVACMD="$JAVA_HOME" 
    else 
        JAVACMD="$JAVA_HOME" 

Gera um "unsigned apk" (ainda não funciona no dispositivo): <br><br>

$ ionic cordova build android --prod --release <br><br>

Verificar o arquivo em "diretorio_do_app/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk" <br><br>

Gera a "keystore file" (senha "123456", executar no diretório do app): <br><br>

$ keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000 <br><br>

Gera um "sign unsigned apk" (executar no diretório do app): <br><br>

$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk alias_name <br><br>

Gera o apk final: <br><br>

$ cd diretorio_do_app/platforms/android/app/build/outputs/apk/release <br>
$ ~/android-sdk/build-tools/19.1.0/zipalign -v 4 app-release-unsigned.apk signed.apk <br><br>




