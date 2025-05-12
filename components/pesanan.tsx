interface PesananCardProps {
  image: string;
  name: string;
  quantity: number;
  price: number;
}

const PesananCard: React.FC<PesananCardProps> = ({ image, name, quantity, price }) => {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <img src={image} alt={name} className="w-12 h-12 object-cover rounded-md" />
      <div className="flex-1">
        <p className="font-semibold">{quantity} × {name}</p>
        <p className="text-gray-500">Rp {price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default PesananCard;
