# projeto-integrador-gantt

```mermaid
    gantt
    title Cronograma de atividades do projeto
    dateFormat  YYYY-MM-DD
    section Documentação 
    Idealização do Projeto      :a1, 2022-10-01, 15d
    Divisão de grupos de atividade   :a2, after a1  , 15d
    Levantamento de Literatura e pesquisa   :a3, after a1  , 15d
    
    
    section Grupo 2
    Idealização do Projeto      :a1, 2022-10-01, 30d
    Divisão de grupos de atividade   :a2, after a1  , 15d
    
    section Defesa
    Preparação dos slides :p1, after c3, 10d
    Ensaio da apresentação :p2, after c3, 7d
    Apresentação e entrega  :milestone, after p1, 1d
```
