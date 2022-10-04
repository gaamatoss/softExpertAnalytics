# Desafio 2

- Utilizar a lib gráfica [Highcharts](https://www.highcharts.com) (versão grátis) para os gráficos que serão gerados
- Evitar utilizar muitas libs de terceiros, para deixar o código mais "puro" possível

API para buscar os dados: https://covid19api.com/

## Tela principal
- Listar em uma tabela os países do endpoint: https://api.covid19api.com/summary
	- Uma coluna com o nome do país (Country)
	- Uma coluna com a sigla do país (CountryCode)
	- Uma coluna com a bandeira do país (opcional)
		- Pode utilizar a API "https://countryflagsapi.com"	
	- Criar paginação (diferencial)
	- Criar um campo que filtra a tabela pelo nome/sigla do país (diferencial)
	- Cada linha da tabela deve ter um checkbox (uma coluna dedicada para o checkbox) que permite selecionar a linha		
- Fora da tabela, criar um botão "Visualizar/comparar"	
	- Ao clicar no botão, um redirecionamento para a tela de dados deve ocorrer
- A seguir um exemplo de como a tela pode ser estruturada:
![image](https://user-images.githubusercontent.com/47633508/185994034-1f9da64d-ecb8-4029-ba55-778d537f36da.png)
	
## Tela de Dados
- Criar uma listagem que mostra os países selecionados e seus dados (nome, bandeira, sigla...)
	- Renderizar um botão ao lado de cada item que redirecionará para a tela de Detalhamento do País (pode ser uma modal na mesma tela)
- Criar Cards/Containers que apresentarão através de gráficos (lib Highcharts) os dados dos países selecionados
- Criar um Card com o gráfico comparando os números totais de casos confirmados (TotalConfirmed) de cada país 
	- Caso 3 países estejam selecionados por exemplo, nesse Card deve existir um gráfico (fica a seu critério qual o tipo do gráfico) que apresenta as informações dos 3 países. 
	A informação de cada país deve estar representado em uma série nesse gráfico 
		- Exemplo: Em um gráfico de linhas, cada linha (série) representará os dados de um país
- Criar um Card com o gráfico comparando os números totais de mortes (TotalDeaths) de cada país
- A seguir um exemplo de como a tela pode ser estruturada:
![image](https://user-images.githubusercontent.com/47633508/185993816-1e8987b6-c7bb-440f-9893-b88489f5994f.png)

## Tela de Detalhamento do País
- Endpoint: https://api.covid19api.com/total/country/COUNTRY_CODE?from=2022-01-01T00:00:00Z&to=2022-12-31T23:59:59Z
- Fica a seu critério os valores definidos no from/to
- Renderizar uma tabela com os dados retornados do endpoint
	- Os dados devem estar ordenados por data (Date) de forma decrescente
- A tabela deve seguir a seguinte estrutura:
	- Uma coluna com a data (Date formatada no padrão brasileiro)
	- Uma coluna com o total de confirmados (Confirmed)
	- Uma coluna com o total de mortes (Deaths)
	- Uma coluna com o total de recuperados (Recovered)
	- Uma coluna com o total de ativos (Active)
