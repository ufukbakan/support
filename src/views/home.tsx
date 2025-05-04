import dictionary from "../dictionary";
import importCss from "../import-css";
import { PageRequest } from "../routes";
const css = importCss('./home.css')

export default function Home(req: PageRequest) {
    const supportedLangs = Object.keys(dictionary);
    return (
        <>
            <nav>
                <div id="lang-selector">
                    <img id="globe" src="/support/globe.svg" />
                    <div id="languages">
                        {supportedLangs.map(lang => <a href={`/support/${lang}`}>{lang}</a>)}
                    </div>
                </div>
            </nav>
            <h1>Ufuk Bakan</h1>
            <p>{req.dictionary["support-desc"]}</p>
            <div id="support-methods">
                <div class="support-method">
                    <h2>{req.dictionary["binance-pay"]}</h2>
                    <img src="/support/binanceQR-q100.png" alt="binance pay qr" height="200" />
                </div>

                <div class="support-method">
                    <h2>BTC</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>BTC</h3>
                            <p>1PkQkMH9GBPFufFAPgqR6J8GZAFhvYkovy</p>
                        </div>
                        <div class="tab">
                            <h3>SEGWITBTC</h3>
                            <p>bc1qddvtjktrl2egcfgpdrh05ghkmgmdnw3ed8l5lr</p>
                        </div>
                        <div class="tab">
                            <h3>BEP20, BBTC ERC20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>

                <div class="support-method">
                    <h2>USDT</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>ERC20, BEP20, MATIC, AVAXC</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                        <div class="tab">
                            <h3>TRC20</h3>
                            <p>TFaQz17bzQSDxkB4LUsHifkC1LCjf2aLZR</p>
                        </div>
                        <div class="tab">
                            <h3>SOL</h3>
                            <p>G8RdNjyyjiVoM2aMXTwzAVT9QmTQpA2Ju7CDJuHexcXB</p>
                        </div>
                    </div>
                </div>

                <div class="support-method">
                    <h2>USDC</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>ERC20, BEP20, MATIC</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                        <div class="tab">
                            <h3>SOL</h3>
                            <p>G8RdNjyyjiVoM2aMXTwzAVT9QmTQpA2Ju7CDJuHexcXB</p>
                        </div>
                        <div class="tab">
                            <h3>XLM</h3>
                            <p>GABFQIK63R2NETJM7T673EAMZN4RJLLGP3OFUEJU5SZVTGWUKULZJNL6</p>
                            <p><u>MEMO</u></p>
                            <p>377101926</p>
                        </div>
                    </div>
                </div>

                <div class="support-method">
                    <h2>EURI</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>ERC20, BEP20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>

                <div class="support-method">
                    <h2>XAUT</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>ERC20</h3>
                            <p>0xa5766c92123e268898f2d7605bfbc577d7fbbe4a</p>
                        </div>
                    </div>
                </div>

                <div class="support-method">
                    <h2>PAXG</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>ERC20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>

                <div class="support-method">
                    <h2>ETH</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>MANTA, ARBITRUM, OPTIMISM</h3>
                            <h3>ERC20, BASE, BEP20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>

                <div class="support-method">
                    <h2>BNB</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>BEP20, OPBNB, ERC20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>

                <div class="support-method">
                    <h2>ETC</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>ETC, BEP20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>

                <div class="support-method">
                    <h2>BCH</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>BCH</h3>
                            <p>1PkQkMH9GBPFufFAPgqR6J8GZAFhvYkovy</p>
                        </div>
                        <div class="tab">
                            <h3>ERC20, BEP20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>
                <div class="support-method">
                    <h2>LTC</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>LTC</h3>
                            <p>LSaK3NUf61yAfSiBEDEcqcDzGyoD7yQ5Ky</p>
                        </div>
                        <div class="tab">
                            <h3>BEP20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>
                <div class="support-method">
                    <h2>XRP</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>XRP</h3>
                            <p>rNxp4h8apvRis6mJf9Sh8C6iRxfrDWN7AV</p>
                            <u>Memo</u>
                            <p>462674295</p>
                        </div>
                        <div class="tab">
                            <h3>BEP20, ERC20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>
                <div class="support-method">
                    <h2>XLM</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>XLM</h3>
                            <p>GABFQIK63R2NETJM7T673EAMZN4RJLLGP3OFUEJU5SZVTGWUKULZJNL6</p>
                            <u>Memo</u>
                            <p>377101926</p>
                        </div>
                        <div class="tab">
                            <h3>BEP20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>
                <div class="support-method">
                    <h2>SOL</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>SOL</h3>
                            <p>G8RdNjyyjiVoM2aMXTwzAVT9QmTQpA2Ju7CDJuHexcXB</p>
                        </div>
                        <div class="tab">
                            <h3>BEP20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>
                <div class="support-method">
                    <h2>DOGE</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>DOGE</h3>
                            <p>DFojZeunw8D1oZZNdEyEjAvrcLSsYZeGiP</p>
                        </div>
                        <div class="tab">
                            <h3>BEP20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>
                <div class="support-method">
                    <h2>SHIB</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>ERC20, BEP20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>
                <div class="support-method">
                    <h2>TRX</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>TRC20</h3>
                            <p>TFaQz17bzQSDxkB4LUsHifkC1LCjf2aLZR</p>
                        </div>
                        <div class="tab">
                            <h3>BEP20, ERC20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>
                <div class="support-method">
                    <h2>BUSD</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>AVAXC, MATIC, OPTIMISM</h3>
                            <h3>BEP20, ERC20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                        <div class="tab">
                            <h3>TRX</h3>
                            <p>TFaQz17bzQSDxkB4LUsHifkC1LCjf2aLZR</p>
                        </div>
                    </div>
                </div>
                <div class="support-method">
                    <h2>USDP</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>ERC20, BEP20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>
                <div class="support-method">
                    <h2>TUSD</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>TRX</h3>
                            <p>TFaQz17bzQSDxkB4LUsHifkC1LCjf2aLZR</p>
                        </div>
                        <div class="tab">
                            <h3>ERC20, BEP20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>
                <div class="support-method">
                    <h2>FDUSD</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>SUI</h3>
                            <p>0xe32ac8c0483c7c436b143949a97a6fa57ca8cb6dc1e4c1f66b1e5de1d73c20e0</p>
                        </div>
                        <div class="tab">
                            <h3>SOL</h3>
                            <p>G8RdNjyyjiVoM2aMXTwzAVT9QmTQpA2Ju7CDJuHexcXB</p>
                        </div>
                        <div class="tab">
                            <h3>ERC20, BEP20, OPBNB</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>
                <div class="support-method">
                    <h2>MATIC</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>ERC20, BEP20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>
                <div class="support-method">
                    <h2>SUI</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>SUI</h3>
                            <p>0xe32ac8c0483c7c436b143949a97a6fa57ca8cb6dc1e4c1f66b1e5de1d73c20e0</p>
                        </div>
                    </div>
                </div>
                <div class="support-method">
                    <h2>AVAX</h2>
                    <div class="tabs">
                        <div class="tab">
                            <h3>AVAX</h3>
                            <p>X-avax1j2uc4w36wpcng9yj4wgpc7j4p58y58mmf0zc0c</p>
                        </div>
                        <div class="tab">
                            <h3>AVAXC, BEP20</h3>
                            <p>0x500d82dc4b7494615075373587daf78856c4dae8</p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

Home.meta = [css];