const config = require("config");
const app = require("./config/express");

const port = config.get("port");

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
