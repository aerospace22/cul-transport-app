import { useRoute, NavigationProp } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const BottomNav: React.FC<{ navigate: NavigationProp<any>["navigate"] }> = (
  props
) => {
  const route = useRoute();

  const NavButton: React.FC<{
    screenName: string;
    icon: string;
    label: string;
    navigate: NavigationProp<any>["navigate"];
  }> = (props) => {
    const getButtonColor = () => {
      const isActive = route.name === props.screenName;

      if (isActive) {
        return {
          iconColor: "lightcoral",
          labelColor: "text-red-400",
        };
      }

      return {
        iconColor: "#555",
        labelColor: "text-gray-400",
      };
    };

    const goToScreen = (screen: string) => {
      return props.navigate(screen);
    };

    const { iconColor, labelColor } = getButtonColor();

    return (
      <Pressable
        className="flex flex-col items-center gap-y-2"
        onPress={() => goToScreen(props.screenName)}
      >
        <Ionicons name={props.icon as any} size={20} color={iconColor} />
        <Text className={`text-[10px] text-center uppercase font-medium ${labelColor}`}>
          {props.label}
        </Text>
      </Pressable>
    );
  };

  const buttons = [
    {
      name: "HOME_SCREEN",
      label: "Home",
      icon: "home-outline",
    },
    {
      name: "MY_TICKETS_SCREEN",
      label: "Tickets",
      icon: "ticket-outline",
    },
    {
      name: "MY_PAYMENTS_SCREEN",
      label: "Payments",
      icon: "card-outline",
    },
    {
      name: "MY_PROFILE_SCREEN",
      label: "Account",
      icon: "person-outline",
    },
  ];

  return (
    <View
      className="w-full h-[70px] flex flex-row justify-between items-center fixed bottom-0 border-gray-300 px-5"
      style={{ borderTopWidth: 1 }}
    >
      {buttons.map((button) => (
        <NavButton
          icon={button.icon}
          screenName={button.name}
          label={button.label}
          navigate={props.navigate}
          key={`bottom-nav-button-${button.name}`}
        />
      ))}
    </View>
  );
};
