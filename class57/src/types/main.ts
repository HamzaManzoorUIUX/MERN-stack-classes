import { Dispatch } from "react"

export type activeType="about"|"skill"|"portfolio"|'education'
export interface NavBarType{
    active?:activeType,
    onChangeActive?:Dispatch<React.SetStateAction<activeType>>
}