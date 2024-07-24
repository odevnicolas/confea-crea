
import { Download } from 'lucide-react';
import boleto from '../assets/boleto.png'

const PaymentCard = ({ artNumber, paymentStatus }: any) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex justify-center">
        
        <img src={boleto} alt="Boleto" className="max-w-full h-auto" />
      </div>
      <div className="flex items-center justify-between mt-4">
				<div>
					<p className="text-sm font-semibold">ART: {artNumber}</p>
					<p className={`text-lg ${paymentStatus === 'Não pago' ? 'text-red-500' : 'text-green-500'}`}>
						{paymentStatus}
					</p>
				</div>
				<Download className='text-blue-500'/>
      </div>
    </div>
  );
};

export default PaymentCard;
