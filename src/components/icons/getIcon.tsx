import { SVGProps } from "react";
import IconAbout from "./IconAbout";
import IconHome from "./IconHome";
import { IconPrices } from "./intex";

export const GetIcons = ({
  href,
  props,
}: {
  href: string;
  props: SVGProps<SVGSVGElement>;
}) => {
  switch (href) {
    case "/home":
      return <IconHome {...props} />;
    case "/about":
      return <IconAbout {...props} />;
    case "/prices":
      return <IconPrices {...props} />;
    default:
      return <IconHome {...props} />;
  }
};
