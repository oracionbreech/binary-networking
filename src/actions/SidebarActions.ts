import { CHANGE_ANIMATION } from "../action-types/SidebarActionTypes";

export const changeAnimation = (animation:string) => ({
    type: CHANGE_ANIMATION,
    animation
})