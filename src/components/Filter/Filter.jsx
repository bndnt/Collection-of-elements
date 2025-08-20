export default function Filter({ value, onFilter }) {
  return (
    <div>
      <p>Search by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        // поточное значение инпута
      />
    </div>
  );
}
