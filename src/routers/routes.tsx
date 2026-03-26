 const routes = [
    { path: "/", breadcrumb: "/ " },
    { path: "/hone", breadcrumb: "Home" },
    { path: "/home/runners", breadcrumb: t("menu.items.runner") },
    {
      path: "/home/rules",
      breadcrumb: "Rules",
      props: { someProp: "Hi" },
    },
  ];