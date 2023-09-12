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

A aplicação possui um menu lateral, onde cada botão representa uma ferramenta e uma tela principal logo ao centro onde as ferramentas iram funcionar.

[Topo](#sumario)

<a id="ferramentas"></a>

> **_FERRAMENTAS_**

- _[CALCULADORA](#calculadora)_
- _[CALENDÁRIO](#calendario)_

[Topo](#sumario)
_________________________________

<a id="sobre_ferramentas"></a>

> **_SOBRE AS FERRAMENTAS_**

<a id="calculadora"></a>

[ _CALCULADORA_ ]

![preview](/.github/preview_calculadora.jpg)

_* Tech: JavaScript;_

_* Utilidade: Realizar contas básicas de matemática;_

_Detalhes: A calculadora realiza operações de adição(+), subtração(-), multiplicação (*), divisão(/) e calcula porcentagem de um valor sobre o outro, é possível negativar os números e definir casas decimais, limpeza dos dados e cancelamento de operação._

_Basicamente a calculadora trabalha com quatro variáveis, sendo o primeiro número (n1) a operação matemática desejada (operação) o segundo número (n2) e o número resultado (result)._

_No fluxo, a aplicação solicita o primeiro número, o mesmo para de concatenar os valores inseridos após o usuário clicar no símbolo operador desejado, feito isso, a aplicação solicita o segundo número e da mesma maneira, para de concatenar os valores inseridos até que o botão de "igual" será clicado, apresentando o valor final._

_É possível continuar a operação a partir do resultado da última equação, pois, após a operação realizada o resultado é atribuído ao primeiro valor. As operações podem ser realizadas sem que o usuário precise ficar clicando no botão de "igual", após inserir o primeiro valor, operação desejada e segundo valor, caso ele clique em um outro operador, a primeira operação será realizada, resultado atribuído ao primeiro número e a operação desejada irá continuar sendo executada a partir dali._

_Para no caso do usuário não informar os valores, sempre que clicar num operador ou no botão de resultado, os números receberam o valor 0.(Ex: Usuário clicar em (+) e depois em igual (=), a calculadora irar realizar a operação 0 + 0)._ 

_Todos os valores da operação, são inseridos como STRING (números, operadores) e depois que a toda operação é definida (N1 (operador) N2) eles são validados e então convertidos para realização da operação matemática e depois o resultado é convertido novamente para STRING. Para criar e manipular os números (negativo, decimal, primeiro numero está definido, qual operador será utilizado, etc), usamos variáveis booleano, que são validadas por funções._

_* Construção e Estilização: Aplicação construída apenas com caracteres (sem imagens) e estilizada com CSS bruto._

<a id="calendario"></a>

[ _CALENDARIO_ ]

![preview](/.github/preview_calendario.jpg)

_* Tech: JavaScript;_

_* Utilidade: Calendário interativo para consulta de datas;_

_Detalhes: O calendário apresenta a hora atual(atualiza conforme os segundos passam), a data de hoje por extenso(ex: domingo, 1 de janeiro de 2023) e logo abaixo o calendário do mês atual, informando como uma espécie de título o mês e o ano atual, abaixo uma legenda para os dias da semana(Ex: DOM, SEG) e os dias do mês conforme cada dia da semana e abaixo, botões que levam para uma espécie de seleção de mês e ano, tornando a navegação mais dinâmica e rápida._

_Utilizando a instância Date, crio variável para o mês atual(mês/ano) e o último dia do mês atual. Com o último dia do mês, utilizo uma estrutura de repetição onde é atribuído dentro de um array um objeto com o dia, dia da semana e mês. Para os meses que não iniciam no domingo(primeiro dia da semana), usamos uma nova estrutura de repetição, onde colhemos os dias do mês passado até chegar no domingo, o intuito é não deixar espaços em branco no calendário, o mesmo processo é feito no final do calendário, onde preenchemos com dias do mês seguinte até o dia sábado._

_Após colher as informações, inicia uma função que irá mostrar os dados na tela. É criado um Array com os nomes dos meses e atrelados cada uma com seu valor correspondente na instância Date. Imprime nome do mês e ano atual como titulo, depois, utilizando estrutura de repetição, retiro os dados do Array preenchidos anteriormente e atribuímos cada dia em um novo Array referente a semana que ele pertence, iniciando sempre com os dias do mês anterior, em seguida com os dias do mês atual e depois com os dias do mês seguinte._

_Após imprimir o calendário, inicia a função de seleção de dia, onde é possível clicar no dia desejado e o mesmo fica selecionado em tela. Tal função foi implementada para futuras utilidades._

_Para navegar de mês em mês, foram implementados nas laterais do título do mês, botões com setas, cada um indicando para o lado que está, onde o da esquerda vai para o mês anterior e o da direita, para o próximo mês. Cada um executa uma função onde iniciamos uma função de limpeza de tela, variáveis e validadores, reduzimos ou incrementamos um do valor do mês, dependendo do botão clicado e logo é executado a função de colher dados e de impressão em tela, assim gerando o calendário de outro mês._

_Para a apresentação da hora, existe uma função com uma nova instância Date, onde é atrelada a variáveis de hora, minuto e segundo, em seguida é realizado o incremento do zero a esquerda, para números menores que 10 e assim o valor é impresso em tela. A função está configurada para executar de 1 em 1 segundo, assim funcionando como um relógio. Para a data em extenso utilizamos o mesmo do título do calendário utilizando também outro Array com o nome dos dias da semana._

_BOTÃO DEFINIR MÊS: Inicialmente, ao clicar, ele remove a visibilidade de todos os itens do calendário, e ativa a visibilidade de uma nova janela, onde é apresentando como titulo o ano selecionado(no caso inicialmente, o ano atual) e em botões as iniciais de cada mês, onde o mês selecionado(no caso inicialmente, o mês atual) vai estar com uma cor diferente indicando estar selecionado. Estes botões com os meses são pré criados no HTML e cada um possui uma função de click, passando o valor correspondente ao mês, ao clicar no mesmo, ele executa a função de limpeza, subtrai o valor do mês atual pelo mês escolhido(Vice-versa, depende qual possui maior valor) e esse valor é atrelado a variável com a instância Date, em seguida, executa função para pegar os dados e depois de impressão de dados, removendo a visibilidade deste menu de meses e reativando a visibilidade dos itens de calendário, assim apresentando o mês selecionado. É possível alterar o ano, clicando no título com o ano._

_BOTÃO DEFINIR ANO: Funciona como o menu de opções de meses, mas este apresenta anos. Neste menu são apresentados os anos em botões, em destaque, sempre em um período de 10 anos(EX: 2020 a 2029, 2000 a 2009), apresentado também, antes do período destaque, o último ano da última década e após o período destaque, o primeiro ano da próxima década. Assim como no menu de meses, executa função de limpeza, atrela o valor desejado a instância DATE, colhe os dados, imprime, desabilita visualização do menu, reabilita do calendário. No título deste menu, é apresentado o período destaque, e através das setas podemos navegar pelas décadas._

_SOBRE LIMITE DO CALENDÁRIO: O calendário, regredindo os meses, funciona até janeiro de 1970 conforme informado na documentação da instância Date. Ao tentar passar o limite, um alerta em tela é apresentado, informando sobre o limite._

_* Construção e Estilização: Arquivo SVG para botões (seta) e estilização com CSS bruto._

[Ferramentas](#ferramentas) - [Topo](#sumario)

---

<a id="tecnologias"></a>

**<h2>TECNOLOGIAS</h2>**

<img src="./.github/html5_svg.svg"> HTML

<img src="./.github/css_svg.svg"> CSS

<img src="./.github/js_svg.svg"> JavaScript

[Topo](#sumario)

---

**<h2>PROJETO</h2>**

[Clique aqui para acessar o projeto;](https://nathancaleb.github.io/caleb_tools/)

---

<a id="contato"></a>

**<h2>CONTATO</h2>**

E-mail: nathancalebss@gmail.com

[Topo](#sumario)