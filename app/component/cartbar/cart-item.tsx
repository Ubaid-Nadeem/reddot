import { Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'

interface CartItemProps {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  onIncrease: () => void
  onDecrease: () => void
  onRemove: () => void
}

export function CartItem({ id, name, price, quantity, image, onIncrease, onDecrease, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center py-4 border-b font-light">
      <Image src={image} alt={name} width={80} height={80} className="rounded-md" />
      <div className="text-left ml-4 flex-grow">
        <h3 className="text-[15px] font-semibold text-black max-h-12 overflow-hidden">{name}</h3>
        <p className="text-sm text-gray-500 ">${price.toFixed(2)}</p>
        <div className="flex items-center mt-2 text-black ">
          <button onClick={onDecrease} className="p-1 rounded-full hover:bg-gray-100">
            <Minus className="w-4 h-4" />
          </button>
          <span className="mx-2">{quantity}</span>
          <button onClick={onIncrease} className="p-1 rounded-full hover:bg-gray-100">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
      <button onClick={onRemove} className="p-2 text-red-500 hover:text-red-700">
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  )
}

