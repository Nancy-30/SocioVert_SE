import './sidebar.css';
import { Chat, Group, RssFeed } from "@mui/icons-material";
import {Users} from "../../DummyData";
import CloseFriend from '../closeFriend/closefriend';

 export default function sidebar() {
   return (
     <div className='sidebar'>
      <div className='sidebarWrapper'>
      <ul className='sidebarList'>
      <li className='sidebarListItem'>
      <RssFeed className='sidebarIcon'/>
      <span className='sidebarListItemtext'>
      Feed </span>
      </li>
      <li className='sidebarListItem'>
      <Chat className='sidebarIcon'/>
      <span className='sidebarListItemtext'>
      Chats </span>
      </li>
      <li className='sidebarListItem'>
      <Group className='sidebarIcon'/>
      <span className='sidebarListItemtext'>
      Communities </span>
      </li>
      </ul>
      <button className='sidebarButton'>Show More
      </button>
      <hr className='sidebarHr'/>
      <ul className='sidebarFriendList'>
       {Users.map((u)=>(
        <CloseFriend key={u.id} user={u} />
       ))}
      </ul>
      </div>
     </div>
   );
 }
 