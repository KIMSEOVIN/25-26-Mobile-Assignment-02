
import { Pressable, Text, StyleSheet } from "react-native";

// title과 onPress를 props로 받습니다.
function Button({ title, onPress }) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'orange',
        padding: 15,
        margin: 15,

    },
    text: {
        color: 'white',
        fontSize: 20,
    }
});

export default Button;

// // {/*function Button({title:"하고싶은말쓰기"}) {*/}
// // {/*    return(*/}
// // {/*        <Text>{title}</Text>*/}
// // {/*    ) ->비구조화할당*/}
// // {/*}*/}

// import PropTypes from "prop-types";
// import { Pressable, Text, StyleSheet } from "react-native";


// const ButtonTypes = {
//     NUMBER: 'NUMBER',
//     OPERATOR: 'OPERATOR'
// }

// const Colors = {
//     NUMBER: ['#71717a', '#3f3f46'],
//     OPERATOR: ['#f59e0b', '#b45309'],
// }
// const Button = ({title, onPress, buttonStyle, buttonType}) => {
//     return(
//         <Pressable
//             style={({pressed}) => [
//                 styles.button,
//                 {backgroundColor: Colors[buttonType][0]},
//                 pressed && {backgroundColor: Colors[buttonType][1]},
//                 buttonStyle
//             ]}
//             onPressOut={onPress}
//         >
//             <Text style={styles.title}>{title}</Text>
//         </Pressable>
//     )
// }

// Button.defaultProps = {
//     buttonType: ButtonTypes.NUMBER
// }
// Button.propTypes = {
//     title: PropTypes.string.isRequired,
//     onPress: PropTypes.func.isRequired,
//     buttonStyle: PropTypes.oneOf(Object.values(ButtonTypes))
// }

// const styles = StyleSheet.create({
//     button: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     title: {
//         color: '#ffffff',
//         fontSize: 50
//     }
// })

// export {ButtonTypes};
// export default Button;