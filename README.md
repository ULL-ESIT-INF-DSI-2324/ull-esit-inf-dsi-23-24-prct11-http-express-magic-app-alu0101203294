# **Desarrollo de Sistemas Informáticos**

## Grado en Ingeniería Informática - Universidad de La Laguna

### Práctica 11 - Aplicación Express para coleccionistas de cartas Magic

##### José Miguel Díaz González


<p align="center">
    <a href="https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct10-fs-proc-sockets-magic-app-alu0101203294/actions/workflows/node.js.yml">
        <img alt="Test" src="https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct10-fs-proc-sockets-magic-app-alu0101203294/actions/workflows/node.js.yml/badge.svg">
    </a>
    <a href="https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2324_ull-esit-inf-dsi-23-24-prct10-fs-proc-sockets-magic-app-alu0101203294">
        <img alt="Sonar Cloud" src="https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2324_ull-esit-inf-dsi-23-24-prct10-fs-proc-sockets-magic-app-alu0101203294&metric=alert_status">
    </a>
    <a href="https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct11-http-express-magic-app-alu0101203294?branch=main">
        <img alt="Coverage Status" src="https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct11-http-express-magic-app-alu0101203294/badge.svg?branch=main">
    </a>
</p>




## Uso

Para usar la interfaz de línea de comandos, ejecutar:

### **En el servidor**
**Iniciar servidor**
```bash
node dist/cliente-servidor/servidor.js
```
----

### **En el cliente**
**Añadir carta:**
```bash
node dist/Magic/index.js add --user= <nombre_usuario> --id= <id_carta> --name= <nombre_carta> --manaCost= <costo_mana> --color= <color_carta> --lineType= <tipo_carta> --rarity= <rareza_carta> --rulesText= <texto_reglas> --marketPrice <precio_mercado>
```
**Actualizar carta:**
```bash
node dist/Magic/index.js update --user= <nombre_usuario> --id= <id_carta> --name= <nombre_carta> --manaCost= <costo_mana> --color= <color_carta> --lineType= <tipo_carta> --rarity= <rareza_carta> --rulesText= <texto_reglas> --marketPrice <precio_mercado>
```
**Eliminar carta**
```bash
node dist/Magic/index.js remove --user= <nombre_usuario> --id= <id_carta>
```
**Listar todas las cartas de un usuario**
```bash
node dist/Magic/index.js list --user= <nombre_usuario>
```
**Mostrar una carta de un usuario**
```bash
node dist/Magic/index.js read --user= <nombre_usuario> --id= <id_carta>
```



---

[Enlace al Guion](https://ull-esit-inf-dsi-2324.github.io/prct11-http-express-magic-app/)

[Enlace al Informe]()

---


