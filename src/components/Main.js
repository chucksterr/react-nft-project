import React, {useState, useEffect} from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = ({selectedPunk, punkListData}) => {
  const [activePunk, setActivePunk] = useState(punkListData[0])
  console.log(punkListData, 'from Main.js')
  console.log(selectedPunk)

  useEffect(()=>{
    setActivePunk(punkListData[selectedPunk])
  },[punkListData, selectedPunk])

    return (
      <div className="main">
        <div className="mainContent">
          <div className="punkHighlight">
            <div className="punkContainer">
              <img
                className="selectedPunk"
                  src={activePunk.image_original_url}
                alt=""
              />
            </div>
          </div>
          <div className="punkDetails" style={{ color: "#fff" }}>
            <div className="title">{activePunk.name} <span className="itemNumber">◦#{activePunk.token_id}</span></div>
            
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img
                src={
                  //"https://ipfs.io/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4"
                  activePunk.owner.profile_img_url
                }
                alt=""
              />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>0xeDCd19C1cF36dc5311E98bB26A90B93A07978416</div>
                <div className="ownerHandle">@coderchuck</div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Main
