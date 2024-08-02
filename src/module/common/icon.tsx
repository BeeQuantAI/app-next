import type { IconBaseProps } from "react-icons";
import { GoEye, GoEyeClosed, GoKey, GoPerson } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import { MdSunny, MdModeNight } from "react-icons/md";
const icons = {
  person: GoPerson,
  key: GoKey,
  "eye-open": GoEye,
  "eye-closed": GoEyeClosed,
  menu: AiOutlineMenu,
  dayTime: MdSunny,
  nightTime: MdModeNight,
};

export type Icons = keyof typeof icons;
export type IconProps = {
  icon: Icons;
} & IconBaseProps;
export function Icon({ icon, ...props }: IconProps) {
  const I = icons[icon];
  return <I {...props} />;
}
