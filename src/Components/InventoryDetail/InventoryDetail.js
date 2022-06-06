
import { Link, useParams } from 'react-router-dom';
import useInventoryDetail from '../../hooks/useInventoryDetail';


const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventory] = useInventoryDetail(inventoryId);

    return (
        <div>
            <h2>Product Name: {inventory.name}</h2>
            <div className='text-center'>
                <Link to={`/manage`}>
                    <button className='btn btn-primary'>ManageInventory</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryDetail;