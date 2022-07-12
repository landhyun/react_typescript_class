import { useParams } from "react-router-dom";

interface RouteParams {
    coinId: string;
}

function Coin() {
    // const { coinId } = useParams<{coinId:string}>();
    // interface를 선언하지 않고 상단 코드로 대체 가능
    const { coinId } = useParams<RouteParams>();
    return <h1>Coin:{coinId}</h1>;
}
export default Coin;