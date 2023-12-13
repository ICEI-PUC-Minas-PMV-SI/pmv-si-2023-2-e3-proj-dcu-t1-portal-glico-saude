# Especificações de Requisitos de Software
## Objetivos
Descrever e especificar as necessidades dos pacientes diagnosticados com diabetes para autogerenciamento de sua saúde, que devem ser atendidas pelo projeto Portal Glico Saúde.

## Escopo do produto 
### Nome do produto e seus componentes principais 

O produto proposto será denominado Portal Glico Saúde e terá 03 (três) módulos principais: 
1) Registro de dados de saúde dos usuários.
2) Visualização de dados por meio de gráficos e demais ferramenta.
3) Módulo explicativo com informações importantes sobre a diabetes. 

### Missão do produto 

Apresentar uma plataforma interativa e educativa para os usuários, sobretudo os pacientes diagnosticados com diabetes, de forma a facilitar o autogerenciamento e acompanhamento da sua condição de saúde, aumentando a qualidade de vida e contribuindo para a educação em saúde

### Limites do produto

O Portal Glico Saúde não fornece meios diretos para coleta da glicemia. O Portal Glico Saúde não fornece diagnósticos. O Portal Glico Saúde não receita medicamentos. 

### Benefícios do produto
| # | Benefício | Valor para o Cliente |
|---|-----------|-----------------------|
| 1 | Facilidade no cadastro de dados | Essencial |
| 2 | Facilidade na recuperação de informações do usuário | Essencial |
| 3 | Segurança no cadastro de informações | Essencial |
| 4 | Facilidade no acompanhamento da condição de saúde | Essencial |
| 5 | Melhoria na qualidade de vida | Recomendável |
| 6 | Facilidade no acesso às informações educativas sobre a diabetes | Recomendável |

### Descrição geral do produto
#### Requisitos Funcionais

| Código | Funcionalidade | Descrição |
|-------|----------------|------------|
| RF-01 | Cadastrar Usuário | A aplicação deverá permitir ao usuário criar a conta de usuário e fornecer informações pessoais durante o cadastro. |
| RF-02 | Realizar o Login | A aplicação deverá permitir ao usuário realizar o login de conta. |
| RF-03 | Gerenciar Usuário | A aplicação deverá permitir ao usuário consultar, alterar e deletar informações pessoais do cadastro de sua conta. |
| RF-04 | Acessar o conteúdo da plataforma | A aplicação deverá permitir ao usuário consultar o conteúdo informativo disponível na plataforma. |
| RF-05 | Gerenciar o conteúdo da plataforma | A aplicação deverá permitir ao administrador criar, alterar e deletar o conteúdo informativo disponível na plataforma. |
| RF-06 | Gerenciar Informações de Saúde do Usuário | A aplicação deverá permitir ao usuário cadastrar, alterar e deletar suas informações de saúde. |
| RF-07 | Avaliar Saúde do Usuário | A aplicação deverá permitir ao usuário monitorar sua saúde por meio de métricas geradas a partir de suas informações de cadastro. |
| RF-08 | Acessar “Bons Hábitos” | A aplicação deverá permitir ao usuário consultar o material de “Bons Hábitos”. |
| RF-09 | Gerenciar “Bons Hábitos” | A aplicação deverá permitir ao administrador criar, alterar e deletar o material de “Bons Hábitos”. |
| RF-10 | Acessar “Receitas Fáceis” | A aplicação deverá permitir ao usuário consultar o material de “Receitas Fáceis”. |
| RF-11 | Gerenciar “Receitas Fáceis” | A aplicação deverá permitir ao administrador criar, alterar e deletar o material de “Receitas Fáceis”. |

#### Requisitos Não Funcionais

|  Código  | Restrição | Descrição |
|-------|-----------|------------|
| RNF-01 | Ambiente | Os ambientes operacionais a serem utilizados são macOS Catalina, Windows (Windows 7 e superiores) e Linux (Ubuntu 14.04 e superiores). |
| RNF-02 | Ambiente | O sistema deverá funcionar nos navegadores Google Chrome, Microsoft Edge, Safari, Firefox e Opera. |
| RNF-03 | Segurança | O produto deve restringir o acesso por meio de senhas individuais para cada usuário. |
| RNF-04 | Navegação | O sistema deve ser de fácil acesso e compreensão. |

#### Usuários

| # | Ator | Definição |
|---|-------|-----------|
| 1 | Administrador | Usuário gerente do sistema responsável pelo cadastro e manutenção do sistema e dos dados inseridos. Possui acesso geral ao sistema. |
| 2 | Usuário | Usuário responsável por cadastrar dados, consultá-los, alterá-los ou excluí-los. Além de ser capaz de consultar as informações geradas pela plataforma a partir dos dados inseridos. |

<br>

---

### Modelagem do Sistema
#### Diagrama de Casos de Uso 

Como observado no diagrama de casos de uso da Figura 1, a secretária poderá gerenciar as matrículas e professores no sistema, enquanto o coordenador, além dessas funções, poderá gerenciar os cursos de aperfeiçoamento. 

<div align="center">
  
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/portal-glico-saude/assets/107289791/9285e845-d23b-4b9a-a1ab-14b3cd131a37)
Figura 1: Diagrama de Casos de Uso do Sistema. 

</div>

<br>

#### Descrição de Casos de Uso

**1 - Cadastrar usuário (RF-01)**

**Sumário:** Os usuários podem criar uma conta de usuário e fornecer informações pessoais durante o cadastro.

**Ator Primário:** Usuário

**Pré-condições:** Nenhuma

**Fluxo Principal:**
* O Usuário inicia o processo de cadastro.
* O Sistema apresenta um formulário para fornecer informações pessoais.
* O Usuário preenche o formulário.
* O Sistema verifica e valida as informações fornecidas.
* Se os dados forem válidos, a conta do usuário é criada; caso contrário, o Sistema reporta o erro.

**Fluxo Alternativo:** Nenhum

**Pós-condições:** A conta do usuário é criada no sistema.

---

**2 - Realizar o login (RF-02)**

**Sumário:** Os usuários podem realizar o login em suas contas.

**Ator Primário:** Usuário

**Pré-condições:** O Usuário deve ter uma conta registrada no sistema.

**Fluxo Principal:**
* O Usuário fornece seu e-mail e senha.
* O Sistema verifica as credenciais do Usuário.
* Se as credenciais estiverem corretas, o Usuário é autenticado e acessa a plataforma, caso contrário, o Sistema reporta um erro de login.

**Fluxo Alternativo:** Nenhum

**Pós-condições:** O Usuário está autenticado no sistema.

---

**3 - Gerenciar usuário (RF-03)**

**Sumário:** Os usuários podem consultar, alterar e deletar informações pessoais de sua conta.

**Ator Primário:** Usuário

**Pré-condições:** O Usuário deve estar autenticado no sistema.

**Fluxo Principal:**
* O Usuário acessa a seção de gerenciamento de perfil.
* O Sistema apresenta as opções de consulta, alteração e exclusão de informações pessoais.
* O Usuário seleciona a operação desejada.
* O Sistema realiza a operação escolhida pelo Usuário.

**Fluxo Alternativo:** Nenhum

**Pós-condições:** As informações do perfil do Usuário são atualizadas ou excluídas conforme a operação realizada.

---

**4 - Acessar o conteúdo da plataforma (RF-04)**

**Sumário:** Os usuários podem consultar o conteúdo informativo disponível na plataforma.

**Ator Primário:** Usuário

**Pré-condições:** O Usuário deve estar autenticado no sistema.

**Fluxo Principal:**
* O Usuário navega pela plataforma.
* O Sistema exibe o conteúdo informativo disponível.

**Fluxo Alternativo:** Nenhum

**Pós-condições:** O Usuário acessa o conteúdo da plataforma.

---

**5 - Gerenciar o conteúdo da plataforma (RF-05)**

**Sumário:** O administrador pode criar, alterar e deletar o conteúdo informativo disponível na plataforma.

**Ator Primário:** Administrador

**Pré-condições:** O Administrador deve estar autenticado no sistema como administrador.

**Fluxo Principal:**
* O Administrador acessa a seção de gerenciamento de conteúdo.
* O Sistema apresenta as opções de criação, alteração e exclusão de conteúdo informativo.
* O Administrador seleciona a operação desejada.
* O Sistema realiza a operação escolhida pelo Administrador.

**Fluxo Alternativo:** Nenhum

**Pós-condições:** O conteúdo da plataforma é atualizado de acordo com a operação realizada pelo Administrador.

---

**6 - Gerenciar informações de saúde do usuário (RF-06)**

**Sumário:** Os usuários podem cadastrar suas informações de saúde na plataforma.

**Ator Primário:** Usuário

**Pré-condições:** O Usuário deve estar autenticado no sistema.

**Fluxo Principal:**
* O Usuário acessa a seção de gerenciamento de informações de saúde.
* O Sistema apresenta um formulário para fornecer informações de saúde.
* O Usuário preenche o formulário.
* O Sistema atualiza as informações do usuário.

**Fluxo Alternativo:** Nenhum

**Pós-condições:** As informações de saúde são cadastradas no sistema.

---

**7 - Avaliar saúde do usuário (RF-07)**

**Sumário:** Os usuários podem monitorar sua saúde por meio de métricas geradas a partir de suas informações de cadastro.

**Ator Primário:** Usuário

**Pré-condições:** O Usuário deve estar autenticado no sistema e ter informações de saúde cadastradas.

**Fluxo Principal:**
* O Usuário acessa a seção de avaliação de saúde.
* O Sistema gera métricas com base nas informações de saúde do Usuário.
* As métricas são apresentadas ao Usuário.

**Fluxo Alternativo:** Nenhum

**Pós-condições:** O Usuário recebe informações de saúde com base em seus dados cadastrados.

---

**8 - Acessar "Bons Hábitos" (RF-08)**

**Sumário:** Os usuários podem consultar o material de "Bons Hábitos" disponível na plataforma.

**Ator Primário:** Usuário

**Pré-condições:** O Usuário deve estar autenticado no sistema.

**Fluxo Principal:**
* O Usuário navega pela plataforma.
* O Sistema exibe o material informativo de "Bons Hábitos".

**Fluxo Alternativo:** Nenhum

**Pós-condições:** O Usuário acessa o material de "Bons Hábitos".

---

**9 - Gerenciar "Bons Hábitos" (RF-09)**

**Sumário:** O administrador pode criar, alterar e deletar o material de "Bons Hábitos" disponível na plataforma.

**Ator Primário:** Administrador

**Pré-condições:** O Administrador deve estar autenticado no sistema como administrador.

**Fluxo Principal:**
* O Administrador acessa a seção de gerenciamento de conteúdo de "Bons Hábitos".
* O Sistema apresenta as opções de criação, alteração e exclusão de material de "Bons Hábitos".
* O Administrador seleciona a operação desejada.
* O Sistema realiza a operação escolhida pelo Administrador.

**Fluxo Alternativo:** Nenhum

**Pós-condições:** O material de "Bons Hábitos" é atualizado de acordo com a operação realizada pelo Administrador.

---

**10 - Acessar "Receitas Fáceis" (RF-10)**

**Sumário:** Os usuários podem consultar o material de "Receitas Fáceis" disponível na plataforma.

**Ator Primário:** Usuário

**Pré-condições:** O Usuário deve estar autenticado no sistema.

**Fluxo Principal:**
* O Usuário navega pela plataforma.
* O Sistema exibe o material informativo de "Receitas Fáceis".

**Fluxo Alternativo:** Nenhum

**Pós-condições:** O Usuário acessa o material de "Receitas Fáceis".

---

**11 - Gerenciar "Receitas Fáceis" (RF-11)**

**Sumário:** O administrador pode criar, alterar e deletar o material de "Receitas Fáceis" disponível na plataforma.

**Ator Primário:** Administrador

**Pré-condições:** O Administrador deve estar autenticado no sistema como administrador.

**Fluxo Principal:**
* O Administrador acessa a seção de gerenciamento de conteúdo de "Receitas Fáceis".
* O Sistema apresenta as opções de criação, alteração e exclusão de material de "Receitas Fáceis".
* O Administrador seleciona a operação desejada.
* O Sistema realiza a operação escolhida pelo Administrador.

**Fluxo Alternativo:** Nenhum

**Pós-condições:** O material de "Receitas Fáceis" é atualizado de acordo com a operação realizada pelo Administrador.

---

#### Diagrama de Classes

A Figura abaixo representa o diagrama de classes do sistema. 

<div align="center">
  
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/portal-glico-saude/assets/107289791/2f6eabe2-a22b-4ab6-bd54-0584c4528138)

Figura 2: Diagrama de Classes.

</div>

#### Descrição das Classes
| # | Nome           | Descrição                                            |
|---|----------------|-----------------------------------------------------|
| 1 | Usuário        | Cadastro de informações relativas aos usuários e status de login |
| 2 | Administrador  | Guarda informações do administrador e atualiza informações |
| 3 | Conteúdo       | Criar, atualizar e remover conteúdo                |
| 4 | Categoria      | Criar e atualizar categoria                         |
| 5 | Cliente        | Realizar login, cadastrar e atualizar cliente      |
| 6 | InfoSaude      | Listar e remover histórico glicêmico               |
| 7 | Glicemia       | Adicionar, atualizar, remover e obter dados da glicemia |
