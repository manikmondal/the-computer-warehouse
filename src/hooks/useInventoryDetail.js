import { useEffect, useState } from "react";

const useInventoryDetail = inventoryId => {
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `https://dry-earth-68249.herokuapp.com/inventory/${inventoryId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [inventoryId]);
    return [inventory]
}

export default useInventoryDetail;