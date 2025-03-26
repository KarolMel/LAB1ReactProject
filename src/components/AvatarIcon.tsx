import '../AvatarStyles.css'
import { useState } from 'react'

function AvatarIcon() {
    const [currentAvatar, setCurrentAvatar] = useState<string>('/avatars/defaultAvatar.png');
    return (
        <>
            <div className="avatarIconDiv">
                <img className="avatarIconImg" src={currentAvatar}/>
            </div>
        </>
    )
}

export default AvatarIcon