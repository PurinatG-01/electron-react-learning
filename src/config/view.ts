import DashboardView from "../components/view/DashboardView"
import DashboardIcon from "@mui/icons-material/Dashboard"
const viewConfig = {
  viewList: [
    {
      id: "dashboard",
      navbarTitle: "Dashboard",
      component: () => DashboardView,
      icon: () => DashboardIcon,
      props: {},
    },
  ],
}
export interface ViewItemConfig {
  id: string
  navbarTitle: string
  component: () => () => JSX.Element
  props: {}
}
export default viewConfig
