const express = require("express")
const app = express()
const bodyP = require("body-parser")
const compiler = require("compilex")
const options = { stats: true }
const path = require("path");

compiler.init(options)
app.use(bodyP.json())
app.use(bodyP.urlencoded({extended:true}));
<<<<<<< HEAD
app.use("/codemirror", express.static("C:/Users/Govind/OneDrive/Documents/My projects/CodeEditor/codemirror"))
app.use("/public", express.static("C:/Users/Govind/OneDrive/Documents/My projects/CodeEditor/public"))
=======
app.use("/codemirror", express.static("C:/Users/toshiba/Documents/Final Code Editor/CodeEditor/codemirror"))
app.use("/public", express.static("C:/Users/toshiba/Documents/Final Code Editor/CodeEditor/public"))
>>>>>>> 2c75a3357c48e75c25b3b431b3c108208a6482f5

 

app.get("/", function (req, res) {
    compiler.flush(function () {
        console.log("deleted")
    })
<<<<<<< HEAD
    res.sendFile("C:/Users/Govind/OneDrive/Documents/My projects/CodeEditor/public/index.html")
=======
    res.sendFile("C:/Users/toshiba/Documents/Final Code Editor/CodeEditor/public/index.html")
>>>>>>> 2c75a3357c48e75c25b3b431b3c108208a6482f5
})

app.get("/frontend", function (req, res) {
    compiler.flush(function () {
        console.log("open file")
    })
    res.sendFile("C:/Users/Govind/OneDrive/Documents/My projects/CodeEditor/frontend.html")
})

app.get("/backend", function (req, res) {
 
    res.sendFile("C:/Users/Govind/OneDrive/Documents/My projects/CodeEditor/backend.html")
})

app.get("/backend", function (req, res) {
 
    res.sendFile("C:/Users/toshiba/Documents/Final Code Editor/CodeEditor/backend.html")
})

app.post("/compile", function (req, res) {
    var code = req.body.code
    var input = req.body.input
    var lang = req.body.lang
    try {

        if (lang == "Cpp") {
            if (!input) {
                var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
                compiler.compileCPP(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
            else {
                var envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } }; // (uses g++ command to compile )
                compiler.compileCPPWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
        }
        else if (lang == "Java") {
            if (!input) {
                var envData = { OS: "windows" };
                compiler.compileJava(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                })
            }
            else {
                //if windows  
                var envData = { OS: "windows" };
                //else
                compiler.compileJavaWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                        }
                    else {
                        res.send({ output: "error" })
                    }
                })
            }
        }
        else if (lang == "Python") {
            if (!input) {
                var envData = { OS: "windows" };
                compiler.compilePython(envData, code, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
            else {
                var envData = { OS: "windows" };
                compiler.compilePythonWithInput(envData, code, input, function (data) {
                    if (data.output) {
                        res.send(data);
                    }
                    else {
                        res.send({ output: "error" })
                    }
                });
            }
        }
    }
    catch (e) {
        console.log("error")
    }
})

app.listen(8000)