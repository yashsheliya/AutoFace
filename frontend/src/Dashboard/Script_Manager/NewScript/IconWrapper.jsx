// src/components/Icons/IconWrapper.jsx
import React from 'react';
import {
  MdOutlineOndemandVideo, MdOutlineVideoLibrary, MdOutlineNewspaper, MdOutlinePostAdd,
  MdOutlineTouchApp, MdOutlineDelete, MdOutlineNotifications, MdOutlinePersonAdd,
  MdOutlinePersonRemove, MdGroupAdd, MdExitToApp, MdOutlineMail, MdThumbUp, MdPeople,
  MdOutlineVisibility, MdLogin, MdOutlineVpnKey, MdOutlinePhone, MdOutlineEmail, MdOutlineBadge,
  MdOutlineInfo, MdOutlineAccountCircle, MdOutlinePhotoLibrary, MdOutlineDevices, MdSecurity
} from 'react-icons/md';

const iconComponents = {
  MdOutlineOndemandVideo, MdOutlineVideoLibrary, MdOutlineNewspaper, MdOutlinePostAdd,
  MdOutlineTouchApp, MdOutlineDelete, MdOutlineNotifications, MdOutlinePersonAdd,
  MdOutlinePersonRemove, MdGroupAdd, MdExitToApp, MdOutlineMail, MdThumbUp, MdPeople,
  MdOutlineVisibility, MdLogin, MdOutlineVpnKey, MdOutlinePhone, MdOutlineEmail, MdOutlineBadge,
  MdOutlineInfo, MdOutlineAccountCircle, MdOutlinePhotoLibrary, MdOutlineDevices, MdSecurity
};

const IconWrapper = ({ iconName, style }) => {
  const IconComponent = iconComponents[iconName];
  return IconComponent ? <IconComponent style={style} /> : null;
};

export default IconWrapper;
