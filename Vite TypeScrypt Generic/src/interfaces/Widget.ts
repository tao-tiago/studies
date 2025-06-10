export default interface IWidget {
  id: number
  title: string
  description: string
  rating: number
  createdAt: Date
  updatedAt: Date
  isSpecialCard: boolean
}