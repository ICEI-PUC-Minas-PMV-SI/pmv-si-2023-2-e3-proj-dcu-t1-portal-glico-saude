# Introdução

A qualidade de vida das pessoas que sofrem com doenças crônicas sempre foi uma preocupação importante da medicina. Nos últimos anos, os avanços tecnológicos têm desempenhado um papel fundamental quando se trata de auxiliar os portadores de tais enfermidades.  

Uma destas grandes preocupações é o controle da glicemia em pacientes com diabetes, doença que afeta muitas pessoas ao redor do mundo. Para prevenir complicações graves, é necessário monitorar constantemente os níveis de glicose no sangue dos pacientes. Nesse contexto, uma aplicação web pode ser de grande valia, ao proporcionar ao paciente uma maneira simples para registrar, monitorar e analisar os dados da sua glicemia.  

No presente trabalho, o objetivo é explicitar as principais etapas de desenvolvimento de uma aplicação web que visa auxiliar o controle da glicemia. Desde o levantamento dos requisitos até os testes de software, será demonstrado como a aplicação foi projetada para fornecer uma experiência fluida e eficiente. As diversas utilidades de tal aplicação, o que inclui a automação do registro de dados, a possibilidade de estabelecer metas glicêmicas, entre outros, também serão destacadas.   

Por fim, espera-se contribuir para a compreensão do papel importante da tecnologia na gestão de condições crônicas de saúde, ao demonstrar o processo de desenvolvimento e os desafios enfrentados, bem como os objetivos que foram alcançados com o presente trabalho. 

## Problema

Controlar a glicemia de modo eficaz é fundamental para gerir a diabetes. De modo geral, tal monitoramento é uma tarefa complexa e muitas vezes ineficiente, devido aos desafios dos métodos mais tradicionais de controle.  

Um dos principais desafios é sem dúvida a coleta e registro de dados. Muitos pacientes precisam realizar medições diversas vezes ao dia, gerando muitas informações para serem registradas manualmente. É um processo que se torna tedioso e propenso à erros. A falta de registro pode levar à uma visão incompleta da situação.  

Importa ressaltar também que a análise manual desses dados para identificar padrões e tendências é trabalhosa e sujeita a interpretações subjetivas, o que pode levar à erros. Afinal, a maioria dos pacientes não é qualificada para fazer tais interpretações.   

Também surge como problema a pouca personalização dos métodos tradicionais. Os pacientes possuem características diferentes, com diversos hábitos de alimentação e atividade física, além da resposta à medicamentos também não ser a mesma para todos. Tais fatores influenciam os níveis de glicose de maneira diferente, mas podem não ser levados em consideração nos métodos mais tradicionais.   

Diante disso, surge a necessidade de uma nova abordagem, que possa superar essas limitações e proporcionar um controle mais eficiente da glicemia.   

## Objetivos

O objetivo central deste trabalho é o desenvolvimento de uma aplicação web dedicada a aprimorar o controle da glicemia em pacientes que enfrentam a condição crônica da diabetes. Compreendendo os desafios inerentes ao monitoramento e gerenciamento dos níveis de glicose no sangue, este projeto visa superar as limitações dos métodos tradicionais e proporcionar aos pacientes uma ferramenta eficaz para monitorar, analisar e interpretar seus dados glicêmicos. Os objetivos a seguir indicam o que este trabalho pretende alcançar e abordar: 

**Simplificar o registro de dados:** a aplicação visa simplificar o processo de coleta de dados glicêmicos, permitindo que os pacientes registrem seus níveis de glicose de maneira fácil e rápida. Isso elimina a necessidade de registros manuais repetitivos, minimizando erros e garantindo uma visão abrangente dos padrões. 

**Analisar e visualizar dados:** através de algoritmos e ferramentas de visualização, a aplicação visa analisar os dados glicêmicos registrados, identificando padrões, tendências e variações. Isso permite que os pacientes entendam melhor suas flutuações glicêmicas e tomem decisões informadas sobre seus hábitos de vida e tratamento. 

**Promover a educação e a conscientização:** além do aspecto prático, a aplicação também busca educar os pacientes sobre a diabetes, seus efeitos e a importância do controle glicêmico. Isso contribui para a conscientização e a adoção de medidas preventivas. 

## Justificativa

A escolha de desenvolver esta aplicação voltada para o controle da glicemia em pacientes com diabetes é respaldada por diversas razões que refletem a relevância e o impacto positivo que a aplicação pode ter na vida dos pacientes e na abordagem da condição de forma mais eficaz. As seguintes razões destacam a importância da escolha dos objetivos e aspectos do software: 

**Lacunas nos métodos tradicionais:** os métodos tradicionais de controle glicêmico frequentemente enfrentam desafios significativos, como registros manuais propensos a erros e análises complexas. Essas lacunas resultam em dificuldades para os pacientes e médicos interpretarem as informações de forma precisa. A aplicação visa preencher essas lacunas, proporcionando uma solução mais precisa e eficaz. 

**Impacto na qualidade de vida:** a diabetes é uma condição crônica que exige um gerenciamento constante. A aplicação busca melhorar a qualidade de vida dos pacientes, facilitando a tarefa de monitorar e interpretar os dados glicêmicos. Isso permite que os pacientes se concentrem mais em suas atividades diárias e menos na administração da doença. 

**Contribuição para a educação em saúde:** a aplicação não se limita apenas ao gerenciamento dos dados, mas também tem um componente educativo. A justificativa para essa inclusão reside na importância da conscientização sobre a diabetes e na capacidade de capacitar os pacientes a tomar decisões informadas relacionadas à sua saúde. 

## Público-Alvo

**Pacientes com Diabetes:**
* Conhecimentos: variados sobre diabetes. 
* Tecnologia: diversidade, de iniciantes a experientes. 
* Relações: autonomia na gestão da saúde. 
* Necessidades: monitoramento glicêmico e orientações. 

**Cuidadores e Familiares:**
* Conhecimentos: variados, com alguns possuindo um entendimento básico. 
* Tecnologia: geralmente familiarizados. 
* Relações: apoio aos pacientes. 
* Necessidades: acompanhamento e apoio. 

**Profissionais de Saúde:**
* Conhecimentos: amplo sobre diabetes. 
* Tecnologia: variado, mas geralmente familiarizado. 
* Relações: papel consultivo. 
* Necessidades: acesso a dados e comunicação eficiente.

# Estado da Arte

Para a estruturação do estado da arte do projeto **Portal Glico Saúde**, pesquisou-se trabalhos que pudessem subsidiar o desenvolvimento do portal, por meio do Google Scholar. Destaca-se que, durante o trabalho exploratório, buscou-se selecionar aqueles textos que tivessem pertinência temática com o projeto em referência, a saber, o monitoramento e acompanhamento da diabetes pelo próprio paciente, por meio de uma aplicação web.

Diante disso, **07** (sete) trabalhos foram selecionados para a base teórica do projeto, sobre os quais pode-se tecer breves comentários a seguir.  

O artigo **Uso de apps para a promoção dos cuidados à saúde** (Rocha et al., 2017) aborda a importância dos meios de tecnologia da informação e comunicação para a promoção da saúde. Para os autores, a evolução da tecnologia permite que os pacientes participem mais do próprio processo de cuidado, pois os dá ferramentas auxiliares. Apontam, no entanto, que a relação entre ensino e aprendizagem por meio das plataformas tecnológicas disponíveis ainda é pouco explorado.  

O trabalho **Aplicativos para adolescentes com diabetes mellitus tipo 1: revisão integrativa de literatura** (Chaves et al., 2017) aborda uma revisão de literatura com o objetivo de observar as soluções existentes para o monitoramento da diabetes mellitus tipo 1 nos adolescentes. Os autores analisaram 12 trabalhos, que tinham aplicativos para adolescentes como produto de pesquisa. Para a análise, os pesquisadores consideraram alguns recursos mínimos que os aplicativos sob estudo deveriam ter, a saber: funções de controle glicêmico, insulinoterapia, alimentação, atividade física, abordagem dos sentimentos e relações sociais. Os autores concluíram que os recursos analisados são necessários no auxílio do controle glicêmico pelos pacientes adolescentes.

O artigo **Biotecnologia Associada ao Monitoramento e Tratamento da Diabetes** (Jackson et al., 2019) evidencia a evolução das tecnologias utilizadas para o tratamento da diabetes. A partir do estudo comparativo entre as diferentes tecnologias disponíveis atualmente, os autores objetivam demonstrar como o uso das tecnologias possibilitou o aumento da qualidade de vida dos usuários pacientes.

No trabalho de conclusão de curso **Benchmarking de aplicativos móveis voltados à saúde de pessoas com diabetes mellitus** (Paula, 2021), analisou 71 aplicativos móveis cujo público-alvo são os pacientes diagnosticados com diabetes mellitus. Durante sua pesquisa, Paula destaca que a principais categorias dos aplicativos analisados eram automonitorização glicêmica, alimentação e contagem carboidratos, atividade física, insulinoterapia, educacional e motivacional. A autora conclui que os aplicativos contribuem sobremaneira para o aumento da qualidade de vida dos usuários pacientes, que conseguem realizar o monitoramento da doença. Além disso, aponta que os aplicativos apresentam volume suficiente de informação e possuem usabilidade adequada.

No trabalho de conclusão de curso **Mogile: protótipo de aplicação mobile para autogerenciamento da diabetes mellitus** (Silva, 2021), desenvolve um protótipo de aplicativo que tem por objetivo o autogerenciamento da diabetes mellitus, focado no autocuidado e na usabilidade. Silva destaca que utilizou o método do Rational Unified Process (RUP) para o desenvolvimento da solução, organizado nas fases do processo, quais sejam concepção, elaboração, construção e transição. Silva dividiu os casos de uso em 4 iterações, tendo desenvolvido para o seu trabalho as duas primeiras iterações. O aplicativo foi desenvolvido para o sistema operacional Android e possui, dentre outras, as funções de registrar glicemia, medicamentos, refeições, exercícios, criar e gerenciar lembretes, consultar índice e carga glicêmica dos alimentos.

No trabalho de conclusão de curso **Aplicativo para Uso de Ludificação no Tratamento de Diabetes Mellitus Tipo 1** (Matias, 2015), também desenvolveu um protótipo de aplicativo mobile, no entanto, seu aplicativo tem o objetivo de ludificar o autogerenciamento da diabetes. Assim, Matias utiliza de estudos de aspectos médicos e psicológicos da doença, aliados a estudos de design de jogos. O objetivo do autor era que o protótipo pudesse aumentar a aderência dos usuários pacientes ao tratamento da diabetes, incentivando os hábitos saudáveis que ajudam no controle da doença. O protótipo foi testado por 14 pessoas, dentre possíveis usuários, um médico endocrinologista, especialistas em ludificação e outros.

Por último, no trabalho de conclusão de curso **TiaBete - Um protótipo de assistente virtual mobile para o autocuidado de pessoas com Diabetes** (Souza, 2018), desenvolve o protótipo de uma assistente virtual para celular que tem por objetivo o autocuidado do usuário paciente. Souza realizou pesquisa de campo, com 24 entrevistados possíveis usuários da assistente virtual, para a elicitação de requisitos do protótipo. O método utilizado para o desenvolvimento deste trabalho de conclusão de curso também foi o Rational Unified Process (RUP). 

Diante dos trabalhos analisados, conclui-se que o projeto **Portal Glico Saúde** possui pertinência temática com o estado da arte atualmente desenvolvido. A relação do projeto com os textos mencionados anteriormente pode ser evidenciada, sobretudo, no que tange aos objetivos a serem atingidos como o autogerenciamento do paciente e a educação em saúde. 
