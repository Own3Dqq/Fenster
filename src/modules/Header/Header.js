import Logo from "../Logo/Logo";

// function Avatar(props) {
//     return (
//         <img className="Avatar"
//              src={props.user.avatarUrl}
//              alt={props.user.name}
//         />
//     );
// }

// function UserInfo(props) {
//     return (
//         <div className="UserInfo">
//             <Avatar user={props.user} />
//             <div className="UserInfo-name">
//                 {props.user.name}
//             </div>
//         </div>
//     );
// }


function Header (props) {
    return (
        <Logo></Logo>
        // <Nav></Nav>
        // <Btn></Btn>
    )
}


// function Header(props) {
//         return (
//             <div className="Comment">
//                 <UserInfo user={props.author} />
//                 <div className="Comment-text">
//                     {props.text}
//                 </div>
//                 <div className="Comment-date">
//                     {/*{formatDate(props.date)}*/}
//                 </div>
//             </div>
//         );
// }

export default Header;
