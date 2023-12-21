import React from 'react'
import Shipment from '../main_page/Ship';

export default function ToBeShip() {
  return (
    <div className='q1'>
          <Shipment no={1}shopname="Example Shop" nop={10} noi={20} add="123 Main St" />
          <Shipment no={2} shopname={"Grocessery"} nop={150} noi={50} add={"1/34 kannara street 51 pudukkudi kudavasal(tk)"}/>
          <Shipment no={3} shopname={"Treat of Trick"} nop={350} noi={90} add={"1/34 kannara str(tk)"}/>
          <Shipment no={4} shopname={"Ram Stores"} nop={600} noi={350} add={"street 51 pudukkudi kudavasal(tk)"}/>
    </div>
  )
}
