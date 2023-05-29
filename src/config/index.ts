import {
  IconNotification,
  IconLifebuoy,
  IconSettings,
  IconApps,
  IconBrandGoogleAnalytics,
  IconStack,
  IconChartDots2,
  TablerIconsProps,
} from "@tabler/icons-react";

type TNestedLinks = {
  id: string;
  name: string;
  url?: string;
};

type TPanelItem = {
  id: string;
  name: string;
  icon: (props: TablerIconsProps) => JSX.Element;
  url?: string;
  children?: TNestedLinks[];
};

interface TSideBarComposition {
  middlePanel: TPanelItem[];
  bottomPanel: TPanelItem[];
}

export const SideBarComposition: TSideBarComposition = {
  middlePanel: [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: IconApps,
      children: [
        {
          id: "dash_analytics",
          name: "Analytics Dashboard",
          url: "/dashboard",
        },
      ],
    },
    {
      id: "analytics",
      name: "Analaytics",
      icon: IconBrandGoogleAnalytics,
      url: "analytics",
    },
    {
      id: "products",
      name: "Products",
      icon: IconStack,
    },
    {
      id: "exchange",
      name: "Exchange",
      icon: IconChartDots2,
    },
  ],
  bottomPanel: [
    {
      id: "notification",
      name: "Notifications",
      icon: IconNotification,
    },
    {
      id: "support",
      name: "Support",
      icon: IconLifebuoy,
    },
    {
      id: "settings",
      name: "Settings",
      icon: IconSettings,
    },
  ],
};
