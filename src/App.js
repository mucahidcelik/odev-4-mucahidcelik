import {CITIES} from "./utils/city-list";
import {useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_CITY_BY_ID} from "./queries";
import Content from "./components/Content";

function App() {
    const [city, setCity] = useState({
        "id": 307513,
        "name": "Kırşehir",
        "country": "TR",
        "coord": {
            "lon": 34.166672,
            "lat": 39.333328
        }
    });

    const {loading, error, data} = useQuery(GET_CITY_BY_ID, {
        variables: {
            id: [city.id.toString()]
        },
        fetchPolicy: "network-only"
    });

    return (
        <div className="App">
            <select selected={city.name} onChange={(e) => setCity(CITIES[e.target.value])}>
                {CITIES.map((city, index) => {
                    return <option value={index}>{city.name}</option>
                })}
            </select>
            {
                loading && <div>loading</div>
            }
            {
                error && <div>error: {error}</div>
            }
            {
                (!loading && !error) &&
                <Content data={data.getCityById[0]}/>
            }
        </div>
    );
}

export default App;
