import React, { useContext, useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput,  Animated, Easing, } from "react-native";
// import ThemeContext from "../../context/ThemeContext/ThemeContext";
// import { theme } from "../../context/ThemeContext/ThemeColor";
import { Feather, Entypo, FontAwesome5 } from "@expo/vector-icons";
// import styles from "./style";

export default function TextField(props) {
//   const themeContext = useContext(ThemeContext);
//   const currentTheme = theme[themeContext.ThemeValue];

 const [eye, setEye] = useState(false);

//  const [isFocused, setIsFocused] = useState(false)

 const {value, onBlur, onFocus, StyleError} = props;

 const inputRef = useRef(null)
//  const focusAnim = useRef(new Animated.Value(0)).current

//   useEffect(() => {
//     Animated.timing(focusAnim, {
//       toValue: isFocused || !!value ? 1 : 0,
//       duration: 150,
//       easing: Easing.bezier(0.4, 0, 0.2, 1),
//       useNativeDriver: true,
//     }).start()
//   }, [focusAnim, isFocused, value])

 return (
   <View style={{ width: props.inputWidth }}>
    
     <View style = {{flexDirection: "row", marginTop: 5}} >
       <TextInput
          ref={inputRef}
         autoCapitalize="none"
         maxLength={30}
         keyboardType="default"
         underlineColorAndroid="transparent"
         returnKeyType={"next"}
         placeholder={props.PlaceholderInfo}
         placeholderTextColor={'#000'}
         autoCorrect={false}
         secureTextEntry={props.eye ? (!eye ? true : false) : false}
         value={value}
         onChangeText={props.SetEditinfo}

        //  onBlur={(event) => {
        //    setIsFocused(false)
        //    onBlur?.(event)
        //  }}
        //  onFocus={(event) => {
        //    setIsFocused(true)
        //    onFocus?.(event)
        //  }}
        //  style={[
        //    {
        //        color: '#fff'
        //    },
        //    styles().h40px,
        //    styles().pl15,
          
        //    styles().br5, StyleError,
        //    {
        //    //   color: currentTheme.black,
        //    //   backgroundColor: currentTheme.BBBBBB,
        //    },
        //    props.borderInput,
          
        //  ]}
         {...props}
       />
       {props.eye ? (
         <TouchableOpacity style = {{marginTop : 7, marginLeft: 15}}
           onPress={() => setEye(!eye)}
          //  style={[styles().posAbs, styles().right15, styles().top15]}
         >
           <FontAwesome5
             name={eye ? "eye" : "eye-slash"}
             size={14}
           //   color={isFocused ? currentTheme.white : currentTheme.c999999}
           />
         </TouchableOpacity>
       ) : null}
       
     </View>
   </View>
 );
}
