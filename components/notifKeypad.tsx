const Keypad: React.FC = () => {
    const handleClick = (number: number) => {
      console.log(`Clicked: ${number}`);
    };
  
    return (
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            key={num}
            className="p-4 bg-purple-500 text-white rounded-lg"
            onClick={() => handleClick(num)}
          >
            {num}
          </button>
        ))}
      </div>
    );
  };
  
  export default Keypad;
  