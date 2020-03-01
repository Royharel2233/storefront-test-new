// import {
//   mediumScreen,
//   smallScreen
// } from "../../globalStyles/scss/variables.scss";
// import "./scss/index.scss";
//
// import { useSignOut, useUserDetails } from "@sdk/react";
//
// import * as React from "react";
// import { Link } from "react-router-dom";
//
// import {
//   OverlayContext,
// } from "..";
// import {
//
//   accountUrl,
//   baseUrl,
// } from "../../routes";
//
//
// import logoImg from  "./images/logo1.svg";
//
//
//
// const CheckoutHeader: React.FC = () => {
//   const { data: user } = useUserDetails();
//   const [signOut] = useSignOut();
//
//   return (
//     <OverlayContext.Consumer>
//       {overlayContext => (
//         <div className="container">
//           <nav className="navbar navbar-expand-md p-0">
//             <div className="preheader">
//               <select name="lang" id="lang" className="lang_selection">
//                 <option value="En">EN</option>
//                 <option value="Fr">FR</option>
//                 <option value="ar">AR</option>
//                 <option value="de">DE</option>
//               </select>
//               <Link to={baseUrl}>
//                 <img
//                   src={logoImg}
//                   alt="LuxOut Shades"
//                   className="img-fluid logo"
//                 />
//               </Link>
//             </div>
//             <br />
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//               {/*<TypedMainMenuQuery renderOnError displayLoader={false}>*/}
//               {/*  {({ data }) => {*/}
//               {/*    const items = maybe(() => data.shop.navigation.main.items, []);*/}
//               {/*    return (*/}
//                     <ul className="navbar-nav ml-auto" style={{width: "1400px", paddingLeft: "6%"}}>
//                       <li
//                         className="nav-item"
//                       >
//                         Shipping
//                       </li>
//                       <li
//                         className="nav-item"
//                         // onClick={() =>
//                         //   overlayContext.show(
//                         //     OverlayType.sideNav,
//                         //     OverlayTheme.left,
//                         //     { data: items }
//                         //   )
//                         // }
//                       >
//                         Billing
//                       </li>
//                       <li
//                         className="nav-item"
//                         // onClick={() =>
//                         //   overlayContext.show(
//                         //     OverlayType.sideNav,
//                         //     OverlayTheme.left,
//                         //     { data: items }
//                         //   )
//                         // }
//                       >
//                         Review
//                       </li>
//
//                       {/*<Media*/}
//                       {/*  query={{ minWidth: mediumScreen }}*/}
//                       {/*  render={() =>*/}
//                       {/*    items.map(item => (*/}
//                       {/*      <li className="nav-item" key={item.id}>*/}
//                       {/*        <NavDropdown overlay={overlayContext} {...item} />*/}
//                       {/*      </li>*/}
//                       {/*    ))*/}
//                       {/*  }*/}
//                       {/*/>*/}
//                     </ul>
//               {/*    );*/}
//               {/*  }}*/}
//               {/*</TypedMainMenuQuery>*/}
//             </div>
//           </nav>
//         </div>
//       )}
//     </OverlayContext.Consumer>
//   );
// };
//
// // export default CheckoutHeader;
