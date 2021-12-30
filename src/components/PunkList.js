import React from 'react'
import CollectionCard from './CollectionCard'
import './PunkList.css'

const PunkList = ({punkListData, setSelectedPunk}) => {
  console.log(punkListData, 'from PunkList.js')
    return (
      <div className="punkList">
        {punkListData.map((punk) => (
          <div onClick={() => setSelectedPunk(punk.token_id)}>
            <CollectionCard
              key={punk.token_id}
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_original_url}
            />
          </div>
        ))}
      </div>
    );
}

export default PunkList
