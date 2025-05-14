/* Função para adicionar e remover borda */
function adicionarBorda(idElemento) {
    const elemento = document.getElementById(idElemento);

    elemento.addEventListener("mouseover", () => {
        elemento.style.border = "1px solid black";
        elemento.style.backgroundColor = "black"
    });

    elemento.addEventListener("mouseout", () => {
        elemento.style.border = "none";
        elemento.style.backgroundColor = "rgb(131, 185, 255)"
    });
}

/* Cachorro */
adicionarBorda("cachorro1");
adicionarBorda("cachorro2");
adicionarBorda("cachorro3");

/* Gato */
adicionarBorda("gato1");
adicionarBorda("gato2");
adicionarBorda("gato3");

/* Coelho */
adicionarBorda("coelho1");
adicionarBorda("coelho2");
adicionarBorda("coelho3");

/* Hamster */
adicionarBorda("hamster1");
adicionarBorda("hamster2");
adicionarBorda("hamster3");

/* Jiboia */
adicionarBorda("jiboia1");
adicionarBorda("jiboia2");
adicionarBorda("jiboia3");

/* Calopsita */
adicionarBorda("calopsita1");
adicionarBorda("calopsita2");
adicionarBorda("calopsita3");


function mostrarInformacoes(idElemento) {
    const elemento = document.getElementById(idElemento);

    elemento.addEventListener("click", () => {
        let informacao = "";

        switch (idElemento) {
            case "cachorro1":
                informacao = "Carlinhos Maia, 1 ano, muito amigável.";
                break;
            case "cachorro2":
                informacao = "Zé Felipe, 2 anos, adora brincar.";
                break;
            case "cachorro3":
                informacao = "Alemão, 3 anos, muito calmo.";
                break;

            case "gato1":
                informacao = "Tatá, 3 anos, muito curiosa.";
                break;
            case "gato2":
                informacao = "Walter, 2 meses, dorminhoco.";
                break;
            case "gato3":
                informacao = "Thór, 2 anos, gosta de caçar.";
                break;

            case "coelho1":
                informacao = "Haru, 4 meses, tímida";
                break;
            case "coelho2":
                informacao = "Alfredo, 9 meses, adora cenoura.";
                break;
            case "coelho3":
                informacao = "Roger, 4 meses, corre muito.";
                break;

            case "hamster1":
                informacao = "Demiurgus, 1 mês, muito pequeno.";
                break;
            case "hamster2":
                informacao = "Virgínia, 4 meses, dorminhoca.";
                break;
            case "hamster3":
                informacao = "Jerry, 10 meses, gosta de correr na roda.";
                break;

            case "jiboia1":
                informacao = "Letícia, 6 meses, bem quieta.";
                break;
            case "jiboia2":
                informacao = "Jana, 1 ano, gosta de escalar.";
                break;
            case "jiboia3":
                informacao = "Marcelo, 2 anos, come bastante.";
                break;

            case "calopsita1":
                informacao = "Juan Carlos, 7 meses, bem agressivo";
                break;
            case "calopsita2":
                informacao = "Anitta, 1 ano, canta muito.";
                break;
            case "calopsita3":
                informacao = "Bob, 1 ano e meio, voa o dia todo.";
                break;

            default:
                informacao = "Informações não disponíveis.";
        }

        alert(informacao);
    });
}

/* Cachorro */
mostrarInformacoes("cachorro1");
mostrarInformacoes("cachorro2");
mostrarInformacoes("cachorro3");

/* Gato */
mostrarInformacoes("gato1");
mostrarInformacoes("gato2");
mostrarInformacoes("gato3");

/* Coelho */
mostrarInformacoes("coelho1");
mostrarInformacoes("coelho2");
mostrarInformacoes("coelho3");

/* Hamster */
mostrarInformacoes("hamster1");
mostrarInformacoes("hamster2");
mostrarInformacoes("hamster3");

/* Jiboia */
mostrarInformacoes("jiboia1");
mostrarInformacoes("jiboia2");
mostrarInformacoes("jiboia3");

/* Calopsita */
mostrarInformacoes("calopsita1");
mostrarInformacoes("calopsita2");
mostrarInformacoes("calopsita3");

