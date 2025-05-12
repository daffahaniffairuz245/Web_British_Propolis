interface MenuCardProps {
    name: string;
    price: number;
    image: string;
    time: string;
    rating: number;
  }
  
  const MenuCard: React.FC<MenuCardProps> = ({ name, price, image, time, rating }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img src={image} alt={name} className="w-full h-32 object-cover rounded-lg" />
        <div className="mt-2">
          <p className="text-gray-600 text-sm">{time}</p>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-orange-500">Rp {price.toLocaleString()}</p>
          <div className="text-yellow-500">⭐ {rating}</div>
        </div>
      </div>
    );
  };
  
  export default MenuCard;
  