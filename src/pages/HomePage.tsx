import ItemsTable from 'components/ItemsTable';
import { itemAPI } from 'services/itemService';

const HomePage = () => {
    const { data: items, isLoading } = itemAPI.useFetchAllItemsQuery(0);

    return <>{items && <ItemsTable items={items} />}</>;
};

export default HomePage;
