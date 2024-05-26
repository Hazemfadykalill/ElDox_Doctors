
export type CouponsList = CouponsObject[]

export interface CouponsObject {
  discountCode: string
  numOfRequests: number
  discountType: string
  value: number
  active: boolean
  id: number
  createdAt: string
}