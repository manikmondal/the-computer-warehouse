import { useEffect, useState } from "react";

const useInventorys = () => {
    const [inventorys, setInventorys] = useState([]);

    useEffect(() => {
        fetch('https://dry-earth-68249.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventorys(data));
    }, []);
    return [inventorys, setInventorys]
}

export default useInventorys;