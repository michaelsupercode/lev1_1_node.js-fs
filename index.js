const fs = require("fs");

// 1. Öffne die Datei blog1.txt
fs.open('blog1.txt', (err, data) => {
    if (err) {
        return console.error(err);
    }
    //console.log(data);
    //console.log("File opened!");
})

//blog1.txt inhalt ändern
fs.writeFile("./blog1.txt", "mein geänderter Text in der Datei blog1.txt", (err) => {
    if (err) { return }
})

//Erstelle eine neue Datei „blog2.txt“ und schreibe etwas in sie hinein
fs.writeFile("./blog2.txt", "mein content für die neue datei blog2.txt", (err) => {
    if (err) { return }
})

//Erstelle / lösche einen neuen Ordner „assets“
if (!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
        if (err) { return }
    })
} else {
    fs.rmdir("./assets", (err) => {
        if (err) { return }
    })
}

//Erstelle / lösche eine Datei namens „delete.txt“.
if (!fs.existsSync("./delete.txt")) {
    fs.writeFile("./delete.txt", "", (err) => {
        if (err) { return }
    })
} else {
    fs.unlink("./delete.txt", (err) => {
        if (err) { return }
    })
}

//Erstelle eine Datei namens „Hello.txt“ / rename
fs.writeFile("./hello.txt", "mein zugefügter Text in der Datei blog1.txt", (err) => {
    if (err) { return }
})
fs.rename("./hello.txt", "HelloWorld.txt", (err) => {
    if (err) { return }
})