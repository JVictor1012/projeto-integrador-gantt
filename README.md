# projeto-integrador-gantt

```mermaid
    gantt
    title Cronograma de atividades do projeto
    dateFormat  YYYY-MM-DD
    section Documentação 
    Idealização do Projeto      :a1, 2022-10-01, 15d
    Divisão de grupos de atividade   :a2, after a1  , 15d
    Levantamento de Literatura e pesquisa   :a3, after a1  , 15d
    
    
    section Prototipação
    Criação do prototipo      :b1, 2022-11-01, 30d
  
    
    section Defesa
    Preparação dos slides :p1, 2023-02-01, 10d
    Ensaio da apresentação :p2, after b1, 7d
    Apresentação e entrega  :milestone, after p1, 1d
```
