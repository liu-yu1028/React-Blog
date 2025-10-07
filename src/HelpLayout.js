import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>有什麼需要幫助的？</p>

      <nav>
        <NavLink to="faq">常見問題</NavLink>
        <NavLink to="contact">聯絡我們</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
