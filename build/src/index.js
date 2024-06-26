"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000`));
//# sourceMappingURL=index.js.map