const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('<h1>Server del mio blog</h1>')
})

const foods = [
    {
        title: "Ciambellone",
        content: "Un dolce soffice e profumato, perfetto per la colazione.",
        image: "/img/ciambellone.jpeg",
        tags: ["dolce", "forno", "tradizionale"]
    },
    {
        title: "Cracker alla barbabietola",
        content: "Cracker croccanti e colorati, ideali come snack o antipasto.",
        image: "/img/cracker_barbabietola.jpeg",
        tags: ["snack", "colorato", "vegetariano"]
    },
    {
        title: "Pane fritto dolce",
        content: "Una ricetta semplice e golosa, perfetta per riciclare il pane.",
        image: "/img/pane_fritto_dolce.jpeg",
        tags: ["dolce", "fritto", "ricette veloci"]
    },
    {
        title: "Pasta alla barbabietola",
        content: "Un primo piatto cremoso e dal colore vivace.",
        image: "/img/pasta_barbabietola.jpeg",
        tags: ["primo", "vegetariano", "cremoso"]
    },
    {
        title: "Torta paesana",
        content: "Dolce tipico lombardo, rustico e ricco di sapore.",
        image: "/img/torta_paesana.jpeg",
        tags: ["dolce", "tradizione", "regionale"]
    }
];


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})