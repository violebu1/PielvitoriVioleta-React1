import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MySideNav() {
  const navigate = useNavigate();
  return (
    <SideNav
      onSelect={(selected) => {
        console.log(selected);
        navigate("/" + selected);
      }}
      className="mysidenav"
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="Inicio">
        <NavItem eventKey="home">
          <NavIcon>
            <i class="bx bx-home-alt" style={{ fontSize: "1.75em" }}></i>
          </NavIcon>
          <NavText>Inicio</NavText>
        </NavItem>
        <NavItem eventKey="SobreNosotros">
          <NavIcon>
            <i class="bx bxs-user-detail" style={{ fontSize: "1.75em" }}></i>
          </NavIcon>
          <NavText>Sobre Nosotros</NavText>
        </NavItem>
        <NavItem eventKey="Venta">
          <NavIcon>
            <i class="bx bxs-store-alt" style={{ fontSize: "1.75em" }}></i>
          </NavIcon>
          <NavText>Tienda</NavText>
        </NavItem>
        <NavItem eventKey="Contacto">
          <NavIcon>
            <i class="bx bxs-message-edit" style={{ fontSize: "1.75em" }}></i>
          </NavIcon>
          <NavText>Contáctenos</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default MySideNav;
