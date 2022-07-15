import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    padding: 0px 20px;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
    background-color: white;
    color: ${props => props.theme.bgColor};
    margin-bottom: 10px;
    border-radius: 15px;
    a {
        transition: color .2s ease-in;
        display: block;
        padding: 20px;
    }
    &:hover {
        a {
            color: ${props => props.theme.accentColor}
        }
    }
`;

const Title = styled.h1`
    color: ${props => props.theme.accentColor};
    font: 500;
    font-size: 48px;
`;

const coins = [
    {
    "id": "btc-bitcoin",
    "name": "Bitcoin",
    "symbol": "BTC",
    "rank": 1,
    "is_new": false,
    "is_active": true,
    "type": "coin"
}, {
    "id": "eth-ethereum",
    "name": "Ethereum",
    "symbol": "ETH",
    "rank": 2,
    "is_new": false,
    "is_active": true,
    "type": "coin"
}, {
    "id": "usdt-tether",
    "name": "Tether",
    "symbol": "USDT",
    "rank": 3,
    "is_new": false,
    "is_active": true,
    "type": "token"
}, {
    "id": "usdc-usd-coin",
    "name": "USD Coin",
    "symbol": "USDC",
    "rank": 4,
    "is_new": false,
    "is_active": true,
    "type": "token"
}, {
    "id": "bnb-binance-coin",
    "name": "Binance Coin",
    "symbol": "BNB",
    "rank": 5,
    "is_new": false,
    "is_active": true,
    "type": "coin"
}, {
    "id": "busd-binance-usd",
    "name": "Binance USD",
    "symbol": "BUSD",
    "rank": 6,
    "is_new": false,
    "is_active": true,
    "type": "token"
}, {
    "id": "xrp-xrp",
    "name": "XRP",
    "symbol": "XRP",
    "rank": 7,
    "is_new": false,
    "is_active": true,
    "type": "coin"
}, {
    "id": "ada-cardano",
    "name": "Cardano",
    "symbol": "ADA",
    "rank": 8,
    "is_new": false,
    "is_active": true,
    "type": "coin"
}, {
    "id": "sol-solana",
    "name": "Solana",
    "symbol": "SOL",
    "rank": 9,
    "is_new": false,
    "is_active": true,
    "type": "token"
}, {
    "id": "hex-hex",
    "name": "HEX",
    "symbol": "HEX",
    "rank": 10,
    "is_new": false,
    "is_active": true,
    "type": "token"
}, {
    "id": "doge-dogecoin",
    "name": "Dogecoin",
    "symbol": "DOGE",
    "rank": 11,
    "is_new": false,
    "is_active": true,
    "type": "coin"
}, {
    "id": "dot-polkadot",
    "name": "Polkadot",
    "symbol": "DOT",
    "rank": 12,
    "is_new": false,
    "is_active": true,
    "type": "coin"
}, {
    "id": "dai-dai",
    "name": "Dai",
    "symbol": "DAI",
    "rank": 13,
    "is_new": false,
    "is_active": true,
    "type": "token"
}, {
    "id": "shib-shiba-inu",
    "name": "Shiba Inu",
    "symbol": "SHIB",
    "rank": 14,
    "is_new": false,
    "is_active": true,
    "type": "token"
}, {
    "id": "trx-tron",
    "name": "TRON",
    "symbol": "TRX",
    "rank": 15,
    "is_new": false,
    "is_active": true,
    "type": "coin"
}, {
    "id": "matic-polygon",
    "name": "Polygon",
    "symbol": "MATIC",
    "rank": 16,
    "is_new": false,
    "is_active": true,
    "type": "token"
}, {
    "id": "avax-avalanche",
    "name": "Avalanche",
    "symbol": "AVAX",
    "rank": 17,
    "is_new": false,
    "is_active": true,
    "type": "coin"
}, {
    "id": "leo-leo-token",
    "name": "LEO Token",
    "symbol": "LEO",
    "rank": 18,
    "is_new": false,
    "is_active": true,
    "type": "token"
}, {
    "id": "wbtc-wrapped-bitcoin",
    "name": "Wrapped Bitcoin",
    "symbol": "WBTC",
    "rank": 19,
    "is_new": false,
    "is_active": true,
    "type": "token"
}, {
    "id": "steth-lido-staked-ether",
    "name": "Lido Staked Ether",
    "symbol": "STETH",
    "rank": 20,
    "is_new": false,
    "is_active": true,
    "type": "token"
}
]

function Coins() {
    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            <CoinList>
                {coins.map((coin) => <Coin key={coin.id}>
                    <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
                </Coin>)}
            </CoinList>
        </Container>
    )
}
export default Coins