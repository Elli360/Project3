import {render, fireEvent} from "@testing-library/react";
import NavItem from "../pages/Welcome.js";

it("check UpdateTool rendering", ()=>{
const {queryByTitle} = render (<NavItem/>);
const welcomeComponent = queryByTitle("notWelcomeNavItem");
expect(welcomeComponent).toBeTruthy();
});