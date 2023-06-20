import React, { useState } from 'react'
import "./videoSidebar.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({ likes, messages, shares }) {

    const [snow, setSnow] = useState(false)
    const [liked, setLiked] = useState(false)
    

    function handdleSnowandFire() {
        setSnow(!snow)
    }
    function handdleLike() {
        setLiked(!liked)
    }

    return (
        <div className="videoSidebar">
                       
            <div
                className="videoSidebar__options"
                onClick={handdleSnowandFire}
            >
                {snow ? <LocalFireDepartmentIcon className="fire__Icon" fontSize="large" /> : <AcUnitIcon className="snow__Icon" fontSize="large" />}
                {/* A proposta deste icone é apenas mudar do icone de neve para o de fogo ao clicar, 
                apenas para dizer se a achou algo frio, sem graça, ou algo quente, algo que valeu apena ver.  */}
            </div>
            <div className="videoSidebar__options"
                onClick={handdleLike}
            >
                {liked ? <FavoriteIcon className="favoriteIcon" fontSize="large" /> : <FavoriteBorderIcon fontSize="large" />}
                <p className="favoriteIcon__number">{liked ? likes + 1 : likes} </p>
            </div>
            <div className="videoSidebar__options"
            >
                <ChatIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__options">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar