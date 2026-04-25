import { type cartItem} from "@/entities/cart"

const calcTotal = (items: cartItem[]) => {
  return items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0)
}
export default calcTotal