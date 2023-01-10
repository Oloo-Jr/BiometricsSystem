import Data from "../Components/Country";

export const Test = () => {
    return (
        <>
            <div>
                <select>
                    <option>...</option>
                    {Data.map((county) => <option key={county.name} value={county.value}>{county.county}</option>)}
                </select>
            </div>
            <div>
                <select>
                    <option>...</option>
                    {Data.map((constituency) => <option key={constituency.name} value={constituency.value}>{constituency.constituency}</option>)}
                </select>
            </div>
            <div>
                <select>
                    <option>...</option>
                    {Data.map((ward) => <option key={ward.name} value={ward.value}>{ward.ward}</option>)}
                </select>
            </div>
        </>
    )
}