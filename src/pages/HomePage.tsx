import ItemsTable from 'components/ItemsTable';
import { itemAPI } from 'services/itemService';

const HomePage = () => {
    const { data: items, isLoading } = itemAPI.useFetchAllItemsQuery(0);
    const arrayItems = items?.map((item, id) => {
        return { ...item, id };
    });

    return <>{arrayItems && <ItemsTable items={arrayItems} />}</>;
};

export default HomePage;
