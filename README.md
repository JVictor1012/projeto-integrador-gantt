# projeto-integrador-gantt

```mermaid
    gantt
    title Cronograma de atividades do projeto
    dateFormat  YYYY-MM-DD
    section Grupo 1
    Idealização do Projeto      :a1, 2022-10-01, 30d
    Levantamento de literatura   :a2,after a1  , 20d
    Escrita da parte teórica  :a3,after a2, 7d
    section Grupo 2
    Idealização do Projeto      :a1, 2022-10-01, 30d
    Criação do protótipo      :c3,     after c2, 14d
    section Defesa
    Preparação dos slides :p1, after c3, 10d
    Ensaio da apresentação :p2, after c3, 7d
    Apresentação e entrega  :milestone, after p1, 1d
```
