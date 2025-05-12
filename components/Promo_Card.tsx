const PromoCard: React.FC = () => {
    return (
      <div className="bg-yellow-100 p-4 rounded-lg flex items-center space-x-4">
        <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center">
          <span className="text-xl">🍔</span>
        </div>
        <div>
          <h3 className="text-orange-500 font-bold">Promo Hari Ini</h3>
          <p className="text-gray-700">Perut kenyang, hati senang</p>
        </div>
      </div>
    );
  };
  
  export default PromoCard;
  