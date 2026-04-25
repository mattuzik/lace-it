import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SneakersList } from '@/widgets/sneaker-list';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

const CATEGORY_TITLES: Record<string, string> = {
  mens: 'Мужские кроссовки',
  womens: 'Женские кроссовки',
  new: 'Новинки',
  sale: 'Распродажа'
}

const Catalog = () => {
  const { category } = useParams<{ category: string }>()
  
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearch = useDebounce(searchQuery, 500);

  const title = category ? CATEGORY_TITLES[category] : 'Каталог'

  const filters = {
    gender: (category == 'mens' || category == 'womens') ? category : undefined,
    isNew: category === 'new' ? true : undefined,
    isSale: category === 'sale' ? true : undefined,
    name: debouncedSearch.trim() || undefined,
  };

  return (
    <div>
      <SneakersList 
        title={searchQuery ? `Поиск по ${searchQuery}` : title} 
        params={
          filters
        }
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  )
}

export default Catalog