type ActionType = {
    type:string
}

export type StateType = {
    collapsed:boolean
}

export const reducer = (state: StateType, action: ActionType):StateType => {
    debugger
    switch (action.type) {
        case 'TOGGLE_COLLAPSED':
            debugger
            return {...state, collapsed:!state.collapsed}
        default:
            throw new Error('incorrect action')
    }
}