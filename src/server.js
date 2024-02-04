const app = require("./app");

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});

//o nodemon vai rodar esse arquivo!!
