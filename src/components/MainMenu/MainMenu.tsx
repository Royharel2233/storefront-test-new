import {
  mediumScreen,
  smallScreen
} from "../../globalStyles/scss/variables.scss";
import "./scss/index.scss";

import { useSignOut, useUserDetails } from "@sdk/react";

import { Trans } from "@lingui/react";
import * as React from "react";
import Media from "react-media";
import { Link } from "react-router-dom";

import MenuDropdownCopy from "../../components/MenuDropdownCopy";

import {
  Offline,
  Online,
  OverlayContext,
  OverlayTheme,
  OverlayType
} from "..";
import { maybe } from "../../core/utils";
import {

  accountUrl,
  baseUrl,
  orderHistoryUrl,
} from "../../routes";

import { CartContext } from "../CartProvider/context";
import NavDropdown from "./NavDropdown";

import { TypedMainMenuQuery } from "./queries";

import cartImg from  "./images/cart1.svg";

import logoImg from  "./images/logo1.svg";

import offlineAvatar from "./images/offlineAvatar.png";

import searchImg1 from "./images/search1.svg";

import userImg from "./images/user_login.png";

const classNames = require('classnames');

const MainMenu: React.FC = () => {
  const { data: user } = useUserDetails();
  const [signOut] = useSignOut();

  const [visible, setVisible] = React.useState<boolean>(true);
  const namepage = window.location.pathname;

  React.useEffect(() => {
    if (namepage.indexOf('check-out') !== -1) {
      setVisible(false)
    }
  },[]);

  const visibleHeader = classNames('FooterMain', visible, {
    'no-visible': !visible,
  });

  return (
    <OverlayContext.Consumer>
      {overlayContext => (
          <div className="container">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-md p-0">
                <div className="preheader">
                  <button
                    className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false"
                  >
                    <i className="fa fa-bars"></i>
                  </button>

                  <select
                    name="lang"
                    id="lang"
                    className="lang_selection"
                    style={{visibility: "hidden"}}>
                    <option value="En">EN</option>
                    <option value="Fr">FR</option>
                    <option value="ar">AR</option>
                    <option value="de">DE</option>
                  </select>

                  <Link to={baseUrl}>
                    <img
                      src={logoImg}
                      alt="LuxOut Shades"
                      className="img-fluid logo"/>
                  </Link>

                  <ul className="list-inline preheader_nav">
                    <Online>
                      <Media
                        query={{ minWidth: smallScreen }}

                        render={() => (
                          <>
                            {user ? (
                              <MenuDropdownCopy
                                head={
                                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <img src={userImg} className="img-fluid"/>
                                  </a>
                                }
                                content={
                                  <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                      <Link to={accountUrl}>
                                        <Trans id="Profile" />
                                      </Link>
                                    </li>
                                    <li className="dropdown-item">
                                      <Link to={orderHistoryUrl}>
                                        <Trans id="My order" />
                                      </Link>
                                    </li >
                                    <li onClick={signOut} className="dropdown-item" data-testid="logout-link">
                                      <button>
                                        Log Out
                                      </button>
                                    </li>
                                  </ul>
                                }
                              />
                            ) : (
                              <li
                                data-testid="login-btn"
                                className="list-inline-item dropdown"
                                onClick={() =>
                                  overlayContext.show(
                                    OverlayType.login,
                                    OverlayTheme.right
                                  )
                                }
                              >
                                {/* change to the Disconnected avatar */}
                                <img src={offlineAvatar} className="img-fluid"/>
                              </li>
                            )}
                            <li
                              className="list-inline-item"
                              onClick={() =>
                                overlayContext.show(OverlayType.search, OverlayTheme.right)
                              }
                            >
                              <Media
                                query={{ minWidth: mediumScreen }}
                              />
                              <a className="search">
                                <img src={searchImg1} className="img-fluid" />
                              </a>
                            </li>
                          </>
                        )}
                      />
                      <CartContext.Consumer>
                        {cart => (
                          <li
                            className="list-inline-item"
                            onClick={() => {
                              overlayContext.show(
                                OverlayType.cart,
                                OverlayTheme.right
                              )
                            }}
                          >
                            <a className="cart">
                              <img src={cartImg} className="img-fluid" />
                              {cart.getQuantity() > 0 ? (
                                <span className="badge badge-pill badge-warning">
                              {cart.getQuantity()}
                            </span>
                              ) : null}
                            </a>
                          </li>
                        )}
                      </CartContext.Consumer>
                    </Online>
                    <Offline>
                      <li className="main-menu__offline">
                        <Media
                          query={{ minWidth: mediumScreen }}
                          render={() => <span>Offline</span>}
                        />
                      </li>
                    </Offline>

                  </ul>
                </div>

                <div className={`${visibleHeader}`}>
                  <TypedMainMenuQuery renderOnError displayLoader={false}>
                    {({ data }) => {
                      const items = maybe(() => data.shop.navigation.main.items, []);
                      return (
                        <ul className="navbar-nav ml-auto">
                          <li
                            className="nav-item"
                            onClick={() =>
                              overlayContext.show(
                                OverlayType.sideNav,
                                OverlayTheme.left,
                                { data: items }
                              )
                            }
                          >
                          </li>
                          <Media
                            query={{ minWidth: mediumScreen }}
                            render={() =>
                              items.map(item => (
                                <li className="nav-item" key={item.id}>
                                  <NavDropdown overlay={overlayContext} {...item} />
                                </li>
                              ))
                            }
                          />
                        </ul>
                      );
                    }}
                  </TypedMainMenuQuery>
                </div>
              </nav>
            </div>
          </div>
      )}
    </OverlayContext.Consumer>
  );
};

export default MainMenu;
