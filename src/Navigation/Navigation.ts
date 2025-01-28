import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

export type AppNavigationProps = {
    Search:undefined;
    Details: {title:'string', subTitle:'string'}
}

export type AppProps<T extends keyof AppNavigationProps> =
  StackScreenProps<AppNavigationProps, T>;