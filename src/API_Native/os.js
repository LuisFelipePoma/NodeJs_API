// index.js (CommomJS) | index.mjs (ES Modules)
const os = require("node:os");

console.log("Nombre del Sistema Operativo", os.platform());
console.log("Version del Sistema Operativo", os.release());
console.log("Arquitectura", os.arch());
console.log("CPUs", os.cpus().length);
console.log("Memoria Libre", os.freemem() / 1024 / 1024 / 1024);
console.log("Memoria Total", os.totalmem() / 1024 / 1024 / 1024);
console.log("uptime", os.uptime() / 60 / 60);