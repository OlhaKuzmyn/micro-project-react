import {useLocation} from "react-router-dom";

const useQuery = () => new URLSearchParams(useLocation().search)


const useQueryParams = () => {

    const query = useQuery()
    const queryEntries = query.entries()
    let entriesList = []
    for (let entry of queryEntries as any) {
        entriesList.push(entry)
    }
    return Object.fromEntries(entriesList)
}
export {
    useQuery,
    useQueryParams
}