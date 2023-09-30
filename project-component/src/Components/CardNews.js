class Cardnews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card___left");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card___right");
        

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        
        
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/foto-default.jpg";
        newsImage.alt = "Imagem da noticia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border: 1px solid black;
            width: 60%;
            box-shadow: 23px 19px 69px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 23px 19px 69px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 23px 19px 69px 0px rgba(0,0,0,0.75);
        }
        
        .card___left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card___left > span {
            font-weight: 400;
        }
        
        .card___left > a {
            margin-top: 15px;
            font-size: 25px;
            text-decoration: none;
            color: black;
            font-weight: bold;
        }
        
        .card___left > p {
            color: rgb(70, 70, 70);;
        }
        
        .hireImg {
            max-width: 100%;
            max-height: 100%;
            height: 100%;
            margin: 0;
        }
        `;

        return style;
    }
}

customElements.define('card-news', Cardnews);