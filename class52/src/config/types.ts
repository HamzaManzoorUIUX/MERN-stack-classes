export interface UsersDetailsProps{
    brand:string
    category:string
    description:string
    discountPercentage:number
    id:number
    images:string[]
    price:number
    rating:number
    stock:number
    thumbnail:string
    title:string
}
export interface mianUserDetailsProps{
    limit:number
    products:UsersDetailsProps[]
    skip:number
    total:number
}