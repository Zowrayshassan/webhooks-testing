const express = require("express");
const { exec } = require("child_process");
const app = express();
app.use(express.json());

// Add root route to handle GitHub webhooks
app.post("/", (req, res) => {
  console.log("GitHub webhook triggered!");
  exec(
    "git pull && npm install && pm2 restart agripro",
    (err, stdout, stderr) => {
      if (err) console.error(err);
      console.log(stdout);
    }
  );
  res.send("Deploy triggered!");
});

app.listen(4000, () => console.log("Webhook listener running on port 4000"));
