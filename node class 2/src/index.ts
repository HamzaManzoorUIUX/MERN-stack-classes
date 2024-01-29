import express, { Express, Request, Response } from "express";
const app: Express = express();
const PORT: number | string = process.env.PORT || 5000
app.get("/", (req: Request, res: Response) => {
    console.log(req.params);
    
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});