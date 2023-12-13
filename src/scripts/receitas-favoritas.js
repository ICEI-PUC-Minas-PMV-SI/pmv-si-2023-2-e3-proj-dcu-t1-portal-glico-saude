const recipeList = [
    {
       id:1,
       titulo:"Estrogonofe de frango com berinjela",
       imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/estrogonofe-de-frango-com-berinjela-1.jpg",
       ingredientes:[
          "300 g de filé de frango cortado em tiras",
          "1 colher (sopa) de sal",
          "1 pitada de pimenta-do-reino branca",
          "1 colher (chá) de azeite de oliva",
          "1 cebola picada",
          "1 berinjela média cortada em cubos",
          "3 tomates sem pele e sem sementes picados",
          "1 colher (sopa) de mostarda",
          "2 colheres (sopa) de catchup light",
          "1 colher (chá) de molho inglês",
          "1 caixinha de creme de leite light (200 g)",
          "Salsa picada a gosto"
       ],
       preparo:"Tempere o frango com o sal e a pimenta. Aqueça o azeite e doure o frango. Junte a cebola e a berinjela e refogue para amaciar. Misture o restante dos ingredientes, com exceção do creme de leite e da salsa, e deixe por cerca de 5 minutos. Retire, acrescente o creme de leite e a salsa e sirva na hora."
    },
    {
        id:2,
        titulo:"Salpicão com Cevadinha",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Salpicao-com-Cevadinha.jpg",
        ingredientes:[
           "1 e ½ xícara (chá) de cevadinha cozida",
           "1 cenoura ralada",
           "1 maçã cortada em cubos",
           "1 xícara (chá) de frango cozido desfiado",
           "½ xícara (chá) de iogurte natural desnatado",
           "1 colher (sopa) de azeite de oliva",
           "1 colher (sopa) de vinagre branco",
           "1 colher (café) de sal",
           "1 colher (sopa) de salsinha picada"
        ],
        preparo:"Misture todos a cevadinha, a cenoura, a maçã e o iogurte. Tempere com o azeite o vinagre, o sal e a salsinha. Leve à geladeira por 2 horas para apurar e sirva."
     },
     {
        id:3,
        titulo:"Peito de Frango com Legumes",
        imagem:"https://saborosoesaudavel.com.br/wp-content/uploads/2023/07/peito-de-frango-com-legumes-para-diabeticos.jpg",
        ingredientes:[
            "2 peitos de frango",
            "1 abobrinha em rodelas",
            "1 pimentão vermelho em tiras",
            "2 cenouras em palitos",
            "1 cebola em fatias",
            "2 colheres de sopa de azeite de oliva",
            "Suco de 1 limão",
            "Sal e pimenta a gosto",
            "Temperos opcionais: alho em pó, ervas frescas, páprica"
         ],
         preparo:"Pré-aqueça o forno a 200°C. Tempere os peitos de frango com suco de limão, sal e pimenta a gosto. Deixe marinar por 10-15 minutos. Em uma assadeira, coloque os legumes cortados. Regue com azeite de oliva e tempere com sal, pimenta e outros temperos opcionais de sua preferência. Leve a assadeira ao forno e asse por aproximadamente 20-25 minutos, ou até que os legumes fiquem macios e dourados. Enquanto isso, aqueça uma grelha ou frigideira antiaderente em fogo médio. Grelhe os peitos de frango por cerca de 6-8 minutos de cada lado, ou até que estejam cozidos e dourados. Retire o frango e os legumes do forno e grelha, deixe descansar por alguns minutos antes de servir."
      },
      {
        id:4,
        titulo:"Peru Recheado com Farofa de Frutas",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Peru-Recheado-com-Farofa-de-Frutas.jpg",
        ingredientes:[
            "1 peru de aproximadamente 3kg",
            "1 xícara (chá) de uvas passas brancas",
            "½ xícara (chá) de damascos secos",
            "1 xícara (chá) de uvas passas pretas",
            "½ xícara (chá) de nozes picadas",
            "1 colher (sopa) de azeite",
            "1 cebola picada",
            "½ xícara (chá) de suco de laranja",
            "200g de farinha de mandioca",
            "200g de presunto em cubinhos",
            "1 ovo batido",
            "2 colheres (sopa) de salsinha",
            "Sal e pimenta moída a gosto"
         ],
         preparo:"Derreta o creme vegetal e misture com os demais ingredientes do tempero. Besunte o peru por dentro e por fora com essa mistura. Reserve. Deixe os damascos de molho por 1 hora. Escorra e pique-os em pedacinhos. Misture com as uvas passas e as nozes. Reserve. Em uma panela, aqueça o azeite e frite a cebola e o presunto. Junte o suco de laranja, deixe ferver. Acrescente a farinha de mandioca e mexa bem por alguns minutos. Misture as frutas reservas. Junte o ovo batido, a salsinha e tempere com sal e pimenta. Recheie o peru com essa mistura e coloque-o em uma assadeira. Leve-o ao forno quente (200°C) besuntando com o molho á medida que for secando. Deixe ao forno por aproximadamente 3 horas e meia. Cubra com papel alumínio nas primeiras 2 horas, retire o papel e deixe dourar. Decore com a farofa e uvas frescas."
      },
      {
        id:5,
        titulo:"Entrada de Chester",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Entrada-de-Chester.jpg",
        ingredientes:[
            "200g de ricota fresca passada pela peneira",
            "4 colheres (sopa) de maionese light",
            "2 colheres ( sopa) de salsinha picada",
            "1 dente de alho amassado",
            "150g de chester em fatias finas"
         ],
         preparo:"Misture a ricota, a maionese, a salsinha e o alho. Espalhe um pouco de recheio sobre cada fatia de chester, formando um cone. Sirva sobre folhas de alface."
      },
      {
        id:6,
        titulo:"Colomba pascal de aveia",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Colomba-pascal-de-aveia.jpg",
        ingredientes:[
           "4 colheres (chá) de fermento biológico granulado seco",
           "1 xícara (240ml) leite desnatado",
           "6 colheres de sopa de adoçante em pó para forno e fogão",
           "100g de manteiga derretida",
           "2 claras",
           "2 ovos",
           "1 colher (chá) de casca de laranja ralada",
           "1 colher (chá) de essência de baunilha",
           "100g de uvas passas",
           "1 pitada de sal",
           "100g de damasco seco picado",
           "100g de ameixas pretas secas picadas",
           "3 xícaras (chá) de farinha de trigo integral peneirada",
           "1 xícara (chá) de farelo de aveia",
           "Cobertura:",
           "4 colheres de sopa de farinha de castanhas",
           "4 colheres de sopa de amêndoas moídas",
           "2 colheres de sopa de adoçante em pó",
           "2 claras"          
        ],
        preparo:"Bata as claras em neve e transfira para uma tigela grande. Adicione as gemas e incorpore. Em seguida, acrescente leite. Vá peneirando a farinha aos poucos e misturando com o auxílio de uma colher. Adicione o farelo e aveia, a manteiga derretida, o adoçante e a baunilha. Misture até incorporar tudo. Adicione o fermento e misture. Por último adicione as frutas secas. Leve ao forno em uma fôrma untada por cerca de 25 minutos. Retire do forno e reserve. Misture tudo em uma tigela pequena (ingredientes da cobertura). Despeje a cobertura na colomba já assada e retorne ao, forno por mais 10 minutos. Pronto, agora é só servir!"
     },
     {
        id:7,
        titulo:"Bolo de abacaxi e castanha-de-caju",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Bolo-de-abacaxi-e-castanha-de-caju.jpg",
        ingredientes:[
           "3 xícaras (chá) de abacaxi cortado em cubos",
           "1/2 xícara (chá) de adoçante dietético em pó, próprio para forno e fogão",
           "4 claras",
           "2 gemas",
           "1/4 de xícara (chá) de óleo de canola",
           "1 xícara (chá) de farinha de trigo integral",
           "1 xícara (chá) de farinha de trigo",
           "50 g de castanha-de-caju bem picadas (xerém)",
           "1 colher (sopa) de fermento em pó",
           "Para salpicar",
           "2 colheres (sopa) de castanha-de-caju triturada",
           "2 colheres (sopa) de leite em pó desnatado",
           "1 colher (sopa) de adoçante dietético em pó, próprio para forno e fogão"        
        ],
        preparo:"Coloque o abacaxi e o adoçante em uma panela e leve ao fogo por cerca de 10 minutos ou até amaciar e formar caldo. Reserve. Bata as claras em neve e reserve. Na batedeira misture as gemas e o óleo e acrescente alternadamente o abacaxi e as farinhas de trigo e integral. Retire e adicione a castanha-de-caju, as claras em neve e o fermento. Coloque em uma forma de bolo média, com furo no meio, untada com margarina e enfarinhada. Leve ao forno médio (180 ºC), preaquecido, por cerca de 40 minutos. Retire o bolo, espere esfriar e desenforme. Misture a castanha triturada, o leite em pó e o adoçante e salpique o bolo."
     },
     {
        id:8,
        titulo:"Rocambole Romeu e Julieta",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Rocambole-Romeu-e-Julieta.jpg",
        ingredientes:[
           "2 ovos",
           "4 claras",
           "4 colheres (sopa) de adoçante dietético em pó, próprio para forno e fogão",
           "4 colheres (sopa) de farinha de trigo",
           "1 colher (chá) de fermento em pó",
           "200 g de ricota",
           "1/2 xícara (chá) de creme de leite light",
           "4 colheres (sopa) de adoçante dietético em pó, próprio para forno e fogão",
           "2 colheres (chá) de essência de baunilha",
           "1 xícara (chá) de geleia de goiaba diet"
        ],
        preparo:"Bata as claras em neve, junte as gemas e o adoçante até obter uma mistura bem fofa. Acrescente a farinha e o fermento delicadamente. Distribua a massa em uma assadeira untada com margarina e enfarinhada. Leve ao forno médio (180 ºC), preaquecido, por 15 minutos ou até assar. Bata no liquidificador os ingredientes do recheio, exceto a geleia. Adicione um pouco de água até formar um creme grosso. Espalhe o recheio sobre a massa assada. Distribua metade da geleia e enrole para formar o rocambole. Deixe na geladeira por cerca de 20 minutos antes de cortar. Enfeite com o restante da geleia e sirva."
     },
     {
        id:9,
        titulo:"Bolo salgado de atum",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Bolo-salgado-de-atum-1.jpg",
        ingredientes:[
           "4 colheres (sopa) de margarina cremosa sem sal",
           "3 ovos",
           "1 xícara (chá) de leite desnatado",
           "2 xícaras (chá) de farinha de trigo",
           "1 colher (sopa) de fermento em pó",
           "1 colher (chá) de sal",
           "2 latas de atum light",
           "1 lata de milho-verde",
           "2 tomates sem pele e sem sementes picados",
           "2 colheres (sopa) de azeitonas verde picadas",
           "Salsa picada a gosto"
        ],
        preparo:"Bata a margarina com as gemas até ficar um creme. Alterne o leite com a farinha de trigo e, por último, adicione o fermento, o sal e as claras em neve. Misture o restante dos ingredientes e coloque em uma forma de bolo média untada com margarina. Asse em forno médio (180 °C), preaquecido, por cerca de 50 minutos. Desenforme e, se quiser, sirva enfeitado com salada de alface."
     },
     {
        id:10,
        titulo:"Quiche de presunto",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Quiche-de-presunto.jpg",
        ingredientes:[
           "Massa:",
           "1 pote de iogurte natural desnatado (200 g)",
           "2 colheres (sopa) de margarina cremosa sem sal",
           "1 colher (café) de sal",
           "Cerca de 2 xícaras (chá) de farinha de trigo",
           "Recheio:",
           "2 cebolas cortadas em rodelas finas",
           "1 colher (sopa) de azeite de oliva",
           "2 xícaras (chá) de acelga picada",
           "100 g de presunto sem capa de gordura picado",
           "Cobertura:",
           "1 gema",
           "3 claras",
           "1 pote de iogurte natural desnatado (200 g)",
           "3 colheres (sopa) de queijo parmesão ralado light "
        ],
        preparo:"Misture o iogurte, a margarina e o sal e adicione a farinha de trigo aos poucos até obter uma massa firme que desgrude das mãos. Deixe descansar 15 minutos. Para o recheio, refogue a cebola no azeite até murchar. Adicione a acelga e o presunto, mexa por 5 minutos e reserve. Espere esfriar. Para a cobertura, bata os ingredientes no liquidificador. Forre com a massa o fundo e as laterais de uma forma de torta média e faça alguns furos no fundo. Leve ao forno médio (180 °C), preaquecido, por 10 minutos. Coloque o recheio e cubra com o creme de iogurte. Leve ao forno novamente por cerca de 30 minutos ou até a torta ficar firme e dourada."
     },
     {
        id:11,
        titulo:"Torta folhada de legumes",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Torta-folhada-de-legumes-1.jpg",
        ingredientes:[
           "Massa:",
           "150 g de massa filo",
           "Recheio:",
           "1 colher (sopa) de azeite de oliva",
           "1 xícara (chá) de flores de brócolis pré-cozidas",
           "1 xícara (chá) de flores de couve-flor pré-cozidas",
           "1 xícara (chá) de cenoura cortada em cubos pré-cozidas",
           "1 xícara (chá) de ervilhas frescas pré-cozidas",
           "1 colher (sopa) de farinha de trigo",
           "1 xícara (chá) de leite desnatado",
           "1 xícara (chá) de cream cheese light",
           "1/2 xícara (chá) de creme de leite light",
           "Para pincelar:",
           "1 clara",
           "1 colher (sopa) de azeite de oliva"
        ],
        preparo:"Para o recheio, aqueça o azeite em uma panela antiaderente e refogue os vegetais. Polvilhe a farinha de trigo, mexa um pouco e junte o leite e o cream cheese. Quando engrossar, desligue o fogo e misture o creme de leite. Deixe esfriar e reserve. Corte a massa em 6 partes. Em uma forma de fundo removível untada com azeite, coloque uma folha de massa deixando o excesso cair dos lados. Misture a clara com o azeite e pincele a massa. Cubra com outra folha alternando as pontas. Repita o procedimento com o restante da massa. Coloque o recheio no centro e dobre as pontas sobre ele, deixando o centro sem massa. Leve ao forno quente (250 °C) por cerca de 20 minutos ou até que fique dourada e crocante."
     },
     {
        id:12,
        titulo:"Delícia de abobrinha",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Delicia-de-abobrinha.jpg",
        ingredientes:[
           "2 abobrinhas médias",
           "200 g de ricota amassada com o garfo",
           "1 ovo",
           "2 colheres (sopa) de cheiro-verde picado",
           "1 pote de iogurte natural desnatado",
           "1 xícara (chá) de farinha de trigo",
           "1 colher (chá) de fermento em pó",
           "2 colheres (chá) de azeite de oliva"
        ],
        preparo:"Rale as abobrinhas no ralo grosso e deixe descansar, em uma peneira, por cerca de 10 minutos. Misture o restante dos ingredientes. Modele bolinhas e coloque-as em uma assadeira untada com parte do azeite. Pincele as bolinhas com o restante do azeite e asse em forno alto (200 °C), preaquecido, por cerca de 20 minutos."
     },
     {
        id:13,
        titulo:"Croissant de chuchu",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Croissant-de-chuchu.jpg",
        ingredientes:[
           "1 tablete de fermento biológico fresco (15 g)",
           "1 chuchu cozido com casca",
           "1 ovo",
           "2 colheres (sopa) de óleo de canola",
           "1 colheres (sopa) de adoçante dietético em pó, próprio para forno e fogão",
           "1/2 xícara (chá) de semente de linhaça dourada batida no liquidificador",
           "1 colher (chá) de sal",
           "2 e 1/2 xícaras (chá) de farinha de trigo",
           "Para pincelar:",
           "1 gema",
           "2 colheres (sopa) de leite desnatado"
        ],
        preparo:"Coloque o fermento em uma tigela e amasse bem. Passe o chuchu pelo processador e adicione ao fermento. Junte o ovo, o óleo, o adoçante, a linhaça e o sal. Aos poucos, acrescente a farinha de trigo até obter uma massa firme que desgrude das mãos. Deixe descansar por 20 minutos em uma tigela untada com azeite e tampada. Abra a massa em uma mesa enfarinhada e corte-a em 8 triângulos. Enrole, começando da parte mais grossa para a mais fina, formando os croissants. Coloque os pães em uma assadeira antiaderente, mas deixe espaço entre eles. Deixe crescer por mais 30 minutos. Misture a gema e o leite e pincele os pães. Leve ao forno médio (180 ºC), preaquecido, por cerca de 30 minutos. Retire e sirva."
     },
     {
        id:14,
        titulo:"Grissini integral",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Grissini-integral-1.jpg",
        ingredientes:[
           "1 tablete de fermento biológico",
           "1 xícara (chá) de leite desnatado",
           "2 colheres (sopa) de azeite de oliva",
           "1 colher (chá) de sal",
           "1 xícara (chá) de farinha de trigo integral",
           "1 e 1/2 xícara (chá) de farinha de trigo",
           "100 g de sementes de gergelim",
           "1 clara"
        ],
        preparo:"Misture o fermento, o leite, o azeite, o sal e a farinha integral. Acrescente a farinha de trigo aos poucos até obter uma massa firme. Faça rolinhos finos com a massa, passe-os na clara e depois no gergelim. Deixe crescer 20 minutos e asse em forno médio (180 ºC), preaquecido, por cerca de 20 minutos. Sirva com requeijão light ou geleia dietética."
     },
     {
        id:15,
        titulo:"Charutinho caipira",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/charutinho.jpg",
        ingredientes:[
           "6 folhas de couve-manteiga grandes",
           "Recheio:",
           "200 g de carne moída magra",
           "1/2 cebola ralada",
           "1/2 lata de milho verde",
           "1 colher (sopa) de salsa picada",
           "colher (chá) de sal",
           "Molho:",
           "1 e 1/2 xícara (chá) de caldo de legumes (0% de gordura)",
           "1/2 xícara (chá) de purê de tomate",
           "Salsa bem picada (opcional)"
        ],
        preparo:"Corte cada folha de couve ao meio e escalde-as em água fervente. Reserve. Misture todos os ingredientes do recheio e coloque um pouco de recheio sobre cada metade das folhas de couve e enrole-as como um charuto. Para o molho, misture os ingredientes. Após, em uma panela, acomode os charutinhos, um ao lado do outro, e regue com o molho. Tampe a panela e leve ao fogo baixo por cerca de 30 minutos. Salpique a salsinha e sirva."
     },
     {
        id:16,
        titulo:"Lombo a Provençal",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Lombo-a-Provencal.jpg",
        ingredientes:[
           "6 medalhões de lombo (800g a aprox.)",
           "1 colher (chá) de tomilho fresco",
           "½ xícara (chá) de vinho branco seco",
           "1 xícara (chá) de caldo de carne",
           "1 colher (sopa) de extrato de tomate",
           "1 colher (chá) de amido de milho",
           "1 cebola ralada no ralo fino",
           "Sal e pimenta a gosto",
           "Ingredientes para a guarnição:",
           "6 tomates maduros",
           "150g de queijo cremoso light",
           "1 colher (sopa) de alho picado",
           "1 colher (sopa) de salsinha picada",
           "1 colher (sopa) de queijo ralado",
           "Folhinhas de alfavacas frescas",
           "1 fio de azeite",
           "Sal e pimenta a gosto"
        ],
        preparo:"Corte os tomates em fatias finas, mas sem separá-los da base. Misture o queijo ralado com o alho e a salsinha, e tempere com sal e pimenta a gosto. Coloque os tomates sobre uma assadeira untada, regue com 1 fio de azeite e leve ao forno por 15 minutos. Decore com folhas de alfavacas fresca. Amarre os medalhões com um fio de algodão culinário para não perder a forma durante o cozimento. Aqueça uma panela untada com azeite, doure os medalhões dos dois lados, tempere com sal e pimenta, junte o tomilho. Acrescente o vinho, a cebola ralada, deixe evaporar por 2 minutos e misture o caldo de carne, o extrato de tomate e o amido de milho dissolvido. Cozinhe até que os medalhões estejam no ponto desejado. Para servir, acomode os medalhões regue com o molho do cozimento e acompanhe com a guarnição."
     },
     {
        id:17,
        titulo:"Maminha ao molho de ervas",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/maminha-ao-molho-de-ervas.jpg",
        ingredientes:[
           "1 maminha em peça",
           "1 colher (chá) de sal",
           "2 dentes de alho amassados",
           "1 colher (sopa) de azeite de oliva",
           "Molho:",
           "2 colheres (sopa) de manjericão",
           "2 colheres (sopa) de salsa",
           "2 colheres (sopa) de tomilho",
           "1 xícara (chá) de caldo de legumes",
           "1 colher (sobremesa) de amido de milho",
           "½ embalagem de creme de leite light"
        ],
        preparo:"Tempere a maminha com o sal e o alho. Aqueça o azeite em uma panela de pressão e doure a carne de todos os lados. Acrescente um pouco de água e leve ao fofo por cerca de 20 minutos. Retire, espere sair a pressão e corte a carne em fatias. Molho: Bata as ervas, o caldo de legumes e o amido no liquidificador. Despeje em uma panela e leve ao fogo até engrossar. Retire, acrescente o creme de leite, misture e sirva sobre a carne fatiada."
     },
     {
        id:18,
        titulo:"Pernil Acebolado",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Pernil-Acebolado.jpg",
        ingredientes:[
           "1 pernil de aproximadamente 2kg",
           "Suco coado de 6 limões",
           "12 dentes de alho",
           "3 folhas de louro",
           "Pimenta dedo de moça",
           "Sal a gosto",
           "33 cebolas em fatias"
        ],
        preparo:"Tempere o pernil com limão, alho, louro, pimenta e sal, batidos no liquidificador, fazendo com que o tempero penetre. Deixe marinando na geladeira por uma noite. Coloque-o em uma assadeira, regue com a marinada e leve ao forno (150°C). Durante o tempo de cozimento, regue continuamente com o liquido da assadeira. Depois de assado, retire o pernil, leve a assadeira com o caldo ao fogo, junte as cebolas e cozinhe por 5 minutos. Sirva o pernil acompanhado com as cebolas."
     },
     {
        id:19,
        titulo:"Abacaxi a Polinésia",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Abacaxi-a-Polinesia.jpg",
        ingredientes:[
           "1 abacaxi fresco",
           "1 xícara (chá) de compota dietética de maçãs",
           "100g de cerejas frescas sem caroços",
           "100g de morangos",
           "1 colher (sopa) de rum",
           "2 claras",
           "Adoçante em pó",
           "1 pêra",
           "1 colher (sopa) de raspas de laranja",
           "Folhas frescas e cerejas com cabinhos"
        ],
        preparo:"Corte o abacaxi pela metade. Se for necessário, corte uma pequena base para apoiá-lo. Tire a polpa com uma colher e corte-a em cubos. Misture os pedaços de abacaxi com o rum, as cerejas e os morangos picados. Deixe macerar por 10 minutos. Recheie as metades de abacaxi com as frutas e complete com a compota de maçãs misturada com as raspas de laranja. Disponha sobre uma travessa decorada com folhas frescas. Em uma tigela, coloque as claras e uma colher de adoçante em pó. Leve ao banho Maria em fogo baixo e bata com a batedeira até obter um merengue consistente. Decore a superfície dos abacaxis com o merengue, as rodelas de peras (regadas com suco de limão) e algumas cerejas com cabinhos."
     },
     {
        id:20,
        titulo:"Bavaroise de Limão",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Bavaroise-de-Limao.jpg",
        ingredientes:[
           "2 caixas de gelatina diet de limão",
           "3 claras",
           "4 colheres (sopa) de raspas de casca de limão",
           "200g de queijo cremoso desnatado",
           "1 colher (sopa) de adoçante próprio para forno e fogão"
        ],
        preparo:"Prepare a gelatina com 150ml de água quente. Bata as claras em ponto de neve, junte o adoçante, a gelatina em forma de fio, as raspas e o suco de limão. Junte o queijo cremoso e uma tudo suavemente. Distribua em 8 taças individuais e leve á geladeira até que esteja firme. Decore com as cascas de limão."
     },
     {
        id:21,
        titulo:"Bolo de brigadeiro",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Bolo-de-brigadeiro.jpg",
        ingredientes:[
           "Massa:",
           "2 gemas",
           "1 xícara (chá) de água quente",
           "1/2 xícara (chá) de óleo",
           "1/2 xícara (chá) de adoçante dietético em pó, próprio para forno e fogão",
           "1/2 xícara (chá) de cacau em pó",
           "2 xícaras (chá) de farinha de trigo",
           "1 colher (sopa) de fermento em pó",
           "4 claras",
           "Recheio e cobertura:",
           "2 xícaras (chá) de leite desnatado",
           "2 colheres (sopa) de amido de milho",
           "150 g de chocolate dietético picado",
           "1/2 xícara (chá) de creme de leite light",
           "Para enfeitar:",
           "4 colheres (sopa) de chocolate granulado dietético"
        ],
        preparo:"Massa: Bata no liquidificador as gemas, a água, o óleo, o adoçante e o cacau. Coloque em uma vasilha e misture a farinha de trigo e o fermento. Bata as claras em neve e acrescente-as delicadamente a massa. Coloque em uma forma redonda média untada com óleo e polvilhada com farinha de trigo. Asse em forno médio (180º C), pré-aquecido, por cerca de 30 minutos. Espere esfriar. Recheio e cobertura: Dissolva o amido no leite e leve ao fogo até engrossar. Reserve. Leve o creme de leite com o chocolate ao banho-maria até derreter bem. Retire e misture os dois cremes, batendo bem para ficar cremoso. Após, abra o bolo ao meio e recheie. Feche, coloque a cobertura e salpique o granulado. Deixe na geladeira até a hora de servir."
     },
     {
        id:22,
        titulo:"Brigadeirão",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Brigadeirao.jpg",
        ingredientes:[
           "2 xícaras (chá) de leite em pó desnatado",
           "2 xícaras (chá) de leite desnatado",
           "½ xícara (chá) de adoçante dietético em pó, próprio para forno e fogão",
           "1 colher (sopa) de margarina cremosa sem sal",
           "1 lata de creme de leite light",
           "½ xícara (chá) de cacau em pó",
           "2 ovos",
           "2 claras",
           "2 colheres (sopa) de granulado de chocolate dietético"
        ],
        preparo:"Bata os ingredientes, com exceção do granulado, no liquidificador. Coloque em uma fôrma de pudim média untada com margarina. Asse em forno médio (180°C), em banho-maria, por cerca de 40 minutos ou até ficar firme. Desenforme ainda morno e salpique o granulado. Deixe na geladeira até a hora de servir."
     },
     {
        id:23,
        titulo:"Cassata Siciliana",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Cassata-Siciliana.jpg",
        ingredientes:[
           "4 biscoitos cream craker",
           "1 colher (sopa) de amêndoas picadas",
           "400g de ricota amassada",
           "1 copo de iogurte natural desnatado",
           "1 colher (sopa) de adoçante dietético em pó, próprio para forno e fogão",
           "2 colheres (sopa) de frutas secas sem açúcar",
           "1 tablete de 50g de chocolate dietético",
           "10 cerejas picadas",
           "Cerejas e folhas de hortelã para decorar"
        ],
        preparo:"Bata a ricota com o iogurte e o adoçante, misture as frutas e o chocolate. Esfarele aos biscoitos e misture com as amêndoas. Despeje a metade dessa mistura em uma fôrma desmontável de 22cm de diâmetro, forrada com papel filme. Aperte bem com uma colher. Cubra com creme de ricota. Alise bem e cubra com o restante da mistura de biscoito e amêndoas. Conserve no freezer por 12 horas. Tire a cascata da fôrma, retire o papel filme e decore com cerejas e folhas de hortelã."
     },
     {
        id:24,
        titulo:"Christmas Cake",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Christmas-Cake.jpg",
        ingredientes:[
           "30g de fermento biológico",
           "1 colher (café) de sal",
           "400g de farinha de trigo aprox.",
           "1 colher (sopa) de raspas de casca de laranja",
           "1 colher (sopa) de raspas de limão",
           "150ml de óleo de canola",
           "150ml de água morna",
           "Corante vegetal amarelo",
           "2 colheres (sopa) de adoçante para forno r fogão",
           "1 colher (sopa) de uvas passas sem sementes",
           "1 colher (sopa) de nozes picadas",
           "½ clara de ovo",
           "2 colheres (sopa) de granola para decorar"
        ],
        preparo:"Bata o óleo com o adoçante, a água e as raspas de laranja e limão. Em uma vasilha, misture o fermento com o sal e a farinha; abra uma coroa no centro, junte a preparação anterior e misture bem. Leve a massa para uma superfície enfarinhada, amasse até obter uma massa homogênea e macia. Deixe a massa descansar até dobrar de volume. Estenda a massa em um retângulo, salpique as nozes e as passas. Modele uma rosca e coloque em uma fôrma de furo central, untada com um fio de óleo de canola. Deixe repousar por 30 minutos. Pincele com a clara ligeiramente batida, com 3 ou 4 gotas de corante vegetal amarelo, e decore com granola. Asse em forno pré aquecido por aproximadamente 40 minutos. Retire do forno e deixe repousar 10 minutos sobre uma grade, para depois desenformar."
     },
     {
        id:25,
        titulo:"Cupcake de morango",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Cupcake-de-morango.jpg",
        ingredientes:[
           "Massa:",
           "2 xícaras (chá) de farinha de trigo",
           "1 colher (sopa) de fermento em pó",
           "1/2 xícara (chá) de adoçante dietético em pó, próprio para forno e fogão",
           "2 ovos",
           "1 pote de iogurte desnatado (200 g)",
           "2 colheres (sopa) de óleo de canola",
           "1/2 xícara (chá) de morangos picados",
           "Cobertura:",
           "1 xícara (chá) de leite desnatado",
           "1 colher (sopa) de amido de milho",
           "1/2 xícara (chá) de geleia de morango",
           "7 morangos médios para decorar"
        ],
        preparo:"Massa: Misture a farinha de trigo, o fermento e o adoçante em pó. Adicione os ovos ligeiramente batidos, o iogurte e o óleo. Acrescente os morangos picados. Reserve. Coloque as forminhas de papel dentro de forminhas de alumínio e distribua a massa com a ajuda de uma colher de sopa. Asse em forno médio (180 ºC), preaquecido, por cerca de 20 minutos ou até começar a dourar. Retire e espere amornar. Cobertura: Leve o leite e o amido ao fogo até engrossar. Adicione a geleia, mexa, retire do fogo e deixe esfriar. Coloque um pouco do creme por cima de cada bolinho e decore com uma metade de morango."
     },
     {
        id:26,
        titulo:"Enrolado de chocolate",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Enrolado-de-chocolate.jpg",
        ingredientes:[
           "3 claras",
           "2 colheres (sopa) de adoçante em pó, próprio para forno e fogão",
           "2 colheres (sopa) de cacau sem açúcar",
           "1 colher (sopa) de leite em pó desnatado",
           "1 colher (sopa) farinha de trigo",
           "1 pitada de sal",
           "Recheio:",
           "1 lata de abacaxi em calda dietético",
           "2 colheres (sopa) de adoçante em pó",
           "½ xícara (chá) de geléia de cerejas diet",
           "150g de queijo branco desnatado"
        ],
        preparo:"Coloque as claras em uma tigela, junte a pitada de sal e bata com batedeira e sal e bata com a batedeira em velocidade alta. Quando formar uma espuma, incorpore o adoçante e continue batendo até obter um merengue firme. Misture em uma tigela os ingredientes secos (cacau, leite em pó e farinha), peneire-os 2 vezes para que o enrolado fique esponjoso. Misture á preparação de claras e mexa com um batedor de arame, realizando movimentos suaves, envolvendo delicadamente. Forre uma assadeira média com papel manteiga, unte-a com óleo vegetal e despeje a massa, espalhando-a bem com uma espátula. Leve ao forno quente durante 8 minutos. Desenforme sobre um pano de copa polvilhado com adoçante. Tire o papel com o auxilio de uma faca. Bata o queijo branco com o adoçante, junte 4 fatias de abacaxi picadas e escorridas. Corte as extremidades da massa para que não se quebre ao enrolar. Passe uma camada de geléia de cerejas, coloque o creme de abacaxi em um extremo, espalhando bem. Enrole com a ajuda de um pano e pressione levemente com as mãos para que o recheio se distribua bem. Transporte o enrolado para uma travessa. Antes de servir, decore-o polvilhando toda a superfície com adoçante e canela em pó."
     },
     {
        id:27,
        titulo:"Manjar dos deuses",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Manjar-dos-deuses.jpg",
        ingredientes:[
           "Manjar:",
           "4 xícaras (chá) de leite desnatado",
           "1 colher (sopa) de amido de milho",
           "100 g de farinha de amêndoas",
           "1 colher (chá) de essência de amêndoas",
           "4 colheres (sopa) de adoçante dietético em pó, próprio para forno e fogão",
           "2 envelopes de gelatina em pó sem sabor",
           "Coulis de maracujá:",
           "1/2 xícara (chá) de suco de maracujá",
           "1 xícara (chá) de água",
           "2 colheres (chá) de amido de milho",
           "6 colheres (sopa) de adoçante dietético em pó, próprio para forno e fogão",
           "Sementes de maracujá para enfeitar (opcional)"
        ],
        preparo:"Misture o leite, o amido de milho, a farinha de amêndoas, a essência e o adoçante. Leve ao fogo para engrossar ligeiramente. Hidrate a gelatina em 4 colheres (sopa) de água fria e acrescente à mistura, mexendo até que fique bem dissolvido. Coloque em uma fôrma de pudim e leve à geladeira. Coulis de maracujá: Misture os ingredientes e leve ao fogo baixo por cerca de 10 minutos. Desenforme o manjar e sirva com a calda. Se quiser, enfeite com as sementes de maracujá."
     },
     {
        id:28,
        titulo:"Pavê de Sorvete com Brownie",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Pave-de-Sorvete-com-Brownie.jpg",
        ingredientes:[
           "1 litro de sorvete dietético de creme",
           "2 ovos",
           "2 claras",
           "4 colheres (sopa) de adoçante dietético em pó, próprio para forno e fogão",
           "2 colheres (sopa) de margarina cremosa sem sal",
           "1 colher (chá) de essência de baunilha",
           "1 xícara (chá) de farinha de trigo",
           "2 colheres (sopa) de cacau em pó",
           "2 colheres (chá) de fermento em pó",
           "50g de castanha-de-cajú picada",
           "Calda:",
           "½ xícara (chá) de cacau em pó",
           "½ xícara (chá) de leite desnatado",
           "1 colher (chá) de amido de milho",
           "4 colheres (sopa) de adoçante dietético em pó, próprio para forno e fogão"
        ],
        preparo:"Brownie: Bata os ovos e a clara na batedeira e junte o adoçante. Acrescente a margarina e a baunilha e bata mais um pouco. Adicione a farinha de trigo, o cacau e o fermento e retire. Acrescente as castanhas e coloque em uma assadeira retangular pequena. Asse em forno médio (180°C), preaquecido, por cerca de 30 minutos ou até colocando um palito ele saia limpo. Calda: Misture os ingredientes e leve ao fogo para engrossar. Montagem: Corte o bolo ao meio, no sentido transversal. Coloque uma das partes em um refratário e sobre ela o sorvete de creme. Cubra com a outra metade e regue com a calda de chocolate. Feche o refratário com uma tampa ou papel-filme e deixe no freezer até na hora de servir."
     },
     {
        id:29,
        titulo:"Salada de frutas ao forno com creme de pêssego",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Salada-de-frutas-ao-forno-com-creme-de-pessego.jpg",
        ingredientes:[
           "1 xícara (chá) de pêssegos em calda dietética",
           "1 xícara (chá) da calda do pêssego",
           "2 bananas cortadas em rodelas",
           "1 manga cortada em cubos",
           "1 xícara (chá) de morangos cortados em fatias"
        ],
        preparo:"Bata no liquidificador o pêssego com a calda. Espalhe as frutas em um refratário untado com margarina e cubra com o creme de pêssego. Leve ao forno médio (180 °C), preaquecido, por cerca de 20 minutos. Retire e sirva quente."
     },
     {
        id:30,
        titulo:"Sobremesa: Brownie de Chocolate com Aveia",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Sobremesa-%E2%80%93-Brownie-de-Chocolate-com-Aveia.jpg",
        ingredientes:[
           "150 g de chocolate meio amargo picado",
           "1/2 xícara (chá) de margarina sem sal (60 g)",
           "2 ovos",
           "1 xícara (chá) de açúcar ou quantidade equivalente de adoçante para forno e fogão",
           "1 xícara (chá) de aveia em flocos finos (95 g)",
           "1/2 xícara (chá) de nozes picadas (35 g)",
           "Margarina e farinha para untar e enfarinhar"
        ],
        preparo:"Derreta o chocolate em banho-maria junto com a margarina e reserve. Em uma tigela, misture os ovos com o açúcar ou o adoçante até formar um creme. Acrescente o chocolate derretido, a aveia e as nozes picadas. Despeje a massa em uma assadeira retangular (30 cm x 20 cm), untada e enfarinhada. Leve ao forno preaquecido (180°C) e asse por aproximadamente 35 minutos, ou até que, ao espetar um palito na massa, ele saia limpo e úmido. Sugestão: servir com sorvete diet de creme ou baunilha."
     },
     {
        id:31,
        titulo:"Torta de mousse de maracujá",
        imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Torta-de-mousse-de-maracuja.jpg",
        ingredientes:[
           "Base:",
           "3 colheres (sopa) de margarina cremosa sem sal",
           "1 colher (sopa) de adoçante dietético em pó, próprio para forno e fogão",
           "1 colher (café) de essência de baunilha",
           "1/2 xícara (chá) de farinha de trigo integral",
           "1/4 de xícara (chá) de farinha de trigo",
           "2 colheres (sopa) de leite desnatado",
           "Recheio:",
           "1 xícara (chá) de leite desnatado",
           "1 colher (sopa) rasa de amido de milho",
           "1 envelope de gelatina em pó incolor sem sabor",
           "4 colheres (sopa) de água",
           "1/2 xícara (chá) de creme de leite light",
           "1/2 xícara (chá) de suco de maracujá concentrado",
           "2 claras",
           "4 colheres (sopa) de adoçante em pó, próprio para forno e fogão",
           "Calda:",
           "1/2 xícara (chá) de suco de maracujá concentrado",
           "1 xícara (chá) de água",
           "2 colheres (chá) de amido de milho",
           "4 colheres (sopa) de adoçante dietético em pó, próprio para forno e fogão"
        ],
        preparo:"Massa: Misture os ingredientes da massa e forre apenas o fundo de uma forma de torta pequena. Asse em forno médio (180° C) até dourar. Reserve. Recheio: Misture o leite e o amido de milho e leve ao fogo para engrossar. Dissolva a gelatina na água fria, mexa bem e adicione ao creme, mexendo bem para derreter. Acrescente o creme de leite e retire do fogo. Adicione o suco de maracujá e as claras batidas em neve com o adoçante. Coloque o recheio sobre a massa e leve à geladeira para firmar. Calda: Misture os ingredientes e leve ao fogo para engrossar. Depois de frio, decore a torta. Dica: Se quiser, prepare a receita com o maracujá azedo fresco. Retire a polpa 2 maracujás e bata no liquidificador, na tecla pulsar, com 1 xícara (chá) de água. Guarde as sementes para enfeitar."
     },
     {
      id:32,
      titulo:"Nhoque ao molho mediterrâneo",
      imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/nhoque-ao-molho-1.jpg",
      ingredientes:[
         "Massa:",
         "4 xícaras (chá) de mandioquinha cozida e amassada",
         "4 claras",
         "2 colheres (sopa) de margarina cremosa sem sal",
         "2 colheres (café) de sal",
         "1 xícara (chá) de farinha de trigo, aproximadamente",
         "Molho:",
         "1 colher (sopa) de azeite de oliva",
         "2 dentes de alho amassados",
         "1 cebola picada",
         "1 berinjela cortada em tiras",
         "1 abobrinha cortada em tiras",
         "4 tomates sem pele e sem sementes picados",
         "1/2 xícara (chá) de água",
         "1/2 xícara (chá) de purê de tomate",
         "1 colher (café) de sal",
         "2 colheres (sopa) de queijo parmesão light ralado",
         "Manjericão fresco a gosto (opcional)"
      ],
      preparo:"Massa: Misture a mandioquinha, as claras, a margarina e o sal. Aos poucos, adicione a farinha até obter uma massa firme. Faça rolinhos com a massa e corte-os em pedaços ou bolinhas. Coloque uma panela grande com 4 litros de água no fogo e quando ferver, adicione os nhoques, aos poucos, até que subam à superfície. Coloque em uma travessa e reserve. Molho: Aqueça o azeite em uma panela antiaderente e refogue o alho e a cebola até dourarem. Acrescente a berinjela, a abobrinha, os tomates, a água, o purê de tomate e o sal. Deixe apurar bem. Cubra os nhoques com o molho e polvilhe o queijo. Leve ao forno apenas para aquecer. Se quiser, decore com manjericão."
   },
   {
      id:33,
      titulo:"Ravióli de cúrcuma com alho-poró",
      imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/ravioli-de-curcuma-1.jpg",
      ingredientes:[
         "Massa:",
         "2 xícaras (chá) de farinha de trigo",
         "2 ovos",
         "1 colher (sopa) de azeite de oliva",
         "1 colher (café) de sal",
         "1 colher (chá) de cúrcuma (açafrão-de-raiz)",
         "50 g de queijo de minas light cortado em cubos",
         "Molho:",
         "2 colheres (sopa) de azeite de oliva",
         "1 alho-poró cortado em fatias finas",
         "4 folhas de manjericão fresco",
         "8 azeitonas pretas grandes"
      ],
      preparo:"Massa: Coloque todos os ingredientes em um processador até obter uma massa firme. Deixe descansar por 15 minutos. Em uma mesa enfarinhada, abra a mistura com um rolo de massa. Corte rodelas de 6 cm e coloque um cubo de queijo no meio. Feche como se fosse um pastel. Cozinhe em panela grande com água abundante. Escorra e coloque em um refratário. Molho: Aqueça o azeite e refogue o alho-poró em fogo baixo até amaciar. Junte o manjericão, mexa um pouco e adicione os raviólis e as azeitonas. Misture e sirva decorado com folhas de manjericão."
   },
   {
      id:34,
      titulo:"Risoto do mar",
      imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/risoto-do-mar-1.jpg",
      ingredientes:[
         "1 colher (sopa) de azeite de oliva",
         "200 g de filé de badejo cortado em tiras",
         "1 cebola pequena ralada",
         "1/2 xícara (chá) de arroz integral",
         "1/2 xícara (chá) de vinho branco",
         "2 xícaras (chá) de caldo de galinha (0% gordura)",
         "1/2 xícara (chá) de creme de leite light",
         "1 xícara (chá) de brócolis cozido e picado",
         "1 colher (chá) de açafrão em pó",
         "1 colher (sopa) de queijo parmesão ralado light"
      ],
      preparo:"Aqueça o azeite em uma panela antiaderente e doure as tiras de peixe. Retire e reserve. Na mesma panela, refogue a cebola. Acrescente o arroz, o vinho e metade do caldo de galinha e deixe ferver. Diminua o fogo e cozinhe o arroz regando com o restante do caldo de galinha até que o líquido reduza e o arroz fique macio. Adicione o creme de leite, o peixe, o brócolis e o açafrão e misture. Desligue o fogo, junte o parmesão e sirva em seguida."
   },
   {
      id:35,
      titulo:"Rondellis de Nozes",
      imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Rondellis-de-Nozes.jpg",
      ingredientes:[
         "500g de massa fresca para lasanha",
         "1 ricota passada pela peneira (400g)",
         "½ xícara (chá) de uvas passas brancas sem sementes",
         "½ xícara (chá) de nozes picadas",
         "2 colheres (sopa) de azeite de oliva",
         "½ lata de creme de leite light",
         "Sal, o necessário",
         "Molho:",
         "1 colher (sobremesa) de creme vegetal",
         "1 tablete de caldo de galinha",
         "500ml de leite desnatado",
         "1 colher (sopa) de amido de milho",
         "1 copo de requeijão light"
      ],
      preparo:"Em uma vasilha, misture a ricota, as uvas passas, as nozes e o creme de leite, tempere com azeite e sal. Reserve. Em uma superfície, estenda a massa, espalhe o recheio e enrole como rocamboles. Embrulhe os rolinhos em papel alumínio e leve á geladeira por no mínimo 1 hora. Prepare o molho: Em uma panela derreta o creme vegetal, desmanche o tablete de caldo de galinha e acrescente o leite, o amido de milho e o requeijão, previamente batidos no liquidificador. Mexa constantemente em fogo brando até engrossar. Retire os rondelis da geladeira, desembrulhe, corte em fatias regulares e acomode-os em um refratário. Derrame o molho sobre eles e leve ao forno pré-aquecido a 200°C por aproximadamente 15 minutos."
   },
   {
      id:36,
      titulo:"Bacalhau ao crème",
      imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Bacalhau-ao-creme.jpg",
      ingredientes:[
         "1kg de postas de bacalhau (já dessalgado)",
         "6 dentes de alho em lâminas",
         "3 colheres (sopa) de azeite de oliva",
         "100g de cogumelos frescos fatiados",
         "50g de queijo ralado",
         "Sal a gosto",
         "2 colheres (sopa) de salsinha",
         "Purê:",
         "500g de batatas cozidas e amassadas",
         "1 xícara (chá) de leite desnatado",
         "1 colher (sopa) de azeite de oliva",
         "Sal a gosto",
         "Creme:",
         "1 colher (sopa) de manteiga",
         "2 colheres (sopa) de fécula de batata",
         "500ml de leite desnatado",
         "1 lata de creme de leite light",
         "1 pitada de noz moscada",
         "Sal a gosto"
      ],
      preparo:"Purê: Passe as batatas pelo espremedor, junte o azeite, o leite quente e tempere com sal. Reserve. Creme: Em uma panela, derreta a manteiga, junte a fécula diluída no leite, mexendo sempre para não formar grumos. Tempere com sal e noz moscada. Assim que engrossar, acrescente o creme de leite light, mexa bem até ficar homogêneo e desligue o fogo. Em uma frigideira grande, aqueça o azeite, doure as lâminas de alho, junte os cogumelos e refogue por 5 minutos. Acomode as postas de bacalhau, tampe e deixe cozinhar por 3 minutos de cada lado. Tempere com sal e salpique salsinha. Montagem: Em um refratário, coloque o purê em todo o fundo, sobre ele o bacalhau e os cogumelos. Despeje o creme, polvilhe queijo ralado e leve ao forno pré-aquecido por 20 minutos para gratinar."
   },
   {
      id:37,
      titulo:"Filé de peixe com crosta de queijo",
      imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/File-de-peixe-com-crosta-de-queijo.jpg",
      ingredientes:[
         "2 filés de badejo, grandes (aprox. 1kg)",
         "Suco de limão e sal a gosto",
         "3 colheres (sopa) de creme vegetal",
         "1 xícara (chá) de cogumelos picados",
         "½ xícara (chá) de cebolinha verde picada",
         "200g de camarões limpos e picados",
         "½ xícara (chá) de salsinha picada",
         "2 colheres (sopa) de maionese light",
         "3 colheres (sopa) de farinha de rosca",
         "2 colheres (sopa) de queijo ralado",
         "3 colheres (sopa) de farinha de rosca para polvilhar"
      ],
      preparo:"Tempere os filés de peixe com suco de limão e sal. Forre uma assadeira com papel alumínio untado. Coloque um filé de peixe. Aqueça o creme vegetal numa panela, frite os cogumelos e a cebolinha por 5 minutos. Acrescente os camarões e frite ate ficarem rosados. Retire do fogo. Junte á salsa, a maionese e a farinha de rosca. Espalhe sobre um filé. Cubra com o outro filé. Passe creme vegetal por cima. Polvilhe com o queijo ralado e a farinha de rosca. Coloque em forno médio (180°C) por 30 minutos até que esteja dourado."
   },
   {
      id:38,
      titulo:"Salmão com molho de manga",
      imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Salmao-com-molho-de-manga.jpg",
      ingredientes:[
         "1 kg de file de salmão (em peça)",
         "2 dentes de alho amassados",
         "1 colher (chá) de sal",
         "1/2 xícara (chá) de vinho branco",
         "Molho:",
         "2 colheres (sopa) de molho de soja",
         "1 colher (sopa) de gengibre ralado",
         "1 rama de canela",
         "1 aniz estrelado",
         "1 colher (sopa) de vinagre de arroz",
         "1 manga picada"
      ],
      preparo:"Tempere o peixe com o alho, o sal e o vinho e coloque em uma assadeira. Leve ao forno por cerca de 30 minutos. Molho: Coloque os ingredientes em uma panela e leve ao fogo por cerca de 10 minutos. Retire as especiarias e bata no liquidificador. Montagem: Retire o peixe do forno e sirva com o molho de manga. Enfeite com fatias de manga e sirva na hora."
   },
   {
      id:39,
      titulo:"Salpicão de frutos do mar",
      imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Salpicao-de-frutos-do-mar.jpg",
      ingredientes:[
         "400g de camarões médios cozidos",
         "100g de lulas em anéis cozidas",
         "1 xícara (chá) de salsão picado",
         "1 xícara (chá) de cogumelos em lâminas",
         "1 pimentão vermelho em tirinhas",
         "½ xícara (chá) de nozes picadas",
         "Molho:",
         "¼ xícara (chá) de creme de leite light",
         "¼ xícara (chá) de maionese light",
         "1 colher (chá) de molho inglês",
         "Suco coado de 1 limão",
         "Sal a gosto"
      ],
      preparo:"Em uma vasilha, misture todos os ingredientes. Bata os ingredientes do molho no liquidificador e envolva toda a salada. Sirva com folhas de alface sobre batata palha."
   },
   {
      id:40,
      titulo:"Salada Ano Novo",
      imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Salada-Ano-Novo.jpg",
      ingredientes:[
         "250g de lentilhas cozidas em água e sal",
         "20 tomates cerejas",
         "1 xícara (chá) de cebola roxa picada",
         "½ xícara (chá) de rabanetes picados",
         "½ xícara (chá) de azeitonas pretas",
         "¼ xícara (chá) de azeite",
         "1 pimentão amarelo picado",
         "2 colheres (sopa) de suco coado de limão",
         "Sal e pimenta moída a gosto",
         "250g de queijo fresco light, cortado em cubinhos"
      ],
      preparo:"Escorra a lentilha e coloque-a em uma saladeira. Arrume os tomates, a cebola, os rabanetes, a salsinha, as azeitonas o pimentão e o queijo. Misture o azeite com o suco de limão, tempere com sal e pimenta e regue a salada."
   },
   {
      id:41,
      titulo:"Salada de Cevadinha",
      imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Salada-de-Cevadinha.jpg",
      ingredientes:[
         "2 xícaras (chá) de cevadinha cozida",
         "½ xícara (chá) de amêndoas em lascas",
         "1/3 xícara (chá) de damasco picado",
         "1/3 xícara (chá) de ameixa preta picada",
         "½ xícara (chá) de salsa picada",
         "1 colher (sopa) de tomilho fresco",
         "1 colher (café) de sal",
         "Suco de 1 limão",
         "1 colher (sopa) de azeite de oliva"
      ],
      preparo:"Em uma tigela, misture a cevadinha, as amêndoas, o damasco, a ameixa e a salsa. Tempere com o tomilho, o sal, o suco de limão e o azeite. Deixe na geladeira por 2 horas para tomar gosto."
   },
   {
      id:42,
      titulo:"Salada Requintada",
      imagem:"https://diabetes.org.br/wp-content/uploads/2021/06/Salada-Requintada-1.jpg",
      ingredientes:[
         "1 pé de alface americana pequeno lavado",
         "1 maço pequeno de rúcula lavado",
         "100 g de peito de peru defumado em tiras",
         "100 g de queijo minas em tiras",
         "1 xícara (chá) de manga em fatias",
         "1 xícara (chá) de palmito em rodelas",
         "Molho:",
         "4 colheres (sopa) de cream cheese light",
         "1 colher (chá) de mostarda",
         "4 colheres (sopa) de vinho branco"
      ],
      preparo:"Arrume as folhas em uma saladeira e distribua o restante dos ingredientes sobre as folhas. Molho: Bata o cream cheese, a mostarda e o vinho no liquidificador. Se necessário, adicione 1 ou 2 colheres (sopa) de água potável para ficar um molho leve. Regue a salada na hora de servir."
   }
]

function likeStarter(){
    let like = localStorage.getItem("like");
    if(like == null){
       localStorage.setItem("like", "0,");
    }
}

function fillRecipeList(){
    let likeList = localStorage.getItem("like").split(",");
    for (let index in likeList){
        let id = likeList[index]
        if (id !== "0" && id !== ''){
            let item = findItem(id);
            fillRecipeCard(item);
        }
    }
}

function fillRecipeCard(item){
    let featuredRecipes = document.getElementsByClassName("featured-recipes")[0]
    let div = document.createElement("div");
    div.className = "recipe-card";
    let img = document.createElement("img");
    img.src = item.imagem
    img.alt = item.imagem
    div.appendChild(img);
    let h2 = document.createElement("h2");
    h2.innerHTML = item.titulo
    div.appendChild(h2);
    let button = document.createElement("button");
    button.className = "dislike-button";
    button.innerHTML = "Descurtir";
    button.id = item.id
    button.addEventListener("click", () => dislike(item.id))
    div.appendChild(button);
    let a = document.createElement("a");
    a.className = "view-recipe-button";
    a.innerHTML = "Ver receita";
    a.href = "receitas-detalhe.html?id=" + item.id
    a.style = "margin-left: 5px"
    div.appendChild(a);
    featuredRecipes.appendChild(div);
}

function findItem(id){
    for(let index in recipeList){
        item = recipeList[index]
        if (id==item["id"]){
            return item
        }
    }
}

function like(id){
    let curtidas = localStorage.getItem("like");
    curtidas = curtidas.concat(id,",")
    localStorage.setItem("like", curtidas);
    document.getElementById(id).innerHTML = "Descurtir"
    document.getElementById(id).className = "dislike-button"
    var old_element = document.getElementById(id);
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
    document.getElementById(id).addEventListener ("click", () => dislike(id))
}
  
function dislike(id){
    let curtidas = localStorage.getItem("like");
    var substituto = ',' + id + ','
    curtidas = curtidas.replaceAll(substituto,",")
    localStorage.setItem("like", curtidas);
    document.getElementById(id).innerHTML = "Curtir"
    document.getElementById(id).className = "like-button"
    var old_element = document.getElementById(id);
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
    document.getElementById(id).addEventListener ("click", () => like(id))
}

function search (){
   let text = document.getElementById("search-text").value.toUpperCase()
   let cards = document.getElementsByClassName("recipe-card")
   for (let index in cards){
       let card = cards[index]
       let title = card.getElementsByTagName("h2")[0].innerHTML.toUpperCase()
       if (title.indexOf(text) !== -1){
           card.style = ""
       }
       else {
           card.style = "display: none"
       }
   }
}

setTimeout( () => {
    likeStarter()
    fillRecipeList()
}, 100)

