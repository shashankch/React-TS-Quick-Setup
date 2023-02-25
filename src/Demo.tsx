import React from 'react';
import ReactDOM from 'react-dom';
interface Props {
  items: string[];
}
export const Demo = ({ items }: Props) => {
  const input = React.useRef<HTMLInputElement>(null);

  const [search, setSearch] = React.useState('');
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  React.useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);

  return (
    <React.Fragment>
      <input ref={input} type="search" value={search} onChange={handleSearchChange} />
      <div>
        {items.map((item) => (
          <div key={item} style={{ fontWeight: item === search ? 'bold' : undefined }}>
            {item}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
