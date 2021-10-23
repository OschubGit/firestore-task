import React from "react";

const MenuMobile = () => {
  return (
    <aside className="menu">
      <p className="menu-label">Administration</p>
      <ul className="menu-list">
        <li>
          <a href="www.instagram.com">Team Settings</a>
        </li>
        <li>
          <a href="www.instagram.com" className="is-active">
            Manage Your Team
          </a>
          <ul>
            <li>
              <a href="www.instagram.com">Members</a>
            </li>
            <li>
              <a href="www.instagram.com">Plugins</a>
            </li>
            <li>
              <a href="www.instagram.com">Add a member</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="www.instagram.com">Invitations</a>
        </li>
        <li>
          <a href="www.instagram.com">Cloud Storage Environment Settings</a>
        </li>
        <li>
          <a href="www.instagram.com">Authentication</a>
        </li>
      </ul>
    </aside>
  );
};

export default MenuMobile;
