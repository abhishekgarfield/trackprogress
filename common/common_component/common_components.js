import { Children } from "react"
import { styles } from "../../styles/common_styles"

export const Row = ({children}) =>{
    return(
        <View style={styles.rowStyles}>{children}</View>
    )
}

export const Col = ({children}) => {
    return(
        <View>{children}</View>
    )
}

