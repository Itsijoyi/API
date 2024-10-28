const express = require("express")
const path = require("path")
const app = express();

app .use(express.static(path.join(__dirname, "public"))); //  Serve static files from the "public" directory
app.get ("/", (req, res) => { //   Serve the index.html file from the "public" directory
    res.sendFile(path.join(__dirname,"public/index.html")) //   Send the index.html file to the client
});
    const  port = 3000;
    app.listen(port, () => {
        console.log("Server is running on port 3000");
    });

