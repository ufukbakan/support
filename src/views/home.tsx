import { resolve } from "path";
import { PageRequest } from "../routes";
import importCss from "../import-css";
const css = importCss('./home.css')

export default function Home(req: PageRequest) {
    return (
        <>
            <h1>Ufuk Bakan</h1>
            <p>{req.dictionary["support-desc"]}</p>
            <h2>{req.dictionary["binance-pay"]}</h2>
            <img src="/binanceQR-q100.png" alt="binance pay qr" height="200" />
        </>
    )
}

Home.meta = [css];