import {useLocation} from "react-router-dom";
import React from "react";

const useQuery = () => new URLSearchParams(useLocation().search)
// const useQuery = () =>  {
//     return React.useMemo(() => new URLSearchParams(useLocation().search), [useLocation().search])
// }

const useQueryParams = () => {
// const useQueryParams = (query: any) => {
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