**<h1 align="center">Caleb Tools</h1>**

![preview](/.github/preview_start.jpg)

---

**<h2>SOBRE</h2>**

Projeto construído com intuito de estudo prático de HTLM/CSS/JS.

<a name="sumario"></a>
|**<h4>SUMARIO</h4>**|
|--------------------|
| _[1 - ESCOPO](#escopo)_   |
| _[2 - DETALHES](#detalhes)_ |
| _[3 - FERRAMENTAS](#ferramentas)_ |
| _[4 - SOBRE FERRAMENTAS](#sobre_ferramentas)_ |
| _[5 - TECNOLOGIAS](#tecnologias)_ |
| _[6 - CONTATO](#contato)_ |


<a id="escopo"></a>

> **_ESCOPO_**

Uma aplicação com diversas ferramentas que podem auxiliar no dia-a-dia dependendo da necessidade.

[Topo](#sumario)

<a id="detalhes"></a>

> **_DETALHES_**

A aplicação possui um menu lateral, onde cada botão representa uma ferramenta e uma tela principal logo ao centro onde as ferramentas iram funcionar. Junto ao menu lateral, foram criados caixas de texto com um nome descritivo de cada aplicação, as caixas são apresentadas quando o usuário passa com o mouse por cima do botão da aplicação.

[Topo](#sumario)

<a id="ferramentas"></a>

> **_FERRAMENTAS_**

- _[CALCULADORA](#calculadora)_
- _[CALENDÁRIO](#calendario)_
- _[PALAVRAS](#palavras)_
- _[SORTEIO DE NÚMEROS](#sorteio)_
- _[CONVERSOR DE TEMPERATURA](#temperatura)_
- _[PX TO REM](#pxtorem)_
- _[DADOS](#dados)_
- _[JOGO DA VELHA](#jogodavelha)_
- _[JOGO DA FORCA](#jogodaforca)_

[Topo](#sumario)
_________________________________

<a id="sobre_ferramentas"></a>

> **_SOBRE AS FERRAMENTAS_**

<a id="calculadora"></a>

<b>[ _CALCULADORA_ ]</b>

![preview](/.github/preview_calculadora.jpg)

_* Tech: HTML, CSS, JavaScript;_

_* Utilidade: Realizar contas básicas de matemática;_

_DETALHES: A calculadora realiza operações de adição(+), subtração(-), multiplicação (*), divisão(/) e calcula porcentagem de um valor sobre o outro, é possível negativar os números e definir casas decimais, limpeza dos dados e cancelamento de operação._

_FUNCIONAMENTO: Basicamente a calculadora trabalha com quatro variáveis, sendo o primeiro número (n1) a operação matemática desejada (operação) o segundo número (n2) e o número resultado (result)._

_No fluxo, a aplicação solicita o primeiro número, o mesmo para de concatenar os valores inseridos após o usuário clicar no símbolo operador desejado, feito isso, a aplicação solicita o segundo número e da mesma maneira, para de concatenar os valores inseridos até que o botão de "igual" será clicado, apresentando o valor final._

_É possível continuar a operação a partir do resultado da última equação, pois, após a operação realizada o resultado é atribuído ao primeiro valor. As operações podem ser realizadas sem que o usuário precise ficar clicando no botão de "igual", após inserir o primeiro valor, operação desejada e segundo valor, caso ele clique em um outro operador, a primeira operação será realizada, resultado atribuído ao primeiro número e a operação desejada irá continuar sendo executada a partir dali._

_Para no caso do usuário não informar os valores, sempre que clicar num operador ou no botão de resultado, os números receberam o valor 0.(Ex: Usuário clicar em (+) e depois em igual (=), a calculadora irar realizar a operação 0 + 0)._ 

_Todos os valores da operação, são inseridos como STRING (números, operadores) e depois que a toda operação é definida (N1 (operador) N2) eles são validados e então convertidos para realização da operação matemática e depois o resultado é convertido novamente para STRING. Para criar e manipular os números (negativo, decimal, primeiro numero está definido, qual operador será utilizado, etc), usamos variáveis booleano, que são validadas por funções._

_* Construção e Estilização: Aplicação construída apenas com caracteres (sem imagens) e estilizada com CSS bruto._

<a id="calendario"></a>

<b>[ _CALENDARIO_ ]</b>

![preview](/.github/preview_calendario.jpg)

_* Tech: HTML, CSS, JavaScript;_

_* Utilidade: Calendário interativo para consulta de datas;_

_DETALHES E ESTRUTURA: O calendário apresenta a hora atual(atualiza conforme os segundos passam), a data de hoje por extenso(ex: domingo, 1 de janeiro de 2023) e logo abaixo o calendário do mês atual, informando como uma espécie de título o mês e o ano atual, abaixo uma legenda para os dias da semana(Ex: DOM, SEG) e os dias do mês conforme cada dia da semana e abaixo, botões que levam para uma espécie de seleção de mês e ano, tornando a navegação mais dinâmica e rápida._

_CONSTRUÇÃO: Utilizando a instância Date, crio variável para o mês atual(mês/ano) e o último dia do mês atual. Com o último dia do mês, utilizo uma estrutura de repetição onde é atribuído dentro de um array um objeto com o dia, dia da semana e mês. Para os meses que não iniciam no domingo(primeiro dia da semana), usamos uma nova estrutura de repetição, onde colhemos os dias do mês passado até chegar no domingo, o intuito é não deixar espaços em branco no calendário, o mesmo processo é feito no final do calendário, onde preenchemos com dias do mês seguinte até o dia sábado._

_Após colher as informações, inicia uma função que irá mostrar os dados na tela. É criado um Array com os nomes dos meses e atrelados cada uma com seu valor correspondente na instância Date. Imprime nome do mês e ano atual como titulo, depois, utilizando estrutura de repetição, retiro os dados do Array preenchidos anteriormente e atribuímos cada dia em um novo Array referente a semana que ele pertence, iniciando sempre com os dias do mês anterior, em seguida com os dias do mês atual e depois com os dias do mês seguinte._

_Após imprimir o calendário, inicia a função de seleção de dia, onde é possível clicar no dia desejado e o mesmo fica selecionado em tela. Tal função foi implementada para futuras utilidades._

_FUNCIONAMENTO: Para navegar de mês em mês, foram implementados nas laterais do título do mês, botões com setas, cada um indicando para o lado que está, onde o da esquerda vai para o mês anterior e o da direita, para o próximo mês. Cada um executa uma função onde iniciamos uma função de limpeza de tela, variáveis e validadores, reduzimos ou incrementamos um do valor do mês, dependendo do botão clicado e logo é executado a função de colher dados e de impressão em tela, assim gerando o calendário de outro mês._

_Para a apresentação da hora, existe uma função com uma nova instância Date, onde é atrelada a variáveis de hora, minuto e segundo, em seguida é realizado o incremento do zero a esquerda, para números menores que 10 e assim o valor é impresso em tela. A função está configurada para executar de 1 em 1 segundo, assim funcionando como um relógio. Para a data em extenso utilizamos o mesmo do título do calendário utilizando também outro Array com o nome dos dias da semana._

_BOTÃO DEFINIR MÊS: Inicialmente, ao clicar, ele remove a visibilidade de todos os itens do calendário, e ativa a visibilidade de uma nova janela, onde é apresentando como titulo o ano selecionado(no caso inicialmente, o ano atual) e em botões as iniciais de cada mês, onde o mês selecionado(no caso inicialmente, o mês atual) vai estar com uma cor diferente indicando estar selecionado. Estes botões com os meses são pré criados no HTML e cada um possui uma função de click, passando o valor correspondente ao mês, ao clicar no mesmo, ele executa a função de limpeza, subtrai o valor do mês atual pelo mês escolhido(Vice-versa, depende qual possui maior valor) e esse valor é atrelado a variável com a instância Date, em seguida, executa função para pegar os dados e depois de impressão de dados, removendo a visibilidade deste menu de meses e reativando a visibilidade dos itens de calendário, assim apresentando o mês selecionado. É possível alterar o ano, clicando no título com o ano._

_BOTÃO DEFINIR ANO: Funciona como o menu de opções de meses, mas este apresenta anos. Neste menu são apresentados os anos em botões, em destaque, sempre em um período de 10 anos(EX: 2020 a 2029, 2000 a 2009), apresentado também, antes do período destaque, o último ano da última década e após o período destaque, o primeiro ano da próxima década. Assim como no menu de meses, executa função de limpeza, atrela o valor desejado a instância DATE, colhe os dados, imprime, desabilita visualização do menu, reabilita do calendário. No título deste menu, é apresentado o período destaque, e através das setas podemos navegar pelas décadas._

_SOBRE LIMITE DO CALENDÁRIO: O calendário, regredindo os meses, funciona até janeiro de 1970 conforme informado na documentação da instância Date. Ao tentar passar o limite, um alerta em tela é apresentado, informando sobre o limite._

_* Construção e Estilização: Arquivo SVG para botões (seta), estilização com CSS bruto e criação de elementos com JavaScript._

<a id="palavras"></a>

<b>[ _PALAVRAS_ ]</b>

![preview](/.github/preview_palavras.jpg)

_* Tech: HTML, CSS, JavaScript;_

_* Utilidade: Manipulação de letras, palavras e textos, podendo alterando maiúscula/minúscula, ordem alfabÉtica e contador de caracteres ;_

_A aplicação inicialmente possui uma grande caixa de texto (textArea), onde acontece toda a interação com as letras e palavras, e no topo, um menu com botões relacionado aos tipos de interações. Clicando no botão, as opções de interação iram aparecer abaixo da caixa de texto, de acordo com sua função._

_As aplicações estão escondidas através de CSS, utilizando a propriedade ```display: none;``` ao clicar no botão, a aplicação desejada fica visivel por ```display: flex;```_

<b>MAIÚSCULO E MINÚSCULO</b>

![preview](/.github/preview_palavras_letter_case.jpg)

_Na ferramenta MAIÚSCULO/MINÚSCULO é possivel manipular letras, palavras e textos através das opções disponiveis. Com o texto inserido na caixa de texto e a opção desejada selecionada, basta clicar no botão << TRANSFORMAR >> e o proprio texto digitado na caixa de texto será transformado._

_MAIÚSCULO: Esta opção transforma todo o texto em maiúsculo._

_MINÚSCULO: Esta opção transforma todo o texto em minúsculo._

_AUTERNADO: Esta opção transforma o texto alternando cada letra entre maiúscula e minúscula_

_INVERTER TEXTO: Esta opção transforma o texto colocando o mesmo de trás para frente_

_PRIMEIRA LETRA PALAVRA: Esta opção tranforma o texto colocando a primeira letra de cada letra em maiúscula e o restante de cada palavra em minúscula_

<b>ORDEM ALFABÉTICA</b>

![preview](/.github/preview_palavras_order_alfabetica.jpg)

_Na Ferramenta ORDDEM ALFABÉTICA é possivel ordernar as palavras através das opções disponiveis_

_TIPO DE ORDENAÇÃO: Esta opção define se a ordem alfabética seguira o fluxo normal ou de traz pra frente (de A ao Z ou de Z ao A)_

_SEPARAR POR: Esta opção define qual tipo de caractere será usado para separar as palavras, sendo estes << Quebra de linha>>, << Espaço >>, << Vírgula >>, << Ponto e Vírgula >> e << ponto >>_

_RETORNAR POR: Esta opção define qual tipo de caractere será usado para separar as palavras quando retornamos o resultado da ordenação, sendo estes << Quebra de linha>>, << Espaço >>, << Vírgula >>, << Ponto e Vírgula >> e << ponto >>_

_REMOVER DUPLICADOS: Esta opção define se a aplicação irá remover os valores repitidos ou se seram ordenados também_

<b>CONTADOR DE CARACTERES</b>

![preview](/.github/preview_palavras_contador_caracteres.jpg)

_Na ferramenta CONTADOR DE CARACTERES a aplicação ira contabilizar os caracteres, palavras e linhas que são inseridos na caixa de texto, em tempo real._

_* Construção e Estilização: Estilização com CSS bruto._

<a id="sorteio"></a>

<b>[ _SORTEIO DE NÚMEROS_ ]</b>

![preview](/.github/preview_sorteio.jpg)

_* Tech: HTML, CSS, JavaScript;_

_* Utilidade: Sortear um ou mais números no intervalo desejado;_

_DETALHES: O usuário determina a quantidade de números e o intervalo de números que ele deseja, o resultado do sorteio é apresentado na tela com a identificação de qual o sorteio é aquele. O usuário pode realizar novos sorteios, com outra quantidade e intervalo conforme desejar, que serão também apresentados logo acima dos sorteios anteriores._

_ESTRUTURA: Em questão de estrutura, a aplicação é dividida em duas seções, onde na primeira existem 1 caixa de texto para definir a quantidade de números que serão sorteados e outras duas onde o usuário irá definir o intervalo de números a ser sorteado, logo abaixo um botão que irá disparar o sorteio. A segunda seção será onde os resultados serão exibidos, cada sorteio será exibido em uma caixa, com um cor destaque, com os números sorteados em destaque e logo abaixo qual o número daquele sorteio realizado._

_FUNCIONAMENTO: No primeiro momento a aplicação verifica se os números digitados são de fato números e caso não seja(letras, caracteres especiais, etc.), um alerta é enviado, solicitando preencher os campos corretamente, em seguida, a aplicação verifica se o intervalo de números está correto, em ordem crescente, caso contrario outro alerta é disparado._

_A aplicação vai pegar os números do intervalo e jogar cada valor a uma posição de um Array, em seguida, a aplicação executara um comando de número randômico conforme o intervalo numérico, o número escolhido será removido do Array de números a serem sorteados e dependendo da quantidade de números a ser sorteado que o usuário determinou, ele irá atribuir o número a uma variável única ou o valor será adicionado a um array que recebera a quantidade de números a mais a serem sorteados e o processo repete._

_Todos os valores definidos, o resultado é passado a uma função, que irá verificar se um sorteio foi feito antes, caso não, ele cria elementos HTML na seção de resultados, caso já feito, ele vai pegar o último resultado impresso e irá imprimir acima do último resultado._

_* Construção e Estilização: Aplicação estilizada com CSS bruto e criação de elementos com JavaScript._

<a id="temperatura"></a>

<b>[ _CONVERSOR DE TEMPERATURA_ ]</b>

![preview](/.github/preview_temperatura.jpg)

_* Tech: HTML, CSS, JavaScript;_

_* Utilidade: Conversor de formatos de temperatura;_

_DETALHES: O usuário informa o valor da temperatura, o formato da temperatura (Celsius, Fahrenheit ou Kelvin) inicial e a que ele deseja converter para e aplicação apresenta a temperatura._

_ESTRUTURA: Em questão de estrutura, a aplicação está centralizada em tela, possui um caixa de texto do tipo número, onde recebe o valor da temperatura pelo usuário e ao lado uma caixa onde o valor convertido será apresentado, abaixo das caixas, dois menus fechados de seleção, um ao lado do outro, quando clicado, irá apresentar os formatos de temperaturas disponíveis para seleção, ambos os menus são exatamente iguais._

_MENU SELECT: Referente aos menus de seleção, foram baseados no elemento HTML < select >, porém, com intuito de customizar o menu, deixando com o estilo da aplicação, o menu foi construído através do elemento lista, botões do tipo Radio e texto atrelado a cada botão Radio. O script houve o elemento pai e assim que clicado, o elemento do tipo lista contendo os botões Radio irão aparecer, dependendo de qual opção clicada, o Radio será definido e o elemento pai irá receber o texto da opção selecionada._

_FUNCIONAMENTO: O usuário deve digitar a temperatura e definir o formato inicial e o para qual será convertido, a aplicação só ira apresentar o resultado assim que todos esses requisitos forem preenchidos. Cada um dos elementos(Caixa de texto da temperatura e todos os botões Radio com os formatos de temperatura), recebem um escutador de eventos (caixa de texto - keyup / menu radio - change), que ao ser executados, ele executa as funções que irão executar a aplicação._

_A primeira função checa o valor digitado, converte ele de texto para número e se o valor é valido, verifica qual opção do menu de formatos foi selecionado. A segunda função faz as verificações condicionais conforme as opções selecionadas, conforme os mesmos as operações matemáticas são realizadas. Caso o usuário selecione opções de formato iguais, a aplicação envia um alerta solicitando a troca de uma das opções. Após as operações serem realizadas, a aplicação pega o resultado e atribui como texto na caixa de resultado._

_* Construção e Estilização: Aplicação estilizada com CSS bruto e criação de elementos com JavaScript._

<a id="pxtorem"></a>

<b>[ _PX TO REM_ ]</b>

![preview](/.github/preview_pxtorem.jpg)

_* Tech: HTML, CSS, JavaScript;_

_* Utilidade: Conversor de formatos de tamanho para CSS;_

_DETALHES: O usuário poderá converter valores em PX(pixel) para REM(root em) e vice-versa._

_ESTRUTURA: Em questão de estrutura, a aplicação está centralizada em tela, possui um caixa de texto do tipo número, onde recebe o valor que o usuário deseja converter e ao lado uma caixa onde o valor convertido será apresentado, abaixo das caixas, duas caixas apresentando o tipo de formato inicial e final com suas respectivas siglas e entre as caixas, um botão que inverte a posição dos formatos._

_FUNCIONAMENTO: O usuário deve digitar o valor inicial a ser convertido. A caixa de texto possui um escutador de evento e assim que o usuário começa a digitar a aplicação já dispara a função que irá realizar a conversão. A aplicação já inicia com os valores de formato já pré-definidos, sendo o formato inicial PX e o formato final REM. Caso o usuário clique no botão de troca de formato, a aplicação irá trocar as siglas e os valores das caixas de apresentação e em seguida executar a função de conversão._

_A função de conversão transforma o valor em valor com casas decimais, faz a verificação de condicional e executa a operação matemática conforme escolhido pelo usuário, o valor final recebe 3 casas decimais e é impresso na caixa de resultado._

_* Construção e Estilização: Botão criado com uma imagem SVG, aplicação estilizada com CSS bruto e criação de elementos com JavaScript._

<a id="dados"></a>

<b>[ _DADOS_ ]</b>

![preview](/.github/preview_dados.jpg)

_* Tech: HTML, CSS, JavaScript, Krita;_

_* Utilidade: Simulação de dados D6 e D20;_

_DETALHES: O usuário poderá escolher qual tipo de dado (D6 ou D20) deseja utilizar e ao clicar no mesmo, o resultado é apresentado tanto no desenho do dado, quanto no campo lateral._

_ESTRUTURA: Em questão de estrutura, a aplicação está dividida em 3 seções. Na seção do top, dois botões, um para cada dado ser selecionado, enquanto abaixo, duas seções dividem a tela, sendo a primeira, onde a figura dos dados são apresentados, quanto a outra metade, apresenta o histórico das jogadas de dados que já aconteceram, com o número sorteado, a rodada e o tipo de dado usado._

_FUNCIONAMENTO: Inicialmente é apresentado apenas os dois botões no topo referentes aos Dados de 6 lados e de 20 lados respectivamente, o usuário clica no botão do dado desejado e uma função é disparada, enviando junto o tipo de dado que foi clicado. A função começa resetando todas as variáveis e valores (função executada neste ponto para limpeza de futuros dados atribuídos) e após atribui estilo ao botão selecionado, em seguida ele executa a função de criação do dado em tela, a função recebe o tipo de dado, cria um elemento HTML do tipo IMG e atribui a imagem JPG do dado, assim o apresentando na tela, antes de finalizar a função, uma variável para validação se o dado está criado recebe valor TRUE._

_Com o Dado em tela, uma validação condicional referente ao dado estar criado é executada, adicionando um escutador de evento CLICK no dado com função para rodar o dado e outra para apresentar o resultado._

_A função de rodar o dado executa recebendo o tipo do dado, inicialmente ele faz o sorteio do número referente ao dado escolhido, em seguida executa uma função que através do tipo do dado e do número sorteado, vai realizar verificações condicionais e pegar a imagem correspondente aquele lado do dado sorteado (cada lado de ambos os dados estão em imagens (png ou jpg) dentro das pastas de assets referente a aplicação), o endereço da imagem será retornado a uma variável e depois atribuída ao Elemento HTML de imagem do Dado para ser alterado._

_A função de apresentação é executada recebendo o resultado e o tipo de dado, um contador de vezes que os dados são rolados é incrementado, elementos HTML são criados para o painel de resultados, e os valores (Número sorteado, vez que o dado foi rolado e o tipo de dado usado naquela vez) são apresentados em tela. A cada vez que o dado for rolado, independente se o tipo for alterado, o histórico continuara se formando de maneira contínua._

_* Construção e Estilização: Imagens dos lados dos dados (D6 e D20) foram criados por min através do programa de criação e edição de imagens gratuito open source Krita, aplicação estilizada com CSS bruto e criação de elementos com JavaScript._

<a id="jogodavelha"></a>

<b>[ _JOGO DA VELHA_ ]</b>

![preview](/.github/preview_tictactoe.jpg)

_* Tech: HTML, CSS, JavaScript;_

_* Utilidade: Jogar Jogo da Velha;_

_DETALHES: O usuário poderá escolher qual simbolo irá jogar (X ou O) e após clicar em algum espaço do tabuleiro, o jogo ira iniciar, baseado nas regras do jogo da velha clássico._

_ESTRUTURA: Em questão de estrutura, a aplicação está dividida em 2 seções. Na primeira seção, temos a caixa de ambos os jogadores, cada um com seu símbolo pré-definido, e logo abaixo uma caixa com o placar de vitórias respectivamente, caso o jogador clique no símbolo irá aparecer uma caixa apresentando os dois símbolos para que o jogador possa escolher com qual vai jogar. Na seção abaixo, esta disponível o tabuleiro do jogo, criado por meio de tabelas e tomando forma por meio de css._

_FUNCIONAMENTO: Referente ao menu de escolha de símbolo, ao clicar em um dos símbolos (player 1 ou player 2), será executada uma função que recebera qual player está sendo selecionado, a função faz uma verificação condicional verificando se o jogo já começou, caso negativo, o mini menu será apresentado por meio de atributos de CSS, caso o jogo já tenha começado, o aplicativo irá apresentar um alerta, informando que não é possível trocar o símbolo. Com o menu aberto, é apresentado duas caixas, cada uma com um símbolo (X ou O) e clicando em um dos dois, a aplicação executara uma função de mudança de símbolo, a função recebe o tipo de símbolo clicado, e por meio de verificação condicional, faz as alterações de imagem e atribui os novos valores a variáveis de verificação, em seguida, o menu é fechado por meio de atributos css._

_Ao clicar em um dos quadros do tabuleiro é disparada a função de play passando qual caixa foi clicada, sendo a primeira caixa do topo a esquerda e a última de baixo a direita, A função inicialmente verifica se o jogo já começou e caso não tenha, ele irá pegar 1 Array com 3 Arrays dentro que simularão nosso tabuleiro (cada um com 3 casas, no final, simulando uma matriz 3x3) e irá preencher com valores de 10 a 18, pois os valores de cada casa não podem ser iguais e diferente de 1 a 9. Após preencher a matriz, a variável de game iniciado recebe True. Após declarado o início do game uma verificação condicional irá verificar se a casa clicada esta vazia, caso espaço esteja preenchido ele irá imitir um alerta, caso não, o jogo segue, adicionando a um array o número do espaço clicado para que nas próximas jogadas, ele não possa ser clicado mais e em seguida, preenche o tabuleiro com o símbolo referente ao jogador da vez, feito isso, a aplicação executa uma função que irá checar a última jogada concluiu com um vencedor._

_A função de rodar o dado executa recebendo o tipo do dado, inicialmente ele faz o sorteio do número referente ao dado escolhido, em seguida executa uma função que através do tipo do dado e do número sorteado, vai realizar verificações condicionais e pegar a imagem correspondente aquele lado do dado sorteado (cada lado de ambos os dados estão em imagens (png ou jpg) dentro das pastas de assets referente a aplicação), o endereço da imagem será retornado a uma variável e depois atribuída ao Elemento HTML de imagem do Dado para ser alterado._

_A função que irá verificar o vencedor, recebe qual espaço foi clicado e o jogador da vez, primeiramente ela incrementa uma variável que verifica o número de turnos jogados, esta variável ira determinar se ouve um empate, em seguida executa uma verificação condicional relacionando o espaço clicado e atribuindo o número do player(player "1" ou player "2") ao espaço referente na Matriz 3x3 (3 Arrays de 3 espaços) e em seguida, outra verificação condicional verificando se as posições do array possuem os mesmo valores (as posições definidas, são referentes as linhas, colunas e diagonal que dão vitória ao jogador segundo as regras do jogo da velha clássico), caso nenhuma atenda, o jogo continua aguardando próxima escolha do próximo jogador, caso o total de jogadas for igual a 9 e nenhum dos requisitos de vitória não tiverem sido atendidos, o jogo declara empate e caso haja um vencedor é executado uma função de vencedor, passado o número do jogador vencedor._

_A função de vencedor irá incrementar na pontuação do jogador e apresentar em tela o valor adicionado, a função irá criar um modal em tela, informando o vencedor e após feito isso é executada uma função que irá adicionar um escutador de evento do tipo CLICK ao modal, clicando no mesmo, ele executar uma função de limpeza, essa função ira resetar os valores iniciais de cada variável, remover os símbolos dos tabuleiros e remover o modal criado, mantendo apenas a variável de pontuação dos jogadores. O mesmo esquema do modal é feito para caso o jogo seja empatado._

_Voltando no caso de não houver vencedor ou empate ainda, a função de checar vitoria é encerrada, e executada uma verificação condicional para trocar os jogadores, uma função que ira troca o estilo da caixa do jogador, indicando que ele será o próximo a jogar e assim o jogo continuará._

_* Construção e Estilização: Simbolos X e O são imagens SVG, aplicação estilizada com CSS bruto e criação de elementos com JavaScript._

<a id="jogodaforca"></a>

<b>[ _JOGO DA FORCA_ ]</b>

![preview](/.github/preview_forca.jpg)

_* Tech: HTML, CSS, JavaScript, Krita;_

_* Utilidade: Jogar Jogo da Forca;_

_DETALHES: O usuário irá inserir uma palavra secreta, após outro jogador tera que adivinhar as palavras antes que o boneco desenhado representado em imagem seja enforcado._

_ESTRUTURA: Em questão de estrutura, a aplicação no primeiro momento apresenta uma caixa de texto padrão PASSWORD com um botão para iniciar o jogo, após iniciado, a aplicação é dividida em 3 seções, a primeira apresenta a imagem da forca, que é atualizada toda vez que o jogador erra, abaixo a seção da palavra secreta, onde foi criado uma caixa por letra com a borda inferior para indicar cada espaço de letra e por fim uma seção para o teclado virtual, onde é apresentado um botão por letra do alfabeto, seguindo o padrão QWERTY dos teclados físicos. Ao final do jogo é apresentado um modal com texto de vitória ou derrota dependendo do resultado._

_FUNCIONAMENTO: Ao iniciar a aplicação, o usuário deve digitar a palavra que deseja se adivinhada e ao clicar em START é executada uma função, A função primeiramente faz uma verificação condicional referente a palavra secreta digitada, caso a palavra tenha não tenham apenas letras do alfabeto (caso números, caracteres especiais, etc.) a aplicação retorna um alerta, solicitando digitar novamente, caso positivo, a caixa de texto é ocultada e as seções com o desenho da forca, as letras ocultas e o teclado virtual são revelados, em seguida, a palavra digitada e o número de caracteres da palavra são atribuídos ambos em variáveis e por meio de um FOR a aplicação cria elementos HTML para cada letra preenchendo com *(Asterisco). Uma verificação condicional verifica se o jogo já foi inicializado alguma vez, e caso negativo, a aplicação ira adicionar escutador de eventos nas teclas do teclado virtual, que ao clicados, valores de conteúdo da tecla e a própria tecla, são armazenados em variáveis e as mesmas passadas em uma função que irá checar a letra clicada. Uma função é executada antes, onde a aplicação adiciona escuta de evento no documento, referente a teclado, que ira se comportar da mesma maneira das teclas do teclado virtual, desde que essas teclas sejam das letras do alfabeto, caso contrario um alerta é enviado._

_A função, irá verificar se a letra já foi escolhida anteriormente, por meio de um Array que recebera todas as letras escolhidas, certas e erradas, caso negativo, a variável que determina se o jogo já foi jogado alguma vez recebe verdadeiro (essa variável vai impedir que a aplicação adiciona mais de um escutador de eventos nas teclas) e após, irá executar três funções em sequência._

_A primeira função irá verificar se a letra escolhida está correta, primeiro ele dividi a palavra secreta em um Array e depois verifica se a letra escolhida esta dentro do Array de letras, caso positivo, ele substitui o asterisco dentro do Elemento HTML das letras secretas pela letra escolhida, caso contrario será adicionado ao contador de erros mais um e a medida que o valor deste contador vai aumentando, uma verificação condicional vai alterando as imagens da forca até chegar na imagem final. No final de ambas condicionais, a função retorna verdadeiro caso a letra esteja correta e falso caso a letra esteja errada, atribuindo a uma variável que será passada na próxima função._

_A segunda função irá trocar a cor da tecla escolhida no teclado virtual com intuito de relembrar acertos e erros ao jogador. A função recebe a tecla clicada e o retorno da última função dizendo se acertou ou errou, caso positivo a função trocara o fundo da tecla para azul, caso errado, troca a cor de fundo da tecla para vermelho._

_A terceira função irá checar se o jogador venceu, a aplicação executa uma verificação condicional, caso o contador de acertos for igual ao contador total de letras, ele terá vencido, caso o contador de erros seja igual a 8, o jogador perdeu. Ambas as condições abrem um modal apresentando a mensagem de vitória ou derrota, uma imagem final é apresentada e o modal possui um botão com uma função de reset, que irá redefinir o valor das variáveis, voltar a imagem da forca inicial, resetar os estilos das teclas clicadas, remover as letras secretas e por fim, remover a visibilidade das três seções de game e reabilitando a visibilidade da caixa de texto, assim, reiniciando o jogo._

_* Construção e Estilização: Imagens do boneco e da forca foram criadas por min através do programa de criação e edição de imagens gratuito open source Krita, aplicação estilizada com CSS bruto e criação de elementos com JavaScript._

[Ferramentas](#ferramentas) - [Topo](#sumario)

---

<a id="tecnologias"></a>

**<h2>TECNOLOGIAS</h2>**

<img src="./.github/html5_svg.svg"> HTML

<img src="./.github/css_svg.svg"> CSS

<img src="./.github/js_svg.svg"> JavaScript

<img src="./.github/krita_svg.svg"> Krita

[Topo](#sumario)

---

**<h2>PROJETO</h2>**

[Clique aqui para acessar o projeto;](https://nathancaleb.github.io/caleb_tools/)

---

<a id="contato"></a>

**<h2>CONTATO</h2>**

E-mail: nathancalebss@gmail.com

[Topo](#sumario)